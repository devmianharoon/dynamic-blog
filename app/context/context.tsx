"use client"
import { createContext, useState } from "react";
export interface PostContextProps {
    posts: {
        id: number;
        title: string;
        detail: string;
        image: File | null;
        category: string;
    }[];
    addPost: (newPost: any) => void;
}
export const PostContext = createContext<PostContextProps | undefined>(undefined)
export default function PostProvider({ children }: any) {
    const [posts, setPosts] = useState([{
        id: 0,
        title: '',
        detail: '',
        image: null,
        category: ''
    }]);
    const addPost = (newPost: any) => {
        setPosts([...posts, newPost])
    }
    return (
        <PostContext.Provider value={({ posts, addPost })}>
            <div>{children}</div>
        </PostContext.Provider>
    )
}
