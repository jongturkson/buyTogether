// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from './Pages/Welcome.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/LoginPage.jsx';
import CreateGroupForm from './Pages/CreateGroupForm/CreateGroupForm.jsx';
import GroupInfo from './Pages/GroupInfo/GroupInfo.jsx';
import GroupInfo2 from './Pages/GroupInfo/GroupInfo2.jsx';
import GroupList from './Pages/GroupList/GroupList.jsx';
import Home from './Pages/HomePage/HomePage.jsx';
import Products from './Pages/ProductPage/ProductPage.jsx';
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Protected route for /home */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/create-group" element={<ProtectedRoute><CreateGroupForm /></ProtectedRoute>} />
          <Route path="/group/:id" element={<GroupInfo />} />
          <Route path="/group-info-" element={<GroupInfo2 />} />
          <Route path="/groups" element={<GroupList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
