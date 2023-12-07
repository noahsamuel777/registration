import React, { useState } from 'react'
import Login from './Login'


const Signup = () => {
  const[signinstate,setsigninstate]=useState({
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:'',
    college:'',
    password:''
  })
const [convertArray,setConvertArray]=useState([])
const[toLogin,setToLogin]=useState(false)



 const handelChange=(e)=>{
  let name = e.target.name
  let value = e.target.value 
      setsigninstate((preVal)=>{
            if(name === 'fname'){
              return {
                ...preVal,
                fullname:value
              }
            }
            if(name === 'lname'){
              return {
                ...preVal,
                lastname:value
              }
            }


            if(name === 'mail'){
              return {
                ...preVal,
                email:value
              }
            }

            if(name === 'pnum'){
              return {
                ...preVal,
                phonenumber:value
              }
            }

            if(name === 'collegen'){
              return {
                ...preVal,
                college:value
              }
            }

         
            if(name === 'pass'){
              return {
                ...preVal,
                password:value
              }
            }
      })
 } 

 const handelSubmit =(e)=>{
  localStorage.setItem("fullname",(signinstate.fullname))
  localStorage.setItem('lastname',(signinstate.lastname))
  localStorage.setItem('email',(signinstate.email))
  localStorage.setItem('phonenumber',(signinstate.phonenumber))
  localStorage.setItem('college',(signinstate.college))
  localStorage.setItem('password',(signinstate.password))
  e.preventDefault()
     setConvertArray((preVal)=>{
          return [...preVal, signinstate]
     })
     setsigninstate({
      fullname:'',
      lastname:'',
      email:'',
      phonenumber:'',
      college:'',
      password:''
    })
    setToLogin(!toLogin)
 }

 const handelTologinClick =()=>{
  setToLogin(!toLogin)
 }

  return (
    <div>
   
  {toLogin? (<Login setConvertArray={setConvertArray} convertArray={convertArray}/>):( <div style={{ padding:'30px',display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '40px' }}>
  <h1>Registration Form </h1>
  <div style={{ width: '60%', border: 'solid white', padding: '40px', borderRadius: '30px', textAlign: 'center' }}>
    <form onSubmit={handelSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', alignItems: 'center' }}>
        <label style={{ fontSize: '20px' }} htmlFor="name">First Name:</label>
        <input name='fname' onChange={handelChange} value={signinstate.fullname} required autoFocus className='form-control w-50 text-center' placeholder='First Name' type="text" />
      </div>

      <div style={{ display: 'flex', gap: '65px', justifyContent: 'center', alignItems: 'center' }}>
      <label style={{ fontSize: '20px' }} htmlFor="name">Last Name:</label>
      <input  name='lname' onChange={handelChange} value={signinstate.lastname}  required className='form-control w-50 text-center' placeholder='Last Name' type="text" />
    </div>

      <div style={{ display: 'flex', gap: '97px', justifyContent: 'center', alignItems: 'center' }}>
        <label style={{ fontSize: '20px' }} htmlFor="email">E-mail:</label>
        <input name='mail'  onChange={handelChange} value={signinstate.email} className='form-control w-50 text-center' placeholder='Email' required type="email" />
      </div>

      <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', alignItems: 'center' }}>
        <label style={{ fontSize: '20px' }} htmlFor="phonenum">Phone Number:</label>
        <input name='pnum'  onChange={handelChange}  value={signinstate.phonenumber} required className='form-control w-50 text-center' placeholder='Phone Number' type="text" />
      </div>

      <div style={{ display: 'flex', gap: '90px', justifyContent: 'center', alignItems: 'center' }}>
        <label style={{ fontSize: '20px' }} htmlFor="college">College:</label>
        <input name='collegen'   onChange={handelChange} value={signinstate.college} required className='form-control w-50 text-center' placeholder='College' type="text" />
      </div>

     

      <div style={{ display: 'flex', gap: '80px', justifyContent: 'center', alignItems: 'center' }}>
        <label style={{ fontSize: '20px' }} htmlFor="password">Password:</label>
        <input  name='pass' onChange={handelChange}  value={signinstate.password} required className='form-control w-50 text-center' placeholder='Password' type="password" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end',gap:'20px'}}>
        <button style={{ textAlign: 'center' }} className='btn btn-danger' type='submit'>Sign up</button>
        <button style={{ textAlign: 'center' }} className='btn btn-outline-danger' onClick={handelTologinClick} >Login</button>
      </div>
    </form>
  </div>

</div>)}
    </div>
  )
}

export default Signup
