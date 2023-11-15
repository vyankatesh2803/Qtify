import Feedback from "../feedback/Feedback";
import Searchbar from "../searchbar/Searchbar";
import "./Navbar.css"
import logo from "./logo.png"

const Navbar = () => {
    return (
      <div className = "navbar">
        <img src={logo} alt="Logo"/>
        <Searchbar />
        <Feedback>Give Feedback</Feedback>
      </div>
    );
  };

  export default Navbar;