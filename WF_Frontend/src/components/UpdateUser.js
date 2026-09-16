import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
import "./add.css";
let UpdateUser = () =>{

    let location = useLocation();
    // let findId = location.state.id;

    let [userTemp,setUser] = useState({
        id : '',
        firstname : '',
        firstname : '',
        email : ''
    });

    useEffect(()=>{
        UserService.findUser(location.state.id).then((response)=>{
            setUser(response.data);
        } , ()=>{});
    },[]);

    let navigate = useNavigate();

    let [id,setId] = useState('');
    let [firstname,setFirstName] = useState('');
    let [lastname,setLastName] = useState('');
    let [email,setEmail] = useState('');
    
    let handleFirstName = (e) => {setFirstName(e.target.value)}
    let handleLastName = (e) => {setLastName(e.target.value)}
    let handleEmail = (e) => {setEmail(e.target.value)}
    
    let handleSubmit = (e) => {
        e.preventDefault();

        let user = {id : location.state.id, firstname :firstname, lastname:lastname,email:email}
        // alert(JSON.stringify(user))

        UserService.addUser(user).then(()=>{
            alert("Employee details has UPDATED SUCCESSFULLY")
            navigate({pathname : '/'});
        } , 
        ()=>{
            alert("Employee details has UPDATATION FAILED ")
        });
    }
    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <label>
                ID :<br></br> <input  type='text' value={id} className="forminput" placeholder={userTemp.id} disabled/><br></br>
                First Name :<br></br> <input onChange={handleFirstName} type='text' value={firstname} className="forminput"placeholder={userTemp.firstname} /><br></br>
                Last Name :<br></br> <input onChange={handleLastName} type='text' value={lastname} className="forminput" placeholder={userTemp.lastname}/><br></br>
                Email :<br></br> <input onChange={handleEmail} type='text' value={email} className="forminput" placeholder={userTemp.email}/><br></br><br></br>

                <input type="submit" value="Update" className="subbutton"/>
            </label>
        </form>
        </>
    );
}
export default UpdateUser;