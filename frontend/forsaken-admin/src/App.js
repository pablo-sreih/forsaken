import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import AddLocation from "./pages/AddLocation";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addLocation" element={<AddLocation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
