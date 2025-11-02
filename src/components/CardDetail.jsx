import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetail = () => {
  const [phone, setPhone] = useState();
  const { id } = useParams();
  // console.log(id);
  const phonesData = useLoaderData();
  // console.log(phonesData);

  useEffect(() => {
    const findPhone = phonesData?.find((phone) => phone.id == id);
    // console.log(findPhone);
    setPhone(findPhone);
  }, [id, phonesData]);
  console.log(phone);
  const { phone_name, image, price, rating, title, description } = phone || {};

  return (
    <div>
      <div className="relative flex flex-col md:flex-row w-full my-6 bg-blue-400 shadow-sm border border-slate-200 rounded-lg">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src={image}
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
            {phone_name}
          </div>
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h4>
          <p className="mb-8 text-slate-600 leading-normal font-light">
            {description}
          </p>
          <p className="mb-8 text-slate-600 leading-normal font-light">
            Price : {price}
          </p>
          <p className="mb-8 text-slate-600 leading-normal font-light">
            Rating : {rating}
          </p>
          <div>
            <a
              href="#"
              className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
            >
              Add To Favourites
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
