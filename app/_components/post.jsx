"use client";
import { Star, MessageSquare, Share2, Bookmark, Ellipsis } from 'lucide-react';
import { useState } from 'react';
import '../../public/post.css';
import CommentBox from './commentBox';
import PostMenu from './postMenu';
const Post = () => {

    const [posts, setPosts] = useState([
        {
            name: "Jasminder Singh",
            color: "purple",
            date: "Sep",
            likes: "100K",
            comment: "50K",
            share: "10K",
            wishlist: false,
            liked: false,
            dbliked: false
        },
        {
            name: "Sahil Kamboj",
            color: "orange",
            date: "march",
            likes: "40K",
            comment: "20K",
            share: "12K",
            wishlist: false,
            liked: false,
            dbliked: false
        },
        {
            name: "Diwakar",
            color: "Yellow",
            date: "April",
            likes: "14K",
            comment: "5K",
            share: "18K",
            wishlist: false,
            liked: false,
            dbliked: false
        },
        {
            name: "Harsh Sharma",
            color: "blue",
            date: "oct",
            likes: "20K",
            comment: "5K",
            share: "10K",
            wishlist: false,
            liked: false,
            dbliked: false
        },
        {
            name: "Anjali Singh",
            color: "pink",
            date: "Dec",
            likes: "102K",
            comment: "60K",
            share: "12K",
            wishlist: false,
            liked: false,
            dbliked: false
        },
        {
            name: "Ritika",
            color: "red",
            date: "Nov",
            likes: "60K",
            comment: "5K",
            share: "9K",
            wishlist: false,
            liked: false,
            dbliked: false
        },
        {
            name: "Koshal Thakur",
            color: "magenta",
            date: "Jan",
            likes: "40K",
            comment: "20K",
            share: "18K",
            wishlist: false,
            liked: false,
            dbliked: false
        },
        {
            name: "Riya",
            color: "green",
            date: "Sep",
            likes: "107K",
            comment: "70K",
            share: "70K",
            wishlist: false,
            liked: false,
            dbliked: false
        }
    ]);
    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const dbclicked = (index) => {

        setPosts(posts.map((post, ind) => {
            if (index === ind) {
                return {
                    ...post,
                    liked: true,
                    dbliked: true
                }
            }
            return post;
        }))


        setTimeout(() => {
            setPosts(posts.map((post, ind) => {

                if (index === ind) {
                    return {
                        ...post,
                        liked: true,
                        dbliked: false
                    }
                }
                return post;

            }))

        }, 50)
    }
    const like = (index) => {
        setPosts(posts.map((post, ind) => {
            if (index === ind) {
                return {
                    ...post,
                    liked: !post.liked,

                }
            }
            return post;
        }))

    }

    const saveWishlist = (index) => {
        setPosts(posts.map((post, ind) => {
            if (index === ind) {
                return {
                    ...post,
                    wishlist: !post.wishlist
                }
            }
            return post;
        }))
        console.log("called")

    }
    return (
        <>
            {
                posts.map(({ color, name, likes, share, comment, date, liked, dbliked, wishlist }, index) => {
                    return <div key={index} className=" my-5 w-full border-2 flex flex-col justify-between h-[700px] rounded-2xl">
                        {/* Post Header */}
                        <div className="border-b flex justify-between items-center px-2 py-4 ">

                            <div className="flex flex-col justify-start items-start w-[50%]">

                                <div className="flex justify-center items-center">
                                    <span className={`w-9 h-9 border rounded-full inline-block mx-2`}
                                        style={{ backgroundColor: color }}>

                                    </span>
                                    <span>
                                        {name}
                                    </span>
                                </div>

                            </div>

                            <Ellipsis className=' rotate-90' onClick={() => setMenuOpen(true)} />
                        </div>
                        {/* Post Image */}
                        <div className="border h-full flex justify-center items-center"
                            onDoubleClick={() => dbclicked(index)}>

                            <Star strokeWidth={0.2} size={48} className={` w-24 h-24 fill-amber-300 transition-all 
                                ${dbliked ? 'like' : 'invisible'}`} />
                        </div>
                        {/* Post Fotter */}
                        <div className="flex justify-between items-center border-t p-3">

                            <div className="flex justify-between items-center w-[60%]">

                                <span className='flex items-center justify-center text-sm'>
                                    <Star strokeWidth={1} onClick={() => like(index)} className={`mx-2 cursor-pointer text-opacity-50 ${liked ? "fill-amber-300" : null}`} />
                                    {likes}

                                </span>

                                <span className='flex items-center justify-center text-sm'>
                                    <MessageSquare strokeWidth={1} className='mx-2' onClick={() => setCommentOpen(!commentOpen)} />

                                    {comment}
                                </span>

                                <span className='flex items-center justify-center text-sm'>
                                    <Share2 strokeWidth={1} className='mx-2' />
                                    {share}
                                </span>
                            </div>
                            <div>
                                <Bookmark strokeWidth={1} onClick={() => saveWishlist(index)}
                                    className={`mx-2 ${wishlist ? 'fill-blue-500' : null}`} />

                            </div>

                        </div>

                        {/* Post description */}
                        <div className='w-full p-4'>
                            <p className='text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut labore porro consequuntur praesentium quod ea! Fuga modi,
                                ullam placeat eaque ipsa quo atque mollitia quam similique. Quaerat, impedit beatae.
                            </p>
                        </div>
                        <div className="text-xs self-start text-gray-500 px-3 capitalize">
                            <span className="mx-1 ">
                                {date}
                            </span>
                            <span>
                                2024
                            </span>
                        </div>
                        <div className='flex justify-between items-center p-2 my-2'>
                            <div className="flex justify-center items-center">
                                <span className={`w-9 h-9 border rounded-full inline-block mx-2`}
                                    style={{ backgroundColor: color }}>

                                </span>
                            </div>
                            <div className='w-full'>
                                <input type='text' placeholder='Add a Comment'
                                    className=' w-full px-3 py-1 outline-none focus:border-b border-blue-400' />
                            </div>

                        </div>

                    </div>

                })
            }
            <CommentBox setCommentOpen={setCommentOpen} commentOpen={commentOpen} />
            <PostMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    )
}

export default Post