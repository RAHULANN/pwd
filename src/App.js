import logo from "./logo.svg";
// import "./App.css";
import { Box, Typography } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./Component/Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
