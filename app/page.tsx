import Image from "next/image";
import HomeImage from '../public/assests/home.png'
export default function Home() {
  return (
    <>
      <div className="lg:mx-[245px]">
        <Image src={HomeImage} alt="HomeImage" className="mt-14 " />
        <p className="mt-10 text-black text-center font-newl text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">A few words about this blog platform, Ghost, and how this site was made</p>
        <p className=" mt-6 mb-12 text-black text-center font-sfmono text-sm md:text-base font-normal leading-[170%]">Why Ghost (& Figma) instead of Medium, <br /> WordPress or other options? </p>
        <hr className="border-[2px] border-black md:w-[640px] md:mx-[100px]" />
      </div>
    </>
  )
}
