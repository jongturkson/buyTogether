import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Welcome from './Pages/Welcome.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/LoginPage.jsx';
import CreateGroupForm from './Pages/CreateGroupForm/CreateGroupForm.jsx';
import GroupInfoAdmin from './Pages/GroupInfo/GroupInfo.jsx';
import GroupInfoUser from './Pages/GroupInfo/GroupInfo2.jsx';
import GroupList from './Pages/GroupList/GroupList.jsx';
import Home from './Pages/HomePage/HomePage.jsx';
import Products from './Pages/ProductPage/ProductPage.jsx';
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-group" element={<CreateGroupForm />} />
          <Route path="/group-info" element={<GroupInfoAdmin />} /> 
          <Route path="/group-info" element={<GroupInfoUser />} />
          <Route path="/groups" element={<GroupList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
