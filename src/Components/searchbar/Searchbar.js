import "./searchbar.css";
import { ReactComponent as SearchIcon } from "./search-icon.svg";

const Searchbar = () => {
  return (
    <form className="searchbar">
      <input type="text" placeholder="Search an album of your choice" />
      <button type="submit">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  );
};

export default Searchbar;
