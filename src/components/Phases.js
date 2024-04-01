import React from 'react'
import D2one from "../Assests/D2one.png";
import BlueSmokeRing1 from "../Assests/BlueSmokeRing1.png";
import Phase1 from './Phases/Phase1'

const Phases = () => {
  return (
    <>
      <div className=" pt-40 pb-24">

        {/* ------------ Roadmap (Section) ------------ */}
        <div className="container mt-20 mx-auto text-center">
          <h6
            className="  text-5xl  text-white font-normal "
            style={{ fontFamily: "Zen Dots" }}
          >
            Road<span className="text-[#EE153D]">map</span>
          </h6>
          <p className="text-white">
            Guiding the fusion of culture, AI, and Web3 innovation
          </p>
        </div>


        <div className="container mx-auto px-4">

          <div className="mt-20">
            {/*PHASE  */}
            <div className=" relative">
              <div className="relative pb-16 h-full ps-[20px]">
                <div className="h-full absolute left-0 top-0 w-5   border-l-[5px] border-red-400 border-dotted " ></div>

                <div className="w-[20px] h-[20px] rounded-full bg-red-500 absolute -left-[8px] top-0 flex items-center justify-center">
                  <div className="bg-[white] w-[12px] h-[12px] rounded-full"></div>
                </div>

                <div className="">
                  <p className='max-w-[400px]  bg-[#FD16404D] text-[#FD1640] px-2'>Phase - I</p>

                  <div className="mt-5 sm:mt-20 flex justify-between bg-[#FD1640] relative w-full ">
                    <ul className='text-white text-sm ps-5 list-disc mx-w-[300px] me-4'>
                      <li>Goal defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <div className="sm:absolute right-0 bottom-0 w-[100px] sm:w-[150px]">
                      <img src={D2one} className='w-full' alt="" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/*PHASE  END*/}

            {/*PHASE  */}
            <div className="   relative">
              <div className="relative pb-16  h-full ps-[20px]">
                <div className="h-full absolute left-0 top-0 w-5   border-l-[5px] border-red-400 border-dotted " ></div>

                <div className="w-[20px] h-[20px] rounded-full bg-red-500 absolute -left-[8px] top-0 flex items-center justify-center">
                  <div className="bg-[white] w-[12px] h-[12px] rounded-full"></div>
                </div>

                <div className="">
                  <p className='max-w-[400px] ms-auto  bg-[#FD16404D] text-[#FD1640] px-2'>Phase - II</p>

                  <div className="mt-5 sm:mt-20 flex justify-between bg-[#FD1640] relative w-full ">

                    <div className=" sm:absolute left-0 bottom-0 w-[100px] sm:w-[150px]">
                      <img src={D2one} className='w-full' alt="" />
                    </div>
                    <ul className='text-white text-sm ps-5 list-disc mx-w-[300px] ms-auto me-4'>
                      <li>AI Generative System Development</li>
                      <li>Early AI Genereative System Testing</li>
                      <li>Preparing for NFT Mask Collection Launch</li>
                      <li>Website Launch V1</li>
                      <li>Whitelisting</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
            {/*PHASE  END*/}

            {/*PHASE  */}
            <div className="  relative">
              <div className="relative pb-16 h-full ps-[20px]">
                <div className="h-full absolute left-0 top-0 w-5   border-l-[5px] border-red-400 border-dotted " ></div>

                <div className="w-[20px] h-[20px] rounded-full bg-red-500 absolute -left-[8px] top-0 flex items-center justify-center">
                  <div className="bg-[white] w-[12px] h-[12px] rounded-full"></div>
                </div>

                <div className="">
                  <p className='max-w-[400px]  bg-[#FD16404D] text-[#FD1640] px-2'>Phase - III</p>

                  <div className="mt-5 sm:mt-20 flex justify-between bg-[#FD1640] relative w-full ">
                    <ul className='text-white text-sm ps-5 list-disc mx-w-[300px] me-4'>
                    <li>NFT Minting</li>
                    <li>3dotlink NFT Collection Launch</li>
                    <li>Active Marketing Campaigns</li>
                    <li>Community Engagement Initiatives</li>
                    <li>3dotlink Marketplace Launch</li>
                    </ul>
                    <div className="sm:absolute right-0 bottom-0 w-[100px] sm:w-[150px]">
                      <img src={D2one} className='w-full' alt="" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/*PHASE  END*/}

            {/*PHASE  */}
            <div className="  relative">
              <div className="relative pb-16 h-full ps-[20px]">
                <div className="h-full absolute left-0 top-0 w-5   border-l-[5px] border-red-400 border-dotted " ></div>

                <div className="w-[20px] h-[20px] rounded-full bg-red-500 absolute -left-[8px] top-0 flex items-center justify-center">
                  <div className="bg-[white] w-[12px] h-[12px] rounded-full"></div>
                </div>

                <div className="">
                  <p className='max-w-[400px] ms-auto  bg-[#FD16404D] text-[#FD1640] px-2'>Phase - IV</p>

                  <div className="mt-5 sm:mt-20 flex justify-between bg-[#FD1640] relative w-full ">

                    <div className="sm:absolute left-0 bottom-0 w-[100px] sm:w-[150px]">
                      <img src={D2one} className='w-full' alt="" />
                    </div>
                    <ul className='text-white text-sm ps-5 list-disc mx-w-[300px] ms-auto me-4'>
                      <li>Collaborations & Partnerships</li>
                      <li>Enhanced AI Generative Systems</li>
                      <li>Global Outrach Marketing</li>
                      <li>Staking</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
            {/*PHASE  END*/}





          </div>


        </div>


       
      </div>
    </>
  )
}

export default Phases