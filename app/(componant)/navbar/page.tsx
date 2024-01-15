import Link from 'next/link';
import Image from 'next/image'
import menu from "@/public/assests/Group 50.svg";
import logo from "@/public/assests/NORDIC ROSE.svg";

export default function Navbar() {
    return (
        <>
            <section className=' px-5 py-6 flex gap-2 justify-between md:px-16 md:pt-14 md:pb-0  bg-white shadow-md'>
                <Link href={'/'}><Image src={logo} alt='logo' className='xl w-[396px] h-[37.5px]' /></Link>
                <Image src={menu} alt='menu' className='md:hidden cursor-pointer' />
                <ul className=' sm:hidden hidden md:flex  gap-8'>
                    <Link href={'/blog'}><li className='font-new text-black text-center text-2xl font-normal md:font-medium leading-[170%] tracking-wider uppercase hover:border-b-[6px] hover:border-[#000000] pb-8'>Blog</li></Link>
                    <Link href={'/about'}><li className='font-new text-black text-center text-2xl font-normal md:font-medium leading-[170%] tracking-wider uppercase hover:border-b-[6px] hover:border-[#000000] pb-8'>About</li></Link>
                    <Link href={'/link'}><li className='font-new text-black text-center text-2xl font-normal md:font-medium leading-[170%] tracking-wider uppercase hover:border-b-[6px] hover:border-[#000000] pb-8'>Link</li></Link>
                    <Link href={'/project'}><li className='font-new text-black text-center text-2xl font-normal md:font-medium leading-[170%] tracking-wider uppercase hover:border-b-[6px] hover:border-[#000000] pb-8'>Project</li></Link>
                </ul>

            </section>
        </>
    )
}