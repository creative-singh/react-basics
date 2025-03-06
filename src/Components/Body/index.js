import { useState } from "react";

import resList from "../../utils/constants";
import RestaurantCard from "../RestaurantCard";
import FilterButton from "../FilterButton";
import Shimmer from "../Shimmer";
import Search from "../Search";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <Search />
      <FilterButton
        restaurantList={restaurantList}
        setRestaurantList={setRestaurantList}
      />
      <div className="res-container">
        {restaurantList.length
          ? restaurantList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              resData={restaurant}
            />
          ))
          : Array(10).fill("").map((_, i) => <Shimmer key={i} />)
        }
      </div>
    </div>
  );
};

export default Body;
