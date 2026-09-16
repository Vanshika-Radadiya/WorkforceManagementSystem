import { BrowserRouter, Router, Routes ,Route} from 'react-router-dom';

import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import ViewUser from './components/ViewUser';
import UpdateUser from './components/UpdateUser';
import Header from './components/Header';
// import './components/add.css';
import './App.css';
function App() {
  return (
    <div class="page">
      <br></br>
      
    <h2 class="head">Employee Management System</h2><br></br>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path = {"/"} element = {<ViewUser/>} exact={true}/>
      <Route path = {"/viewusers"} element = {<ViewUser/>} exact={true}/>
      <Route path = {"/adduser"} element = {<AddUser/>} exact={true}/>
      <Route path = {"/updateuser"} element = {<UpdateUser/>} exact={true}/>
      <Route path = {"/deleteuser"} element = {<DeleteUser/>} exact={true}/>

      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
