import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ phone }) => {
  const { id, phone_name, brand_name, image, } = phone || {};
  return (
    <div>
      <div className="flex flex-col rounded-xl bg-blue-200 p-5 text-gray-700">
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
      </div>
    </div>
  );
};

Card.propTypes = {
  phone: PropTypes.object,
};

export default Card;
