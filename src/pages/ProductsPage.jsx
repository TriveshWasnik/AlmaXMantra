import React from "react";
import { Link, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import useGetProducts from "../hooks/useGetProducts";
import Container from "../ui/Container";
import pic4080OffBanner from "../assets/images/banners/4080OffBanner.png";
import Banner from "../components/Banner.jsx";
import picFlat300Off from "../assets/images/banners/flat300OffBanner.png";
import Heading from "../ui/Heading.jsx";
import couponBannerPic from "../assets/images/banners/homeCouponBanner.png";
import openBannerPic from "../assets/images/banners/menOpenOfferBanner.png";
import flat70BannerPic from "../assets/images/banners/flat70OffBanner.png";
import crezyDealsPic from "../assets/images/banners/creazyDealsBanner.png";

// it shows all the product data like clothes, furniture, Electronics etc.

const ProductsPage = () => {
  // get the url location
  const location = useLocation();
  // get the product data from redux store
  const { products } = useSelector((store) => store.product);
  (async function () {
    await useGetProducts();
  })();

  return (
    <>
      <Container>
        <Banner
          pic={picFlat300Off}
          className="px-1 md:px-20 w-full md:w-[95%] mt-2 md:mt-8 mb-3 md:mb-6"
          url="/"
        />
        <Banner pic={pic4080OffBanner} className="px-1 md:px-20" url="/" />
        <div className="flex items-center text-gray-500 text-sm mt-5 ml-5">
          <Link to={"/"}>
            <h1 className="text-gray-500">Home / </h1>
          </Link>
          <h1 className="ml-1">{location.state?.category}</h1>
        </div>

        <h1 className="text-lg font-bold ml-5 mt-3">
          {location.state?.category ?? "No Products"}
        </h1>

        <div className="flex items-center justify-center w-full gap-10 flex-wrap ">
          {products
            .filter((data) =>
              data?.category.name.includes(location?.state?.category)
            )
            .map((data) => (
              <div className="w-64 p-2 h-96 text-left text-[#521c03] tracking-wider">
                <Link to={"/details"} state={data}>
                  <Carousel
                    className="w-64 p-2"
                    showThumbs={false}
                    showArrows={false}
                    autoPlay={true}
                  >
                    <div>
                      <img src={data.images[0]} />
                    </div>
                    <div>
                      <img src={data.images[1]} />
                    </div>
                    <div>
                      <img src={data.images[2]} />
                    </div>
                  </Carousel>
                  <div className="my-2 pl-3">
                    <div className=" font-bold mt-6">{data.title}</div>
                    <div className="text-sm text-gray-500">
                      {data.category.name}
                    </div>
                    <div className="flex items-center">
                      <div className=" font-bold text-sm "> $ {data.price}</div>
                      <div className="text-xs text-gray-400 line-through ml-1 ">
                        $ {data.price + 22}
                      </div>
                      <div className="text-xs text-orange-400 ml-1">
                        ($ 22 OFF)
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <Heading
          text="COUPONS CORNER"
          className="text-[20px] md:text-[48px] text-center py-5 md:py-20"
        />
        <Banner pic={couponBannerPic} url="/" className="px-1 md:px-20" />
        <Banner pic={openBannerPic} url="/" className="mt-5" />
        <Banner pic={flat70BannerPic} url="/" />
        <Banner pic={crezyDealsPic} url="/" />
      </Container>
    </>
  );
};

export default ProductsPage;
