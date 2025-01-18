import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { NotesContext } from "./Store";

const Note = () => {
  const { Notes, deleteNotes,updateNotes} = useContext(NotesContext);

  return (
    <div className="h-[100%] ">
      <h1 className="text-2xl">Notes</h1>
      <div className="flex flex-wrap">
        {Notes.map((note) => (
          <div
            key={note.id}
            className="flex flex-col rounded-xl p-4 w-[250px] h-[280px] m-3"
            style={{ background: note.color }}
          >
            <textarea
              className="outline-none resize-none border-none flex-1 bg-inherit"
              onChange={(e) => updateNotes(note.id, e.target.value)}
              value={note.text}
            />
            <div className="flex items-center justify-between">
              <span>{note.time}</span>
              <MdDelete
                className="size-6 cursor-pointer"
                onClick={() => deleteNotes(note.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
