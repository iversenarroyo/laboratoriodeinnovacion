import React from "react";

export const MiniHeader = () => {
  return (
    <>
      <div className=" h-6 bg-[#258CFF] flex text-white justify-between px-6 md:px-12 lg:px-24 items-center">
        <div>hub@uni.edu.pe</div>
        <div className=" grid gap-x-4 grid-cols-2 font-bold">
          <a href="https://uni.edu.pe/" target="_blank" className="px-6">
            UNI
          </a>
          <a href="https://vri.uni.edu.pe/" target="_blank" className="px-6">
            VRI
          </a>
        </div>
      </div>
    </>
  );
};
