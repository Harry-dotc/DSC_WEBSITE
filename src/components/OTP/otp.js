import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import "./otp.css"

const Otp = () => {
    const navigate = useHistory();
    const [user, setUser] = useState({
        otp : "" 
    })
    let name,value
    const handleInputs = (e)=>{
        name = e.target.name
        value = e.target.value
        setUser({...user , [name]:value})
    }

    const PostData = async(e) =>{
        e.preventDefault()
        const {otp} = user
        const res = await fetch("https://dscakgec.herokuapp.com/otp",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                otp
            })
        })
        const data = await res.json()
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration");
        }
        else {
            window.alert("DOne Verification")
            console.log("DOne Verification");
            navigate.push("/details")
        }
    }
    return (
        <div className='otp'>
            <form method="POST">
                <div class="d-flex justify-content-center align-items-center container">
                    <div class="card py-5 px-3">
                        <h2 class="m-0">Email verification</h2><span class="mobile-text">Enter the code we just sent on your email  <b class="text-danger"></b></span>
                        <div class="d-flex flex-row mt-5"><input type="text" class="form-control" autofocus="" name="otp" value = {user.otp} onChange = {handleInputs}/></div>
                        <br/>
                        <button class="btn btn-danger" type="submit" onClick={PostData}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Otp
