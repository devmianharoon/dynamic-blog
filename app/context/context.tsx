"use client"
import { createContext, useState } from "react";
export const PostContext = createContext([])

export default function PostProvider({ children }: any) {
    const [posts, setPosts] = useState([{
        id: 0,
        title: '',
        description: '',
        image:null,
        category:''
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
