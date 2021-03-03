import { searchShows } from "../../redux/actions/searchActions/searchShow";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar";

const Searchbar = () => {
  const dispatch = useDispatch();

  const search = (show) => dispatch(searchShows(show));

  const handleSearch = (e) => {
    const query = e.target.value;

    search(query);
  };

  return (
    <div className="search-bar ">
      <Navbar />
      <div className="search-bar__div container">
        <input
          type="text"
          placeholder="Search movie,tv shows"
          onChange={handleSearch}
          name="show"
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default Searchbar;
