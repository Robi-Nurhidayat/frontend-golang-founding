import Image from 'next/image'
import Link from 'next/link'
import Drone from 'public/drone.png'

const Campaign = () => {
  return (
    <div className='pl-[50px] mb-[50px]'>
        <div className="w-[1283px] flex justify-between mb-[50px]">
            <h2 className="w-[319px] text-[28px] font-[500] text-[#222]">Project baru yang bisa Anda kerjakan</h2>
            <Link href={"/"}>Lihat Semua</Link>
        </div>
        <div className='w-[1240px] h-[888px] grid grid-cols-3 gap-x-[65px] gap-y-[50px] '>
            {/* card 1 */}
            <div className='w-[370px] p-[22px] border shadow-sm rounded-20'>
                <div className='mb-[22px]'>
                    <Image src={Drone} alt='drone' />

                </div>
                <div className='mb-5'>
                    <h3 className='text-[24px] font-[500] text-[#222] mb-0.5'>Auto Pilot Drone</h3>
                    <p className='text-[14px] font-[300] text-[#222]'>Self driving drone, no worry to drive again</p>
                </div>
                <div className="w-[100%] h-[15px] border mx-auto mb-[10px]">
                    <div className="w-[10%] h-[100%] bg-blue-500"></div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[16px] font-[300] text-[#222]'>20%</span>
                    <span className='text-[16px] font-[600] text-[#222]'>Rp 80.000.000</span>
                </div>
            </div>

            {/* card 2 */}
            <div className='w-[370px] p-[22px] border shadow-sm rounded-20'>
                <div className='mb-[22px]'>
                    <Image src={Drone} alt='drone' />

                </div>
                <div className='mb-5'>
                    <h3 className='text-[24px] font-[500] text-[#222] mb-0.5'>Auto Pilot Drone</h3>
                    <p className='text-[14px] font-[300] text-[#222]'>Self driving drone, no worry to drive again</p>
                </div>
                <div className="w-[100%] h-[15px] border mx-auto mb-[10px]">
                    <div className="w-[10%] h-[100%] bg-blue-500"></div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[16px] font-[300] text-[#222]'>20%</span>
                    <span className='text-[16px] font-[600] text-[#222]'>Rp 80.000.000</span>
                </div>
            </div>

            {/* card 3 */}
            <div className='w-[370px] p-[22px] border shadow-sm rounded-20'>
                <div className='mb-[22px]'>
                    <Image src={Drone} alt='drone' />

                </div>
                <div className='mb-5'>
                    <h3 className='text-[24px] font-[500] text-[#222] mb-0.5'>Auto Pilot Drone</h3>
                    <p className='text-[14px] font-[300] text-[#222]'>Self driving drone, no worry to drive again</p>
                </div>
                <div className="w-[100%] h-[15px] border mx-auto mb-[10px]">
                    <div className="w-[10%] h-[100%] bg-blue-500"></div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[16px] font-[300] text-[#222]'>20%</span>
                    <span className='text-[16px] font-[600] text-[#222]'>Rp 80.000.000</span>
                </div>
            </div>

            {/* card 4 */}
            <div className='w-[370px] p-[22px] border shadow-sm rounded-20'>
                <div className='mb-[22px]'>
                    <Image src={Drone} alt='drone' />

                </div>
                <div className='mb-5'>
                    <h3 className='text-[24px] font-[500] text-[#222] mb-0.5'>Auto Pilot Drone</h3>
                    <p className='text-[14px] font-[300] text-[#222]'>Self driving drone, no worry to drive again</p>
                </div>
                <div className="w-[100%] h-[15px] border mx-auto mb-[10px]">
                    <div className="w-[10%] h-[100%] bg-blue-500"></div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[16px] font-[300] text-[#222]'>20%</span>
                    <span className='text-[16px] font-[600] text-[#222]'>Rp 80.000.000</span>
                </div>
            </div>

            {/* card 5 */}

            <div className='w-[370px] p-[22px] border shadow-sm rounded-20'>
                <div className='mb-[22px]'>
                    <Image src={Drone} alt='drone' />

                </div>
                <div className='mb-5'>
                    <h3 className='text-[24px] font-[500] text-[#222] mb-0.5'>Auto Pilot Drone</h3>
                    <p className='text-[14px] font-[300] text-[#222]'>Self driving drone, no worry to drive again</p>
                </div>
                <div className="w-[100%] h-[15px] border mx-auto mb-[10px]">
                    <div className="w-[10%] h-[100%] bg-blue-500"></div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[16px] font-[300] text-[#222]'>20%</span>
                    <span className='text-[16px] font-[600] text-[#222]'>Rp 80.000.000</span>
                </div>
            </div>

            {/* card 6 */}
            <div className='w-[370px] p-[22px] border shadow-sm rounded-20'>
                <div className='mb-[22px]'>
                    <Image src={Drone} alt='drone' />

                </div>
                <div className='mb-5'>
                    <h3 className='text-[24px] font-[500] text-[#222] mb-0.5'>Auto Pilot Drone</h3>
                    <p className='text-[14px] font-[300] text-[#222]'>Self driving drone, no worry to drive again</p>
                </div>
                <div className="w-[100%] h-[15px] border mx-auto mb-[10px]">
                    <div className="w-[10%] h-[100%] bg-blue-500"></div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-[16px] font-[300] text-[#222]'>20%</span>
                    <span className='text-[16px] font-[600] text-[#222]'>Rp 80.000.000</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Campaign

