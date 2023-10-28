import Image from 'next/image'
import Link from 'next/link'
import Avatar from 'public/Profile.png'
import RadialFull from 'public/RadialFull.svg'

const LoginUploadImage = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-[#3B41E3]'>
        <div className='w-[664px] flex flex-col items-center relative'>
            <Image src={Avatar} alt='not found image' className='mb-[16px]' />
            <h5 className='mb-3 text-[36px] font-[500] text-white'>Hi, Julia</h5>
            <p className='mb-[30px] text-[20px] font-[300] text-white text-center'>Please upload your selfie</p>
            
            <div className='mb-5'><Link href={"/"} className='text-[20px] font-[600] text-white p-[12px_127px_13px_127px] bg-[#FF872E] rounded-full'>Sign Up Now</Link></div>
            <div className='mt-5'><Link href={"/"} className='text-[20px] font-[400] text-white p-[12px_170px_13px_171px] border rounded-full'>Skip</Link></div>

            {/* Set the z-index using the correct class */}
            <div className='absolute top-[-300px] left-0 right-0 bottom-0 w-[1000px] h-[1000px] z-[10]'>
                <Image src={RadialFull} alt='bg' />
            </div>
        </div>
    </div>
  )
}

export default LoginUploadImage
