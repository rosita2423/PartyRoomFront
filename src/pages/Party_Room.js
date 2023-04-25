import { useEffect } from "react";
import React from "react";
import { Navbar } from '../components/Navbar';


export function Party() {


  useEffect(() => {
    const studentsGrid = document.querySelector("#students-grid");

    const absoluteChairs = [
      "bottom-0 left-0",
      "bottom-2/6 -left-0",
      "top-0 left-0",
      "-top-1 left-1/5",
      "bottom-0 right-0",
      "bottom-2/6 -right-0",
      "top-0 right-0",
      "-bottom-0 right-2/6",
    ];

    for (let i = 0; i < 20; i++) {
      const table = document.createElement("div");
      table.className = " z-40 w-24 h-24 bg-red-500 rounded-lg";

      const tableContainer = document.createElement("div");
      tableContainer.className =
        "relative p-6 flex justify-center items-center my-8";

      for (let j = 0; j < 8; j++) {
        const chairContainer = document.createElement("div");
        chairContainer.className = `z-50 absolute ${absoluteChairs[j]} w-3 h-3 bg-blue-600 rounded-full`;

        const chairImg = document.createElement("img");
        chairImg.src = "/silla-grande-9272341.jpg";
        chairImg.alt = "";

        chairContainer.appendChild(chairImg);
        tableContainer.appendChild(chairContainer);
      }

      tableContainer.appendChild(table);
      studentsGrid.appendChild(tableContainer);
    }
  }, []);
  return (
    <>

      <Navbar />

      <div className="flex justify-center bg-red-300">

        <div className="w-5/6 bg-white flex p-12">
          <div
            className="w-full h-18 grid grid-cols-5 place-items-center px-5 " id="students-grid">
          </div>
        </div>

      </div>
    </>
  );
}