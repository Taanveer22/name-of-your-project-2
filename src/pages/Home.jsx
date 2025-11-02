import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Phones from "../components/Phones";

const Home = () => {
  const phonesData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Phones phonesData={phonesData}></Phones>
    </div>
  );
};

export default Home;
