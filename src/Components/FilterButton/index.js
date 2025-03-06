import { useState } from "react";

import resList from "../../utils/constants";
import ButtonComp from "../ButtonComp";

import "./style.css";

const FilterButton = ({
  restaurantList,
  setRestaurantList,
}) => {
  const [isFiltered, setIsFiltered] = useState(false);

  const filterHandler = () => {
    if (isFiltered) {
      setRestaurantList(resList);
      setIsFiltered(false);
    } else {
      let filteredRestaurant = restaurantList.filter(
        (restaurant) => restaurant.rating > 4.0
      );
      setRestaurantList(filteredRestaurant);
      setIsFiltered(true);
    }
  };

  return (
    <div className="filter">
      <ButtonComp 
        btnClass={isFiltered 
          ? "reset-filter-button" 
          : "filter-button"
        }
        clickHandler={filterHandler}
        btnText={isFiltered
          ? "Reset Filter"
          : "Top Rated Restaurant"
        }
      />
    </div>
  );
};

export default FilterButton;