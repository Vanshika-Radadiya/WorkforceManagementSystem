import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";
let DeleteUser = () =>{
    let location = useLocation();
    let navigate = useNavigate();

    useEffect(()=>{
        UserService.deleteUser(location.state.id).then((response)=>{
            alert("Employee id "+ location.state.id +" has been DELETED SUCCESSFULLY")
            navigate({pathname :"/"})
        }, ()=>{
            // alert("Employee id "+ location.state.id +" DELETATION FAILED")
            // navigate({pathname :"/"})
        });
    }, []);

    return(
        <>
        
        </>
    );
}
export default DeleteUser;