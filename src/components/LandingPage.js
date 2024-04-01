import { RxHamburgerMenu , RxCross2} from "react-icons/rx";
import LogoTop from '../Assests/logo-top.png';
import { useState } from "react";
const LandingPage = () => {
    const [mobileNav, setMobileNave] = useState(false);

    const handleNav = () => {
        setMobileNave(!mobileNav);
    }
    return (
        <div className="w-screen overflow-x-hidden" >

            {/* MOBILE MENU BAR */}
            <div className={`lg:hidden z-50 fixed top-0 w-[300px] pt-16 overflow-auto  h-screen bg-black duration-500 ease-in-out ${mobileNav ? "-right-0" : "-right-[330px]"}`}>

                <div className="lg:hidden absolute right-4 top-3" onClick={handleNav} >
                    <RxCross2 className=" text-3xl text-white" />
                </div>

                <div className="flex flex-col lg:flex-row  gap-[13px]  font-medium text-white items-center">
                    <div className="cursor-pointer">Home</div>
                    <div className="cursor-pointer">About</div>
                    <div className="cursor-pointer">Artist</div>
                    <div className="cursor-pointer">Staking</div>
                    <div className="cursor-pointer">Roadmap</div>
                    <div className="cursor-pointer">Team</div>
                    <div className="cursor-pointer">Vesting</div>
                    <div className="cursor-pointer">Marketplace</div>
                    <button className="bg-[#EF203B] min-w-36 text-white rounded-md min-h-[6vh] text-sm font-semibold text-center">Connect Wallet</button>
                </div>
            </div>
            {/* MOBILE MENU BAR  END*/}



            <div className="container mx-auto flex justify-between items-center w-100">

                <div className="w-24"  >
                    <img alt="" src={LogoTop} className="w-[90px] h-[90px]" />
                </div>



                <div className="lg:hidden" onClick={handleNav} >
                    <RxHamburgerMenu className=" text-2xl text-white" />
                </div>

                <div className="hidden lg:block">

                    <div className="flex flex-col lg:flex-row  gap-[2.75vw]  font-medium text-white items-center">
                        <div className="cursor-pointer">Home</div>
                        <div className="cursor-pointer">About</div>
                        <div className="cursor-pointer">Artist</div>
                        <div className="cursor-pointer">Staking</div>
                        <div className="cursor-pointer">Roadmap</div>
                        <div className="cursor-pointer">Team</div>
                        <div className="cursor-pointer">Vesting</div>
                        <div className="cursor-pointer">Marketplace</div>
                        <button className="bg-[#EF203B] min-w-36 text-white rounded-md min-h-[6vh] text-sm font-semibold text-center">Connect Wallet</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default LandingPage;
