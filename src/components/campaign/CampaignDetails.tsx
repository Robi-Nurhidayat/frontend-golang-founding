import Image from "next/image"
import ProjectImage from 'public/project-image.jpg'
import ImageSlider1 from 'public/project-slider-1.jpg'
import ImageSlider2 from 'public/project-slider-2.jpg'
import ImageSlider3 from 'public/project-slider-3.jpg'
import ImageSlider4 from 'public/project-slider-4.jpg'
import UserCampaign from 'public/testimonial-1-icon.png'
import IconChecklist from 'public/icon-checklist.svg'

const CampaignDetails = () => {
  return (
    <div >
        <div className="w-[1240px] h-[1276px]  -mt-[165px] mx-auto flex items-start gap-x-5 ">
            <div className="w-[925px] bg-white rounded-2xl">
                <div className="flex items-center justify-center rounded-20 mb-5 shadow-md p-[15px]"><Image src={ProjectImage} alt="image active" className="rounded-20" /></div>
                <div className="flex items-center justify-between gap-x-[15px] mb-[30px]">
                    <div className="p-2 border rounded-20">
                    <Image src={ImageSlider1} alt="image slider 1" className="rounded-20"  />
                    </div>
                    <div className="p-2 border rounded-20">
                    <Image src={ImageSlider2} alt="image slider 2" className="rounded-20"  />
                    </div>
                    <div className="p-2 border rounded-20">
                    <Image src={ImageSlider3} alt="image slider 3" className="rounded-20"  />
                    </div>
                    <div className="p-2 border rounded-20">
                    <Image src={ImageSlider4} alt="image slider 4" className="rounded-20"  />
                    </div>
                </div>
                <div className="w-[738px] mb-5">
                    <div className="text-[#222]">
                        <h4 className="text-[36px] font-[500]">Wireboard Fortune</h4>
                        <p className="text-[18px] font-[300]">Era terbaru untuk keyboard mekanik yang cocok untuk semua kalangan.</p>
                    </div>
                </div>
                <div className="w-[738px] h-[22px] bg-[#E9E9E9] rounded-full overflow-hidden mb-5">
                    <div className="h-full w-[80%] bg-[#3B41E3]"></div>
                </div>
                <div className="w-[738px] text-[#222] flex items-center justify-between mb-[30px]">
                    <span className="text-[24px] font-[300]">80%</span>
                    <span className="text-[24px] font-[600]">Rp 40.000.000</span>
                </div>
                <p className="w-[705px] text-[18px] font-[300] text-[#222] mb-4">Designed to fit your dedicated typing experience. No matter what you like, linear, clicky or a little in between, we’ve got you covered with three Gateron switches options (Blue, Brown, Red). With a lifespan of 50 million keystroke lifespan we want to make sure that you experience same feedback for every keystroke.</p>

                <p className="w-[705px] text-[18px] font-[300] text-[#222] mb-4">With N-key rollover (NKRO on wired mode only) you can register as many keys as you can press at once without missing out characters. It allows to use all the same media keys as conventional macOS. </p>

                <p className="w-[705px] text-[18px] font-[300] text-[#222]">This keyboard can last up to 72 hours typing, or up to 9 days of normal use (8 hrs/day) with a 4000 mAh big battery.</p>
            </div>
            <div className="w-[295px] border p-[22px] bg-white shadow-sm rounded-20">
                <h6 className="text-[14px] text-[#222] mb-[22px]">Project Leader:</h6>
                <div className="flex items-center gap-x-[22px] mb-[22px]">
                    <Image src={UserCampaign} alt="user campaign" />
                    <div>
                        <h4 className="text-[20px] text-[#222] font-[600] mb-1">Julia Keeva</h4>
                        <p className="text-[14px] text-[#C2C2C2]">28.093 backer</p>
                    </div>
                    
                </div>
                <p className="text-[14px] text-[#222] font-[600] mb-[14px]">What will you get:</p>
                <ul className="flex flex-col gap-y-[15px] mb-[22px]">
                    <li className="flex items-start gap-x-2.5">
                        <Image src={IconChecklist} alt="icon" />
                        <span className="text-[14px] text-[#222]">Equity of the startup directly from the founder</span>
                    </li>
                    <li className="flex items-start gap-x-2.5">
                        <Image src={IconChecklist} alt="icon" />
                        <span className="text-[14px] text-[#222]">Special service or product that startup has</span>
                    </li>
                     <li className="flex items-start gap-x-2.5">
                        <Image src={IconChecklist} alt="icon" />
                        <span className="text-[14px] text-[#222]">You can also sell your equity once the startup going IPO</span>
                    </li>
                </ul>
                <form action="#" className="w-full">
                    <input type="number" name="amount" className="p-[11px_121px_11px_22px] w-[251px] mb-[15px] outline-none border text-[16px] rounded-full" placeholder="Amount in Rp" />
                    <button className="w-[251px] p-[11px_86px_11px_85px] text-[16px] text-white font-[600] bg-[#C2C2C2] rounded-full">Fund Now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CampaignDetails