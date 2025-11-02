// import SingleCard from "./SingleCard";
import Card from "./Card";
import PropTypes from "prop-types";


const Phones = ({ phonesData }) => {
  // console.log(phonesData);
  return (
    <div className="py-10">
      <h2 className="text-2xl text-center">Our Phones Collection</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {phonesData.map((phone) => (
          <Card key={phone.id} phone={phone}></Card>
        ))}
      </div>

      {/* ====== only for practice purpose================ */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {phonesData.map((phone) => (
          <SingleCard key={phone.id} phone={phone}></SingleCard>
        ))}
      </div> */}
      {/* ====== only for practice purpose================ */}
    </div>
  );
};
Phones.propTypes = {
  phonesData: PropTypes.array,
};
export default Phones;
