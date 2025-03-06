import ButtonComp from '../ButtonComp';
import TextField from '../TextField';

import "./style.css";

const Search = () => {

  const searchHandler = () => {
    console.log("Search")
  }

  return (
    <div className="res-search">
      <TextField placeholder="Search" />
      <ButtonComp
        btnClass={"primary-button"}
        clickHandler={searchHandler}
        btnText={"Search"}
      />
    </div>
  );
}

export default Search