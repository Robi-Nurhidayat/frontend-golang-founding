import Image from 'next/image'
import TestimonialOne from 'public/testimonial-1-icon.png'
import TestimonialTwo from 'public/testimonial-2-icon.png'
import TestimonialThree from 'public/testimonial-3-icon.png'
import TestimonialLine from 'public/testimonial-line.svg'
const Review = () => {
  return (
    <div>
        
        <div className='w-[1031px] ml-[100px] '>
            <h2 className='w-[364px] mb-[79px] text-[28px] font-[500] text-[#222] relative'>Lihat Apa Yang Dikatakan Oleh Klien Kami
            <Image src={TestimonialLine} alt='line' className='absolute right-[50%] top-[50%] translate-y-[70%]' />
            </h2>

            <div className='w-[827px] ml-[204px] '>
                <p className='text-[32px] font-[300] mb-[30px] text-[#222]'>“Funding at Bucker is very easy and comfortable. 
                    Just need to find an idea, click and already funding.”</p>
                    <div className='flex flex-col mb-[30px]'>
                        <span className='text-[24px] font-[500] text-[#222]'>Shopie Nicole</span>
                        <span className='text-[24px] font-[300] text-[#BFBFBF]'>Project Manager</span>
                    </div>
                    <div className='flex items-center gap-x-[30px]'>
                        
                        <div className='border rounded-full p-2 border-[#3B41E3]'><Image src={TestimonialOne} alt='testimonial 1' /></div>
                        <div className='border rounded-full p-2 border-[#3B41E3]'><Image src={TestimonialTwo} alt='testimonial 2' /></div>
                        <div className='border rounded-full p-2 border-[#3B41E3]'><Image src={TestimonialThree} alt='testimonial 3' /></div>
                    </div>

                   
            </div>
        </div>
    </div>
  )
}

export default Review