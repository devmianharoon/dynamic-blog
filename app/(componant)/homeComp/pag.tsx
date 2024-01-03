import Image from "next/image"
import HomeImage from '../../../public/assests/homeImage.png'

export default function HomeComp() {
    return (
        <div>
            <div className="lg:mx-[245px]">
                <p className="mt-10 text-black text-center font-newl text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">A few words about this blog platform, Ghost, and how this site was made</p>
                <p className=" mt-6 mb-12 text-black text-center font-sfmono text-sm md:text-base font-normal leading-[170%]">Why Ghost (& Figma) instead of Medium, <br /> WordPress or other options? </p>
                <Image src={HomeImage} alt="HomeImage" className="mt-14 " />
                <hr className="border-[2px] border-black md:w-[640px] md:mx-[100px] my-8" />
              
            </div>
        </div>
    )
}
