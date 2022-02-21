import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import './EmailVerify.css';

const EmailVerify = () => {
    const navigate = useHistory();
    const [user, setUser] = useState({
        name : "" , email : "" 
    })
    let name,value
    const handleInputs = (e)=>{
        name = e.target.name
        value = e.target.value
        setUser({...user , [name]:value})
    }

    const PostData = async(e) =>{
        e.preventDefault()
        const {name , email } = user
        const res = await fetch("https://dscakgec.herokuapp.com/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name , email 
            })
        })
        const data = await res.json()
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration");
        }
        else {
            window.alert("DOne Registration")
            console.log("DOne Registration");
            navigate.push("/otp")
        }
    }
    return (
        <div className='verify'>
            <form method="POST">
                <div class="form-body">
                    <div class="row">
                        <div class="form-holder">
                            <div class="form-content">
                                <div class="form-items">
                                    <h3>Register Today</h3>
                                    <p>Fill in the data below.</p>           
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" name="name" placeholder="Full Name" value = {user.name} onChange = {handleInputs} required/>
                                    </div>            
                                    <div class="col-md-12">
                                        <input class="form-control" type="email" name="email" placeholder="E-mail Address" value = {user.email} onChange = {handleInputs} required />
                                    </div>     <br/>       
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                        <label class="form-check-label">I confirm that all data are correct</label>
                                    </div>
                                    <div class="form-button mt-3">
                                        <button id="submit" type="submit" class="bts" onClick={PostData}>Validate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EmailVerify;