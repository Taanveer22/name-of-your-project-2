import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { IoTrashBin } from "react-icons/io5";

const Card = ({ phone, handleDeleteFromFavourites }) => {
  const location = useLocation();
  // console.log(location);
  const { pathname } = location;
  console.log(pathname);
  const { id, phone_name, brand_name, image } = phone || {};
  return (
    <>
      <div className="relative flex flex-col rounded-xl bg-blue-200 p-5 text-gray-700">
        <img src={image} className="h-96 w-full object-cover" />
        <div className="my-5">
          <div className="flex items-center justify-between">
            <p className="font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {brand_name}
            </p>
            <p className="font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
          </div>
        </div>
        <div>
          <Link to={`/cardDetail/${id}`}>
            <button
              className="block w-full select-none rounded-lg bg-yellow-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div>
        {pathname === "/favourites" && (
          <div
            onClick={() => handleDeleteFromFavourites(id)}
            className="absolute -top-5 -right-5 bg-red-500 rounded-full p-3"
          >
            <IoTrashBin size={20}></IoTrashBin>
          </div>
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  phone: PropTypes.object,
  handleDeleteFromFavourites: PropTypes.func,
};

export default Card;
