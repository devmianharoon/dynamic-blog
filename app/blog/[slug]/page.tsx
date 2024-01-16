'use client'
import HomeComp from "../../(componant)/homeComp/pag";
import Image from "next/image";
import Twiter from '@/public/assests/twitter.svg';
import fb from '@/public/assests/facebook.svg';
import {  useContext } from "react";
import { PostContext, PostContextProps } from "@/app/context/context";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    detail: string;
    category: string;
    image: File | null;
}

export default function Blogs({ params }: any) {
    const { posts } = useContext(PostContext) as PostContextProps;
    const post: any = posts.find((p: Post) => (p.title) === params.slug)

    return (
        <>
            <HomeComp />
            <div className="lg:mx-[245px]">
                <div className=" flex justify-between">
                    <div className="flex gap-4">
                        <div >
                        </div>
                        <div>
                            <p className="text-black font-sfdisplayh font-bold text-base uppercase">
                                Mika MAtikainen
                            </p>
                            <p className="text-black font-sfdisplayl font-normal  text-base ">
                                Apr 15, 2020 · 4 min read
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[50px]">
                        <Image src={fb} alt="FbLogo"></Image>
                        <Image src={Twiter} alt="twiterLogo"></Image>
                    </div>
                </div>
                <h1 className="text-balack font-sfdisplayh font-bold text-3xl laeading-[160%] mt-14 mb-6">{post.title}</h1>
                <Image src={post.image instanceof File ? URL.createObjectURL(post.image) : post.image} width={400} height={200} alt="Reactangel"></Image>
                <p className="font-new text-black font-normal text-xl  leading-[170%] my-14" >
                    {post.detail}
                </p>
                <p className="font-new text-black font-normal text-sm  leading-[170%] my-14" >
                    Category: {post.category}
                </p>
                <p className="font-new text-black font-normal text-xl  leading-[170%] my-14">
                    Thanks for reading,
                    <br />
                    Mehar Haroon
                </p>
                <div className="flex justify-around">
                    <div className="flex  gap-2">
                        <Image src={fb} alt="fb "></Image>
                        <p className="text-black font-sfdisplayh font-medium leading-[160%] text-base">
                            Share on Facebook
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Image src={Twiter} alt="fb "></Image>
                        <p className="text-black font-sfdisplayh font-medium leading-[160%] text-base">
                            Share on Twitter
                        </p>
                    </div>
                </div>
            </div>
            <Link href={'/blog/'}>
                <h1>Back To Blog</h1>
            </Link>
        </>
    )
}