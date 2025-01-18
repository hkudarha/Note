import { createContext, useEffect, useReducer } from "react";

export const NotesContext = createContext({
  Notes: [],
  updateNotes: () => {},
  deleteNotes: () => {},
  addNotes: () => {},
});

const NoteReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        { id: Date.now(), text: '', color: action.payload.color, time: new Date().toLocaleDateString() },
        ...state,
      ];
  
    case "update":
      return state.map((note) =>
        note.id === action.payload.id ? { ...note, text: action.payload.text } : note
      );
    case "delete":
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  const [Notes, dispatchNotes] = useReducer(NoteReducer, JSON.parse(localStorage.getItem("Notes")) ||[]);
  
  useEffect( ()=>localStorage.setItem("Notes",JSON.stringify(Notes)),[Notes] );
  const addNotes = (color) => {
    dispatchNotes({ type: "add", payload: { text: "", color } });
  };

  const deleteNotes = (id) => {
    dispatchNotes({ type: "delete", payload: { id } });
  };

  const updateNotes= (id, text) => {
    dispatchNotes({ type: "update", payload: { id, text } });
  };

  return (
    <NotesContext.Provider
      value={{
        Notes,
  updateNotes,
  deleteNotes,
  addNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
