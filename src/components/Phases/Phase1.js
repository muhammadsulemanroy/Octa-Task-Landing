import React from "react";
import D2one from "../../Assests/D2one.png";
import BlueSmokeRing1 from "../../Assests/BlueSmokeRing1.png";

const Phase1 = () => {
  return (
    <div>
      <div>
        <div className="text-[#EE153D] bg-[#FD16404D] w-[30vw] h-[5vh] mb-6">
          <h6 className="ml-3 pt-0.5">Phase - I</h6>
        </div>
      </div>

      {/* <div
        className=" max-md:flex max-md:flex-col flex bg-green-400"
        style={{ position: "relative" }}
      >
        <div
          className="flex  text-[#EE153D] bg-[#FD1640] w-[65vw] h-[15vh]"
          style={{ position: "relative", zIndex: "5" }}
        >
          <div>
            <ul
              className="text-xs"
              style={{ listStyleType: "disc", color: "white" }}
            >
              <li>Goal defining</li>
              <li>Market Research</li>
              <li>Whitepaper v1</li>
              <li>Initial Funding Secured</li>
            </ul>
          </div>

        </div>

          <div className="grid grid-cols-1 grid-rows-1 ">
            <img
              src={D2one}
              alt=""
              style={{
                gridArea: "1/1",
                width: "10rem",
                zIndex: "8"
              }}
              className="mt-[-200px]"
            />
            <img
              src={BlueSmokeRing1}
              alt=""
              style={{
                gridArea: "1/1",
                width: "15rem",
                zIndex: "1",
              }}
              className="mt-[-200px]"
            />
          </div>
      </div> */}

      <div className="flex justify-between text-[#EE153D]  w-[65vw] mb-[-200px]">
        
        <div className="bg-[#FD1640] w-[65vw] h-20 absolute z-10"></div>

        <div className="z-40">
          <ul
            className="text-xs"
            style={{ listStyleType: "disc", color: "white" }}
          >
            <li>Goal defining</li>
            <li>Market Research</li>
            <li>Whitepaper v1</li>
            <li>Initial Funding Secured</li>
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-1 grid-rows-1 relative bottom-20">
            <img
              src={D2one}
              alt=""
              style={{
                gridArea: "1/1",
                width: "10rem"
              }}
              className="z-10 "
            />
            <img
              src={BlueSmokeRing1}
              alt=""
              style={{
                gridArea: "1/1",
                position: "absolute",
                bottom: 100
              }}
              className="z-1 w-44"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase1;
