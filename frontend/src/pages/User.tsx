import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Flashcards from '../component/Flashcards';
import Head from '../component/Head';
import Button from '../component/button';
import { toast, ToastContainer } from 'react-toastify';
let clear;
const User = () => {
    const [flc,setflc]=useState([]);
    const[loading,setloading]=useState(true);
    const [isflipped,setisflipped]=useState(false);
    const[messg,setmessg]=useState(" ");
    const [val,setval]=useState(" ");
  const handle=(e:Event)=>{
    setval(e.target.value)
    
  }
  const handleflip=()=>{
    setisflipped(!isflipped);
   }
    useEffect(()=>{
        const fetchcards= async()=>{
       const response= await axios.get("https://cardcrisp.onrender.com/user");
       if(response.data){
        setloading(false);
       }
       setflc(response.data);
        }
        fetchcards();
    },[])
    const [index,setindex]=useState(0);
    const timer=()=>{
      setmessg(" Next question displayed")
       setTimeout(()=>{
        setmessg(" ")
      },1000)

    }
    const handlenext=()=>{
        setindex((prev)=>{
            return (prev+1)%(flc.length)
        })
        setisflipped(false)
        timer();
        
     ;
    }
    const handleprev=()=>{
        setindex(prev=>{
            return prev===0?flc.length-1:prev-1;
        })
        setisflipped(false)
    }
    return (

        <div className="h-screen flex flex-col items-center justify-center p-4">
          {loading ? (
            <p className="text-xl">Loading....</p>
          ) : flc.length>0?
           
            <div className="">
                <Head/>
                <div >
              <div >
                <Flashcards
                  question={flc[index].question}
                  answer={flc[index].answer}
                  handleflip={handleflip}
                  isflipped={isflipped}
                  
                />
                </div>
            <div className="mt-4 flex justify-around">
            <button
              onClick={handleprev}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              
            >
              Previous
            </button>
            <div className='font-bold text-gray-900'>{messg}</div>
            <button
              onClick={handlenext}
              
              className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4 "
            >
              Next
            </button>
          </div>
            </div></div>:<div>{null}</div>
          }
  
        </div>
      );
    };
export default User