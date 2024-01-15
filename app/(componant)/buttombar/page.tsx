import Image from 'next/image'
import logo from "@/public/assests/NORDIC.svg";
import Link from 'next/link';
export default function ButtomBar() {
    return (
        <>
            <div className=" h-[456px] bg-black md:bg-black  pt-[153px] px-[70px] md:text-centers flex flex-col items-center gap-8">
                <Link href={'/'}><Image src={logo} alt='logo' className='xl w-[396px] h-[37.5px] flex justify-center  ' /></Link>
                <p className='text-white text-center font-new text-sm font-normal leading-[140%] md:w-[488px] md:h-[78px]a'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
                <div>
                    <ul className='text-white font-sfdisplayl font-medium text-sm leading-[140%] underline flex gap-7'>
                        <li>Twitter</li>
                        <li>Linkdin</li>
                        <li>RSS</li>
                    </ul>
                </div>
                <div>
                    <p className='w-[178px] h-[34px] text-white font-sfdisplayh font-medium leading-[140%] text-center text-xs '>© 2012–2023 DevMianHaroon. All rights reserved. </p>
                </div>
            </div>
        </>
    )
}