import React from "react";
import { useState } from "react";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
import "./add.css";
let AddUser = () =>{
    let navigate = useNavigate();

    let [id,setId] = useState('');
    let [firstname,setFirstName] = useState('');
    let [lastname,setLastName] = useState('');
    let [email,setEmail] = useState('');
    
    let handleId = (e) => {setId(e.target.value)}
    let handleFirstName = (e) => {setFirstName(e.target.value)}
    let handleLastName = (e) => {setLastName(e.target.value)}
    let handleEmail = (e) => {setEmail(e.target.value)}
    
    let handleSubmit = (e) => {
        e.preventDefault();

        let user = {id : id, firstname :firstname, lastname:lastname,email:email}
        // alert(JSON.stringify(user))

        UserService.addUser(user).then(()=>{
            alert("The Employee created SUCCESSFULLY")
            navigate({pathname : '/'});
        } , 
        ()=>{
            alert("The Employee creation FAILED ")
        });
    }
    return(
        <>
            
            <div class="adduser">
            <form onSubmit={handleSubmit} >
            <label>
                ID : <br></br><input  class = "in" onChange={handleId} type='text' value={id} className="forminput"/><br></br>
                First Name : <br></br><input onChange={handleFirstName} type='text' value={firstname} className="forminput"/><br></br>
                Last Name : <br></br><input  onChange={handleLastName} type='text' value={lastname} className="forminput"/><br></br>
                Email :<br></br> <input  onChange={handleEmail} type='text' value={email} className="forminput"/><br></br>
            <br></br>
                <input type="submit" value="Add Employee" className=" subbutton"/>
            </label>
        </form>
        </div>
        
        </>
    );
}
export default AddUser;