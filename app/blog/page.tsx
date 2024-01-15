'use client'
import { FaTimes } from 'react-icons/fa';
import {  onChangeEventType } from '@/types/commontypes';
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import home from '@/public/assests/homeimage.png';
import Link from "next/link";
import { useState, useContext } from "react";
import { PostContext, PostContextProps } from '../context/context';



export default function Blog() {
  const { posts, addPost } = useContext(PostContext) as PostContextProps;
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const categories = ['Groceries', 'Shopping', 'Utilities', 'Entertainment', 'Online Bussines', 'Other'];
  const [title, setTitle] = useState<string>('');
  var [id, setId] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [inputData, setInputData] = useState([{
    id: 1,
    title: '',
    detail: '',
    category: '',
    image
  }])

  const onClickHandler = () => {
    const addData = {
      id: id++,
      title: title,
      detail: detail,
      category: category,
      image: image
    }
    // inputData.push(addData)
    if (posts) {
      inputData.push(addData);
      posts.push(addData);
    }
    closeModal();
    setTitle('');
    setDetail('');
    setCategory('');
    setImage(null);
    setId(id++)
    addPost(addData);

  }
  return (
    <>
      <div className="lg:mx-[245px]">
        <Image src={home} alt="HomeImage" className="mt-14 " />
        <p className="mt-10 text-black text-center font-newl text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">A few words about this blog platform, Ghost, and how this site was made</p>
        <p className=" mt-6 mb-12 text-black text-center font-sfmono text-sm md:text-base font-normal leading-[170%]">Why Ghost (& Figma) instead of Medium, <br /> WordPress or other options? </p>
        <button
          onClick={openModal}
          className="bg-yellow-500 flex justify-center items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <IoMdAdd className="text-3xl text-black-500 hover:text-gray-700 cursor-pointer" />
          Add
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute bg-white p-8 rounded shadow-lg">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
                <FaTimes className="text-3xl text-yellow-500 hover:text-gray-700 cursor-pointer" />
              </button>
              <h1 className="text-black text-center font-newl font-bold">Add Post Details</h1>
              <label className="block text-black font-sfmono text-sm mb-2" htmlFor="title">
                Title
              </label>
              <input
                onChange={(e: onChangeEventType) => { setTitle(e.target.value) }}
                type="text"
                id="title"
                value={title}
                className="w-full border p-2 mb-2"
              />
              <label className="block text-black font-sfmono text-sm mb-2" htmlFor="detail">
                Detail
              </label>
              <textarea
                id="detail"
                onChange={(e: onChangeEventType) => { setDetail(e.target.value) }}
                value={detail}
                className="w-full border p-2 mb-2"
              />
              <label className="block text-black font-sfmono text-sm mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e: onChangeEventType) => setCategory(e.target.value)}
                className="w-full border p-2 mb-2"
              >
                <option value="" disabled>Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="block text-black font-sfmono text-sm ">
                    {cat}
                  </option>
                ))}
              </select>
              <label className="block text-black font-sfmono text-sm mb-2" htmlFor="image">
                Image
              </label>
              <input
                type="file"
                id="image"
                className="w-full border p-2 mb-2"
                accept="image/*"
                onChange={(e: any) => {
                  setImage(e.target.files[0]);
                }}
              />
              <button
                onClick={onClickHandler}
                className="bg-yellow-500 text-black text-center font-newl font-bold px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Post
              </button>
            </div>

          </div>
        )}
        <hr className="border-[2px] border-black md:w-[640px] md:mx-[100px]" />
        <h1 className="text-black text-center font-newl font-bold text-3xl sm:text-5xl mt-14 mb-7 sm:mt-16 sm:mb-10">All articles</h1>
        <div className="">
          {inputData.map((post, id) => (
            <Link href={`/blog/${encodeURIComponent(post.title)}`} key={id}>
              <div className="mb-6">
                <div className="">
                  {post.image && (
                    <Image
                      src={post.image instanceof File ? URL.createObjectURL(post.image) : post.image}
                      alt={post.title}
                      width={304}
                      height={176}
                      className="mr-4 text-center md:mx-[250px]"
                    />
                  )}
                  <div className=" w-[304px] md:mx-[250px] text-black font-sfdisplayh text-xl font-medium leading-[150%] text-center">{post.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
