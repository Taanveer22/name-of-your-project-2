import swal from "sweetalert";
import PropTypes from "prop-types";
const SingleCard = ({ phone }) => {
  const { phone_name, brand_name, rating, price, image } = phone;
  console.log(phone);

  const handleAddToFavorites = () => {
    console.log(phone);
    const addedFavoritesArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (!favoriteItems) {
      addedFavoritesArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      swal("success");
    } else {
      const isExist = favoriteItems.find((phone) => phone.id === id);
      if (isExist) {
        addedFavoritesArray.push(...favoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("success");
      } else {
        swal("error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {phone_name}
          </p>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {rating}
          </p>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {price}
          </p>
          <a className="inline-block" href="#">
            <button
              onClick={handleAddToFavorites}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Favourites
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  phone: PropTypes.object,
};
export default SingleCard;
