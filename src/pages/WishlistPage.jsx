import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { toast } from "react-hot-toast";
import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/setup";
import Container from "../ui/Container";

// Wishlist Page

const WishlistPage = () => {
  const [productList, setProductList] = useState([]);
  async function getProducts() {
    try {
      // check the current user
      const user = auth.currentUser;
      // get the user uid from users collection
      const userDoc = doc(db, "users", user?.uid);
      // reconnect the products of Perticular user
      const productDoc = collection(userDoc, "product");
      const data = await getDocs(productDoc);
      const filteredData = data?.docs?.map((doc) => ({ ...doc.data() }));
      setProductList(filteredData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-lg font-bold ml-5 mt-3">
          My Wishlist :-
          {productList.length} Items
        </h1>
        <div className="flex items-center justify-center w-full gap-10 flex-wrap ">
          {productList?.map((product) => (
            <div
              key={product.data.id}
              className="w-64 p-2 md:h-96 text-left text-[#521c03] tracking-wider"
            >
              <Link>
                <Carousel
                  className="w-64 p-2"
                  showThumbs={false}
                  showArrows={false}
                  autoPlay={false}
                >
                  <div>
                    <img src={product.data.images[0]} />
                  </div>
                  <div>
                    <img src={product.data.images[1]} />
                  </div>
                  <div>
                    <img src={product.data.images[2]} />
                  </div>
                </Carousel>
                <div className="my-2 pl-3">
                  <div className=" font-bold mt-6">{product.data.title}</div>
                  <div className="flex items-center">
                    <div className=" font-bold text-sm ">
                      $ {product.data.price}
                    </div>
                    <div className="text-xs text-gray-400 line-through ml-1 ">
                      $ {product.data.price + 22}
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
      </Container>
    </>
  );
};

export default WishlistPage;
