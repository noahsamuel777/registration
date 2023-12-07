
import React, {useState } from 'react'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.css'




const Home = ({name,convertArray,setConvertArray}) => {
  const[toLogin,setToLogin]=useState(false)
  const[SPTH,setSPTH]=useState(null)
 




  let lname= localStorage.getItem('fullname')
  const handelToLogin=(e)=>{
    e.preventDefault()
     setToLogin(!toLogin)
     setSPTH(lname)
  }

  const handelDelete = (i) => {
  const updatedValue = convertArray.filter((elem,index)=>{
    return i!==index
  })
  setConvertArray(updatedValue)
  };


  
  
  return (
   <div >
   {toLogin?(<Login hname={SPTH} />
   ):( 
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',gap:'20px'}}>
    
   <nav style={{height:'50px', display:'flex', justifyContent:'space-around', alignItems:'center',width:'100%', backgroundColor:'yellow',padding:'10px'}}>
      <div>
      <span ><h3 style={{color:'orangered'}}>Hi {name} welcome to Home page </h3></span>
      </div>
   <ul style={{display:'flex',gap:'70px',marginRight:'30px'}}>
   
   <li  style={{color:'black',cursor:'pointer',fontWeight:'bold',listStyle:'none'}}>About</li>
   <li  style={{color:'black',cursor:'pointer',fontWeight:'bold',listStyle:'none'}}>Github</li>
   <li style={{color:'black',cursor:'pointer',fontWeight:'bold',listStyle:'none'}} onClick={handelToLogin}>Logout</li>
   
   </ul>
   
   </nav>
   

   <div>
   
   <table className="table table-dark table-hover">
   
   <thead>
   
     <tr>
           <th>First Name</th>
           <th>Last Name</th>  
           <th>Email</th>
           <th>Phone Number</th>
           <th>College</th>
          
           <th></th>  
     
     </tr>
   </thead>
   <tbody>
          
   {convertArray.map((elem, i)=>{
    return(
      <tr>
           <td>{elem.fullname}</td> 
           <td>{elem.lastname}</td>       
           <td>{elem.email}</td>       
           <td>{elem.phonenumber}</td>       
           <td>{elem.college}</td>       
             
           <td> <button onClick={()=>handelDelete(i)} className='btn btn-outline-danger'>Delete</button>  </td> 
      </tr>
    )
  })}

   
   </tbody>
   
   </table>
   
   </div>
   




   </div>)}
   

   </div>
  )
}

export default Home