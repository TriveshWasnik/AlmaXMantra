import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/setup";
import { toast } from "react-hot-toast";
// Product Details Page
function ProductDetailsPage() {
  // get the perticular page location
  const location = useLocation();
  const navigate = useNavigate();
  function addProducts() {
    try {
      // get the current user
      const user = auth.currentUser;

      if (user === null) {
        navigate("/login");
      } else {
        // fetch the user uid
        const userDoc = doc(db, "users", user?.uid);
        // fetch the product title
        const productDoc = doc(userDoc, "product", location.state.title);
        // set the product data on user collection
        setDoc(productDoc, { data: location.state });
        // display the message
        toast.success("Product Added to the Wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="grid grid-rows-2 max-w-[600px]">
          <img src={location.state.images[0]} alt="" className="p-1 " />
          <div className="flex w-1/2 h-1/2">
            <img src={location.state.images[1]} alt="" className="p-1" />
            <img src={location.state.images[2]} alt="" className="p-1" />
          </div>
        </div>

        <div className="-mt-40 md:mt-0 p-5 max-w-[600px]">
          <h1 className="text-xl md:text-2xl font-bold">
            {location.state.title}
          </h1>
          <h1 className="text-gray-500 text-[14px] md:text-xl">
            {location.state.description}
          </h1>
          <hr className="mt-2" />
          <div className="flex items-center mt-4">
            <h1 className="text-2xl font-bold">$ {location.state.price}</h1>
            <h1 className="text-xl text-gray-500 ml-2">MRP </h1>
            <h1 className="text-xl line-through text-gray-500 ml-1">
              $ {location.state.price + 22}
            </h1>
            <h1 className="text-orange-500 ml-2 font-bold text-lg">
              ($ 22 OFF)
            </h1>
          </div>
          <h1 className="text-green-800 font-semibold mt-3">
            inclusive of all taxes
          </h1>
          <Button
            onClick={addProducts}
            label="WISHLIST"
            className="px-20 font-bold md:text-lg "
          />
        </div>
      </div>
    </Container>
  );
}

export default ProductDetailsPage;
