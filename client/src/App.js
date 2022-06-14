import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user}=useContext(AuthContext)
  return (
    <Router>
      <Routes>
       <Route exact path="/">
       {user ? <Home /> : <Register />}
        </Route> 
       <Route exact path="/login">
       {user ? <Navigate to="/" /> : <Login />}
       </Route>
       <Route exact path="/register">
       {user ? <Navigate to="/" /> : <Register />} 
        </Route> 
       <Route exact path="/profile/:username">
         <Profile/>
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;
