import React, { useContext, useState } from "react";
import { NotesContext } from "./Store";

const Sidebar = () => {
  const colors = ["#fe9b72", "#fec971", "#87CEEB", "#b693fd", "#e4ee91"];
  const [open, setOpen] = useState(false);
  const { addNotes } = useContext(NotesContext);

  const clickOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col items-center w-[10%] ">
      <button
        className="bg-black text-white w-11 h-11 rounded-[50%] text-2xl font-extrabold"
        onClick={clickOpen}
      >
        +
      </button>
      <ul>
        {open &&
          colors.map((item, index) => (
            <li
              style={{ background: item }}
              key={index}
              className=" h-8 w-8 rounded-[50%] mt-2"
              onClick={() => addNotes(item)}
            ></li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
