import axios from 'axios';
import  { useEffect, useState } from 'react'
import Flashcards from '../componet/Flashcards';
import Head from '../componet/Head';
import Button from '../componet/Button';
import { Link } from 'react-router-dom';
const User = () => {
    const [flc,setflc]=useState([]);
    const[loading,setloading]=useState(true);
    const [isflipped,setisflipped]=useState(false);
    const[messg,setmessg]=useState("    ");
   
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
            <div className="mt-4 flex justify-between">
            <button
              onClick={handleprev}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              
            >
              Previous
            </button>
            <div className='font-bold text-red-600 font-serif  '><p>{messg}</p></div>
            <button
              onClick={handlenext}
              
              className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4 "
            >
              Next
            </button>
          </div>
            </div> <Link to="/admin"><div className='flex items-center justify-center mt-15'><Button content="Use as Admin"/></div></Link></div>:<div>{null}</div>
            
          }
          

          
        </div>
      );
    };
export default User