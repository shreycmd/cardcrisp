
import Button from '../componet/Button'
import { Link } from 'react-router-dom'
import Head from '../componet/Head'

const Home = () => {
  return (
    
    <>
    <div className='flex flex-col items-center justify-center h-screen '>
       
       <div className='flex flex-col items-center'>
       <div className="my-20" ><Head/>
       </div>
      <Link to="/user"><Button content="User" onClick={" "}/></Link> 
      <Link to="/admin"><Button content ="Admin" onClick={" "}/></Link> 
       </div>
         
     </div></>
  )
}

export default Home
