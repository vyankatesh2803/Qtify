import Feedback from "../feedback/Feedback";
import Searchbar from "../searchbar/Searchbar";
import "./Navbar.css"
import logo from "./logo.png"

const Navbar = () => {
    return (
      <div className = "navbar">
        <a href="./"><img src={logo} alt="Logo"/></a>
        <Searchbar />
        <Feedback>Give Feedback</Feedback>
      </div>
    );
  };

  export default Navbar;