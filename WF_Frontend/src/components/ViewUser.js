import React, { useEffect,useState } from "react";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
import "./add.css";
let ViewUser = () =>{
    let [state,setState]= useState({
        users:[]
    });

    useEffect(()=>{
        UserService.getAllUsers().then((response)=>{
            setState(()=>({
                users : response.data
            }));
        },()=>{});
        
    },[]);


    console.log(JSON.stringify(state.users))
    let navigate = useNavigate();
    let handleAddUser=()=>{
        navigate({pathname : '/adduser'})
    }
    let handleUpdate=(id)=>{
        navigate('/updateuser', {state :{id}})
    }
    let handleDelete=(id)=>{
        navigate('/deleteuser', {state :{id}})

    }

    return(
        <div class="main" >
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table table-striped text-center">
            <thead className="bg-success">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    state.users.map((user,i)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>

                                <td>
                                    <button className="updatebutton "  onClick= {()=>{handleUpdate(user.id)}}>Update</button>     
                                    <button className="deletebutton" onClick={()=>{handleDelete(user.id)}}>Delete</button>
                                </td>
                            </tr>


                        )
                    })

                }
            </tbody>
        </table>
                </div>
        <button className="addbutton" onClick={handleAddUser}>ADD EMPLOYEE  </button>
        </div>
    );
}
export default ViewUser;