import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
  };
  return (
    <div className="card-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {inputValue}
      {RestaurantCard({ name: "Pizza House", rating: 4.4 })}
      <RestaurantCard name="KFC" rating="4.3" />
    </div>
  );
};

export default Body;
