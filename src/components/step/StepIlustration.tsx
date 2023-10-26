import Image from "next/image"
import StepOne from 'public/step-1-illustration.svg'
import StepTwo from 'public/step-2-illustration.svg'
import StepThree from 'public/step-3-illustration.svg'
import Line from 'public/line-step.svg'

const StepIlustration = () => {
  return (
    <div className="pl-[47px] mb-[100px]">
        
        <h2 className="w-[493px] text-[28px] font-[500] text-[#222222] ml-[100px]">Hanya butuh 3 langkah untuk menjalankan ide cemerlang Anda!</h2>
        <div className="w-[1176.8px] h-[502px] flex justify-between items-end  ml-[116px] relative">
        <Image src={Line} alt="line" className="absolute left-[125px] top-[5px]" />
            {/* step 1 */}
            
            <div className="w-[278px] h-[362px] flex flex-col gap-y-4 items-center justify-end">
                <div><Image src={StepOne} alt="step 1" className="w-[217.92px]" /></div>
                <h6 className="text-center text-[18px] font-[500]">Sign Up</h6>
                <p className="w-[278px] text-[16px] text-center text-[#222222] font-[300]">Daftarkan akun Anda dan mulailah mendanai project</p>
            </div>
           

            {/* step 2 */}
           
           <div className="w-[212px] h-[362px] flex flex-col gap-y-4 items-center justify-end -translate-y-[70px]">
                <div><Image src={StepTwo} alt="step 2" className="w-[191.24px]" /></div>
                <h6 className="text-center text-[18px] font-[500]">Buka Project</h6>
                <p className="w-[212px] text-[16px] text-center text-[#222222] font-[300]">Pilih beberapa ide project, dan mulailah mendanai</p>
            </div>

       
            {/* step 3 */}
    
            <div className="w-[243.8px] h-[362px] flex flex-col gap-y-4 items-center justify-end -translate-y-[140px]">
                <div><Image src={StepThree} alt="step 3" className="w-full" /></div>
                <h6 className="text-center text-[18px] font-[500]">Jalankan</h6>
                <p className="w-[243px] text-[16px] text-center text-[#222222] font-[300]">Saatnya buat mimpi Anda menjadi nyata. </p>
            
            </div>
        </div>
    </div>
  )
}

export default StepIlustration