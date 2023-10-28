import Image from 'next/image'
import Link from 'next/link'
import NotFound404 from 'public/404-illustration.svg'

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='w-[512px] flex flex-col items-center'>
            <Image src={NotFound404} alt='not found image' className='mb-[55px]' />
            <h4 className='text-[36px] font-[500] text-[#222] mb-3' >Oops! terjadi kesalahan</h4>
            <p className='mb-[30px] text-[20px] font-[300] w-[273px] text-[#222] text-center'>Halaman yang anda minta tidak tersedia untuk saat ini</p>
            <Link href={"/"} className='text-[20px] font-[600] text-white p-[12px_110px_13px_111px] bg-[#FF872E] rounded-full'>Kembali ke Home</Link>
        </div>
    </div>
  )
}

export default NotFound