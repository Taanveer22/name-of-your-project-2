import Swal from "sweetalert2";
// get from ls
const getFromLocalStorage = () => {
  let favouritesList = [];
  const storedFavouritesList = localStorage.getItem("favouritesList");
  if (storedFavouritesList) {
    favouritesList = JSON.parse(storedFavouritesList);
  }
  return favouritesList;
};

// add to ls
const setToLocalStorage = (phone) => {
  // console.log(phone);
  let favouritesList = getFromLocalStorage();
  const isExist = favouritesList.find((phoneItem) => phoneItem.id === phone.id);
  if (isExist) {
    Swal.fire("already added");
  } else {
    favouritesList.push(phone);
    localStorage.setItem("favouritesList", JSON.stringify(favouritesList));
    Swal.fire("successfully added");
  }
};

// remove from from ls
const removeFromLocalStorage = (id) => {
  let favouritesList = getFromLocalStorage();
  const remainingList = favouritesList.filter(
    (phoneItem) => phoneItem.id !== id
  );
  if (remainingList) {
    localStorage.setItem("favouritesList", JSON.stringify(remainingList));
    Swal.fire("remove done");
  }
};

// export all functions
export { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage };
