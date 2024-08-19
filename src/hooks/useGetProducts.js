import { useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";
import axios from "axios";
// this hook Get all the products
async function useGetProducts() {
  const dispatch = useDispatch();
  try {
    let res = await axios.get("https://api.escuelajs.co/api/v1/products");
    dispatch(getProducts(res?.data));
  } catch (error) {
    console.log(error);
  }
}

export default useGetProducts;
