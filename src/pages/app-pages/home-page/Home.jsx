import React from "react";

import ms from "./Home.module.css";

import ProductCardComp from "../../../components/product_card/ProductCardComp";
import PhoneNavComp from "../../../components/phone_nav_comp/PhoneNavComp";
import useFetch from "../../../hooks/useFetch";
import LoadingComp from "../../../components/loading/LoadingComp";
import { useAuth } from "../../../context/Auth.context";

// import data from "./../../../data/data.json";
// console.log(data);

const Home = () => {
  const { user } = useAuth();
  // console.log(user);
  const { data, error, loading } = useFetch("/products/get_all_product");
  // console.log(data);
  // const [data, setData] = useState([]);

  // const getProductsData = async () => {
  //   const { data } = await axios.get("/products/get_all_product");
  //   // console.log(data.data);
  //   setData(data.data);
  // };
  // console.log(data);

  // useEffect(() => {
  //   getProductsData();
  // }, []);

  return (
    <>
      <header className={ms.container}>
        <section className={ms.item_list}>
          {!loading ? (
            !error ? (
              data.map((item) => {
                return <ProductCardComp key={item._id} {...item} />;
              })
            ) : (
              <h1>Something went wrong, please try again</h1>
            )
          ) : (
            <LoadingComp />
          )}
        </section>
        <PhoneNavComp />
      </header>
    </>
  );
};

export default Home;
