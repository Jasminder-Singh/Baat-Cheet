"use client";
import { Poppins } from 'next/font/google';
import { Star, Send } from "lucide-react";
import { useEffect, useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" })
const CommentBox = ({ setCommentOpen, commentOpen }) => {
  const [comments, setComments] = useState([
    {
      name: "jasminder singh",
      time: '4w',
      likes: 100,
      liked: false,
      color: 'orange'
    },
    {
      name: "sahil",
      time: '4w',
      likes: 11,
      liked: false,
      color: 'red'
    },
    {
      name: "anjali",
      time: '4w',
      likes: 44,
      liked: false,
      color: 'pink'
    },
    {
      name: "diwaker",
      time: '4w',
      likes: 2,
      liked: false,
      color: 'magenta'
    },
    {
      name: "ritika",
      time: '4w',
      likes: 43,
      liked: false,
      color: 'purple'
    },
    {
      name: "harsh",
      time: '4w',
      likes: 0,
      liked: false,
      color: 'yellow'
    },
    {
      name: "Riya",
      time: '4w',
      likes: 100,
      liked: false,
      color: 'brown'
    },
    {
      name: "Koshal",
      time: '4w',
      likes: 100,
      liked: false,
      color: 'green'
    },
    {
      name: "hemant",
      time: '4w',
      likes: 55,
      liked: false,
      color: 'blue'
    },
    {
      name: "pta ni",
      time: '4w',
      likes: 100,
      liked: false,
      color: 'black'
    }
  ])

  const like = (index) => {
    setComments(comments.map((comment, ind) => {
      if (index === ind) {
        return {
          ...comment,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
          liked: !comment.liked,
        }
      }
      return comment
    }))

  }
  useEffect(() => {
    if (commentOpen)
      document.body.style.overflow = 'hidden';

    return () => document.body.style.overflow = 'auto';
  }, [commentOpen])

  return (
    <div className={` ${poppins.className} fixed bottom-0 ${commentOpen ? 'h-svh' : 'h-0'} rounded-t-2xl border-2 w-full bg-white transition-all duration-300 overflow-y-auto pb-12`}>
      
      <div className="sticky top-0 flex justify-center items-center  border-b ">

        <span className='w-20 h-2 rounded-full bg-slate-300 inline-block m-4'
          onClick={() => setCommentOpen(false)}>

        </span>

      </div>
      {
        comments.map(({ name, likes, color, time, liked }, index) => {
          return <div key={index} className="flex justify-between items-center border-b px-2 tracking-wider">

            <div className="flex justify-start items-center py-2 text-md self-start">
              <span className={`w-10 h-10 border rounded-full inline-block mx-2`}
                style={{ backgroundColor: color }}>

              </span>
            </div>

            <div className="w-[70%] flex flex-col items-start self-start pb-2">
              <span className=" font-bold my-2 pt-1 text-sm">
                {name}
              </span>
              <p className=" text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae architecto, unddfjadflja.
              </p>
              <div className="flex justify-between items-center text-slate-400 text-sm p-1">
                <span className=" mr-3">
                  {time}
                </span>
                <span className="text-blue-500">
                  Reply
                </span>
              </div>
            </div>
            <div className=" w-[15%] flex flex-col justify-center items-center px-2 h-16">
              <Star strokeWidth={1} onClick={() => like(index)} className={` ${liked ? 'fill-amber-300' : 'fill-white'}`} />
              <span className="text-xs select-none">
                {
                  likes
                    ? likes
                    : <span className=' inline-block'></span>
                }
              </span>
            </div>

          </div>


        })
      }
      <div className='sticky bottom-0 flex justify-between items-center p-2 border-2 bg-white'>
        <div className="flex justify-center items-center">
          <span className={`w-9 h-9 border rounded-full inline-block mx-2`}
            style={{ backgroundColor: 'purple' }}>

          </span>
        </div>
        <div className='w-full'>
          <input type='text' placeholder='Add a Comment'
            className='w-full px-3 py-1 rounded-xl outline-none border-2' />
        </div>
        <Send className='w-16 h-8 text-blue-500' />

      </div>

    </div>
  )
}

export default CommentBox