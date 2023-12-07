
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from './Home'
import Signup from "./Signup";
const Login = ({hname,convertArray,setConvertArray}) => {
  const[state,setState]=useState({
           email:'',
           password:''
  })
const [toArray,setToArray]=useState([])
const[toHome,setToHome]=useState(false)
const[toSignup,setToSignup]=useState(false)
const[sendPTH,setSendPTH]=useState(null)
  const handelChange=(e)=>{
    let name = e.target.name
    let val =  e.target.value
    setState((preVal)=>{
      if(name === 'inputemail'){
        return {
          ...preVal,
          email:val
        }
      }
      if(name === 'inputpassword'){
        return {
          ...preVal,
          password:val
        }
      }
    })
  }

const handelSubmit = (e)=>{
  let localemail = localStorage.getItem('email')
  let localpass=localStorage.getItem('password')
  let localname=localStorage.getItem('fullname')
      e.preventDefault()

      if(state.email === localemail && state.password === localpass ){
        setToArray((preVal)=>{
          return [...preVal,state]
        })
        setState({
          email:'',
          password:''
        })

        setToHome(!toHome)
        setSendPTH(localname)
      }

  }

  const handelToSighUpPage =()=>{
        setToSignup(!toSignup)
  }

  return (
  <div>
             {toSignup? (<Signup/>): ( <div >
              {toHome?(<Home setConvertArray={setConvertArray} convertArray={convertArray}  name={sendPTH}/>):(
                <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "100px",
                  flexDirection:'column'
                }}
              >
              <div style={{display:'flex',gap:'50px',alignItems:'self-start'}}>
              <span style={{fontSize:'30px'}}>login</span>
              <h1 style={{color:'orangered'}}> Hi {hname}</h1>
              
              </div>
                <div style={{ border: "solid white", width: "30%" }}>
                  <form
                  onSubmit={handelSubmit}
                    style={{
                      padding: "30px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                    }}
                    action=""
                  >
                    <div>
                      <label htmlFor="">Email</label>
                      <input
                      value={state.email}
                      onChange={handelChange}
                        placeholder="email"
                        className="form-control"
                        type="email"
                        name="inputemail"
                       
                      />
                    </div>
             
                    <div>
                      <label htmlFor="">Password</label>
                      <input
                      value={state.password}
                      onChange={handelChange}
                        placeholder="password"
                        className="form-control"
                        type="password"
                        name="inputpassword"
                       
                      />
                    </div>
             
                    <div style={{ textAlign: "center",display:'flex',justifyContent:'space-between' }}>
                      <input 
                      className="btn btn-primary" 
                      type="submit" 
                      />
                      <button 
                      className="btn btn-outline-primary" 
                      
                       onClick={handelToSighUpPage} 
                      >sign up</button>
                    </div>
                  </form>
                </div>
                <ul>
                  {toArray.map((elem)=>{
                    return (
                      <div>
                        <li>{elem.email}</li>
                        <li>{elem.password}</li>
                      
                      </div>
                    )
                  })}
                
                </ul>
              </div>)}
         
         </div>)}
  
  
  </div>
  );
};

export default Login;

