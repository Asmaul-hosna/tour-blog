
import Topbar from "./Components/Topbar/Topbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Write from "./Pages/Write/Write";
import Single from "./Pages/Single/Single";


function App() {
  const user = false
  return (
   <Router>
      <Topbar></Topbar>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="register" element={user ?<Home/>:<Register />} />
          <Route exact path="login" element={user?<Home/>:<Login/>} />
          <Route exact path="write" element={user?<Write/>:<Register/>} />
          <Route exact path="settings" element={user?<Settings/>:<Register/>} />
          <Route exact path="/post/:postId" element={<Single/>} />
        </Routes>
     
    
      </Router>
  );
}

export default App;
