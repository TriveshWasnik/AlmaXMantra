import React, { useEffect, useState } from "react";
import pic4080OffBanner from "../assets/images/banners/4080OffBanner.png";
import { useDispatch } from "react-redux";
import { setSlidesPerRow } from "../store/productSlice.js";
import Banner from "../components/Banner.jsx";
import picFlat300Off from "../assets/images/banners/flat300OffBanner.png";
import Heading from "../ui/Heading.jsx";
import couponBannerPic from "../assets/images/banners/homeCouponBanner.png";
import openBannerPic from "../assets/images/banners/menOpenOfferBanner.png";
import flat70BannerPic from "../assets/images/banners/flat70OffBanner.png";
import crezyDealsPic from "../assets/images/banners/creazyDealsBanner.png";
import Carousel from "../components/Carousel";
import appBannerPic from "../assets/images/banners/homeAppBanner.png";
import CartCategory from "../ui/CartCategory.jsx";
import { logoutUser } from "../store/authSlice.js";

// Home Page
function HomePage() {
  const dispatch = useDispatch();
  // set the numbers of image per slides
  useEffect(() => {
    dispatch(setSlidesPerRow(5));
  }, []);

  return (
    <>
      <Banner
        pic={picFlat300Off}
        className="px-1 md:px-20 w-full md:w-[95%] mt-2 md:mt-8 mb-3 md:mb-6"
        url="/"
      />
      <Banner pic={pic4080OffBanner} className="px-1 md:px-20" url="/" />
      <Heading
        text="COUPONS CORNER"
        className="text-[20px] md:text-[48px] text-center py-5 md:py-20"
      />
      <Banner pic={couponBannerPic} url="/" className="px-1 md:px-20" />
      <Banner pic={openBannerPic} url="/" className="mt-5" />
      <Banner pic={flat70BannerPic} url="/" />
      <Banner pic={crezyDealsPic} url="/" />

      <Heading
        text="CATEGORIES TO CART"
        className="text-[20px] md:text-[48px] text-center py-3 md:py-20"
      />
      <div className="flex items-center justify-center w-full gap-10 flex-wrap ">
        <CartCategory
          pic="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
          name="Clothes"
          discount="40-70% OFF"
          state={{ category: "Clothes" }}
        />
        <CartCategory
          pic="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fHww"
          name="Furniture"
          discount="30-60% OFF"
          state={{ category: "Furniture" }}
        />
        <CartCategory
          pic="https://images.unsplash.com/photo-1627405085366-ee229985ecda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fEVsZWN0cm9uaWNzJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
          name="Electronics"
          discount="50-75% OFF"
          state={{ category: "Electronics" }}
        />
        <CartCategory
          pic="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNob2VzfGVufDB8fDB8fHww"
          name="Shoes"
          discount="40-60% OFF"
          state={{ category: "Shoes" }}
        />
        <CartCategory
          pic="https://plus.unsplash.com/premium_photo-1684586996677-56f5a67bf353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJhZ3N8ZW58MHx8MHx8fDA%3D"
          name="Others"
          discount="20-50% OFF"
          state={{ category: "Miscellaneous" }}
        />
      </div>
      <Banner
        pic={appBannerPic}
        url="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059?mt=8"
        className="px-1 md:px-20 my-5 md:my-12"
      />
    </>
  );
}

export default HomePage;
