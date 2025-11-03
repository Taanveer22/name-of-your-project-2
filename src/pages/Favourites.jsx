import { useEffect, useState } from "react";
import { getFromLocalStorage, removeFromLocalStorage } from "../utilities";
import Card from "../components/Card";

const Favourites = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    const lsFavouritesList = getFromLocalStorage();
    setPhones(lsFavouritesList);
  }, []);
  console.log(phones);

  const handleDeleteFromFavourites = (id) => {
    removeFromLocalStorage(id);
    const lsFavouritesList = getFromLocalStorage();
    setPhones(lsFavouritesList);
  };

  return (
    <div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {phones.map((phone) => (
          <Card
            key={phone.id}
            phone={phone}
            handleDeleteFromFavourites={handleDeleteFromFavourites}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
