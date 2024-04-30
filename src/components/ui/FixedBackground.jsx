import React from "react";
import bg from "../../assets/fixedbg.jpg";

const FixedBackground = () => {
  return (
    <div className="fixed min-h-screen w-full top-0 left-0 -z-10">
      <div className=" fixed-bg"></div>
      {/* <img className="w-full h-screen" src={bg} alt="" /> */}
    </div>
  );
};

export default FixedBackground;
