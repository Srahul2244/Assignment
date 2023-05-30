import React from "react";
import Img1 from "../components/Images/Vector (1).png"
import Img2 from "../components/Images/Vector (2).png"
import Img3 from "../components/Images/Vector (3).png"
import Img4 from "../components/Images/Vector (4).png"
import Img5 from "../components/Images/Vector (5).png"

const Work = () => {
    return (
        <div className="nav-2">
            <div >
                <div className=" mt-[60px]">
                    <h1 className="font-semibold text-[24px] leading-[36px] text-[#800080] ">How does it work ?</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-5 grid-cols-1 mt-6">
                    <div className="flex">
                        <div className="md:w-[65px] md:h-[65px] w-[150px] h-[60px] rounded-full bg-[#D9D9D940] flex justify-center items-center">
                            <img src={Img1} />
                        </div>
                        <div className="mx-5">
                            <h1 className="font-medium text-[16px] leading-[24px]">Invite your Friends</h1>
                            <p className="text-[#4D4D4D] font-medium text-[16px] leading-[24px]">Share the link tutedude.com with your friends</p>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="md:w-[65px] md:h-[65px] w-[150px] h-[60px] rounded-full bg-[#D9D9D940] flex justify-center items-center">
                            <img src={Img2} />
                        </div>
                        <div className="mx-5">
                            <h1 className="font-medium text-[16px] leading-[24px]">Invite your Friends</h1>
                            <p className="text-[#4D4D4D] font-medium text-[16px] leading-[24px]">Share the link tutedude.com with your friends</p>
                        </div>
                    </div>
                    <div className="flex  mt-[30px]">
                        <div className="md:w-[65px] md:h-[65px] w-[150px] h-[60px] rounded-full bg-[#D9D9D940] flex justify-center items-center">
                            <img src={Img3} />
                        </div>
                        <div className="mx-5">
                            <h1 className="font-medium text-[16px] leading-[24px]">Invite your Friends</h1>
                            <p className="text-[#4D4D4D] font-medium text-[16px] leading-[24px]">Share the link tutedude.com with your friends</p>
                        </div>
                    </div>
                    <div className="flex  mt-[30px]">
                        <div className="md:w-[65px] md:h-[65px] w-[150px] h-[60px] rounded-full bg-[#D9D9D940] flex justify-center items-center">
                            <img src={Img4} />
                        </div>
                        <div className="mx-5">
                            <h1 className="font-medium text-[16px] leading-[24px]">Invite your Friends</h1>
                            <p className="text-[#4D4D4D] font-medium text-[16px] leading-[24px]">Share the link tutedude.com with your friends</p>
                        </div>
                    </div>
                    <div className="flex  mt-[30px] ">
                        <div className="md:w-[65px] md:h-[65px] w-[150px] h-[60px] rounded-full bg-[#D9D9D940] flex justify-center items-center">
                            <img src={Img5} />
                        </div>
                        <div className="mx-5">
                            <h1 className="font-medium text-[16px] leading-[24px]">Invite your Friends</h1>
                            <p className="text-[#4D4D4D] font-medium text-[16px] leading-[24px]">Share the link tutedude.com with your friends</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;