import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import LoadingComp from "../../../components/loading/LoadingComp";
import useFetch from "../../../hooks/useFetch";

import ms from "./ProductDetails.module.css";

const ProductDetails = () => {
  const [imageString, setImageString] = useState("");
  const [productBaseImage, setProductBaseImage] = useState("");
  const { id } = useParams(); // here in id we get the same which we have set at the time of setting the routes like '/product/:id'
  const { data } = useFetch(`/products/get_single_product/${id}`);
  // console.log(data);
  const onMouseEnter = (e) => {
    // console.log(e.target);
    // console.log(e.target.attributes.src.nodeValue);
    setImageString(e.target.attributes.src.nodeValue);
  };

  const getProductBaseImage = async () => {
    const dataImage = await data.images;
    setProductBaseImage(dataImage[0]);
  };

  useLayoutEffect(() => {
    getProductBaseImage();
  }, [data]);

  return (
    <div className={ms.product_detail_main_container}>
      {/* {console.log(data.images)} */}
      <section className={ms.left_section}>
        <div className={ms.product_image_container}>
          <div className={ms.product_main_image_thumbnails}>
            {data.images?.map((image) => {
              return (
                <img
                  src={image}
                  alt={`product_image-${data.title}`}
                  key={image}
                  onMouseEnter={onMouseEnter}
                />
              );
            })}
          </div>
          <div className={ms.product_main_image_container}>
            <img
              className={ms.actual_image}
              src={imageString ? imageString : productBaseImage}
              alt={`product_image-${data.title}`}
            />
          </div>
        </div>
        <div className={ms.add_cart_buy_now}>
          <button className={ms.add_to_cart_button}>ADD TO CART</button>
          <button className={ms.buy_now_button}>BUY NOW</button>
        </div>
      </section>

      {/* product details section */}
      <section className={ms.product_details_container}>
        <div className={ms.product_snapshot}>
          <div className={ms.product_name_and_brand_container}>
            <h4 className={ms.product_brand}>{data.brand}</h4>
            <h2 className={ms.product_name}>{data.title}</h2>
          </div>
          <div className={ms.product_special_price_container}>
            <h4 className={ms.product_special_price}>Special Price</h4>
          </div>
          <div className={ms.product_pricing_container}>
            <h1 className={ms.product_selling_price}>${data.price}</h1>
            <p className={ms.product_actual_price}>$5,999</p>
            <h4 className={ms.product_discount_percentage}>90% off</h4>
          </div>
          <div className={ms.product_rating_reviews}>
            <div className={ms.product_star}>
              <h4>{data.rating}*</h4>
            </div>
            <div className={ms.product_rating_reviews_count}>
              <h4>5,000 rating and 4000 reviews</h4>
            </div>
          </div>
        </div>
        <div className={ms.available_offer_container}>
          <h2>Available Offers</h2>
          <div className={ms.available_offer_list}>
            <li>
              Special PriceGet extra 35% off (price inclusive of
              cashback/coupon)T&C
            </li>
            <li>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
            <li>Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C</li>
            <li>
              Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
              Card worth up to ₹500*Know More
            </li>
            <li>
              Partner OfferPurchase now & get a surprise cashback coupon till
              November 2023Know More
            </li>
          </div>
        </div>

        <div className={ms.check_delivery_location_container}>
          <div className={ms.delivery_location}>
            <p>Deliver to</p>
          </div>
          <div className={ms.pincode_input_form}>
            <input type="text" placeholder="Enter Pincode" />
            <button>Check</button>
          </div>
        </div>
        <div className={ms.product_highlights_container}>
          <div className={ms.product_highlights}>
            <p>Highlights</p>
          </div>
          <div className={ms.product_highlights_list}>
            <li>highlights - 01</li>
            <li>highlights - 02</li>
            <li>highlights - 03</li>
            <li>highlights - 04</li>
            <li>highlights - 05</li>
          </div>
        </div>
        <div className={ms.seller_info_container}>
          <div className={ms.seller_heading}>
            <p>Seller</p>
          </div>
          <div className={ms.seller_details}>
            <div className={ms.seller_name}>Seller xyz</div>
            <li>highlights - 01</li>
            <li>highlights - 02</li>
          </div>
        </div>
        <div className={ms.product_description_container}>
          <div className={ms.product_description_heading}>
            <p>Description</p>
          </div>
          <div className={ms.product_description_details}>
            <p className={ms.product_description}>{data.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
