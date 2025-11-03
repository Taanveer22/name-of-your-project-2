import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setToLocalStorage } from "../utilities";

const CardDetail = () => {
  const [phone, setPhone] = useState();
  const { id } = useParams();
  // console.log(typeof id);
  const phonesData = useLoaderData();
  // console.log(phonesData);

  useEffect(() => {
    const findedPhone = phonesData?.find((phoneItem) => phoneItem.id === id);
    // console.log(findedPhone);
    setPhone(findedPhone);
  }, [id, phonesData]);

  // console.log(phone);
  const { phone_name, image, price, rating, title, description } = phone || {};

  const handleAddToFavourites = (phone) => {
    setToLocalStorage(phone);
  };

  return (
    <>
      <div className="relative flex flex-col md:flex-row w-full my-6 bg-blue-400 shadow-sm border border-slate-200 rounded-lg">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src={image}
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="m-5 space-y-4">
          <h1 className="rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
            {phone_name}
          </h1>
          <h4 className="text-slate-800 text-xl font-semibold">{title}</h4>
          <p className="text-slate-600 leading-normal font-light">
            {description}
          </p>
          <p className="text-slate-600 leading-normal font-light">
            Price : {price}
          </p>
          <p className="text-slate-600 leading-normal font-light">
            Rating : {rating}
          </p>
          <button
            onClick={() => handleAddToFavourites(phone)}
            className="text-slate-800 font-semibold text-md hover:underline bg-yellow-500 p-3"
          >
            Add To Favourites
          </button>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
