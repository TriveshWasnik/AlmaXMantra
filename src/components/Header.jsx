import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import Container from "../ui/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import MenuItem from "../ui/MenuItem.jsx";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/authSlice.js";
import { toast } from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/setup.jsx";

// Header Component

const Header = () => {
  // check user login or not using react-redux
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  // Navigate the React Route
  const navigate = useNavigate();
  // defined and set the value of search
  const [search, setSearch] = useState("");
  // logout the current user
  async function logoutHandler() {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      toast.success("User LoggedOut Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className=" bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center  justify-between">
          <nav className="flex items-center gap-4 md:gap-16">
            <div className="w-10 md:max-w-16 md:w-16">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className={`flex items-center`}>
              <li>
                <NavLink
                  to={"/products"}
                  state={{ category: "Clothes" }}
                  className={`border-b-4  border-transparent flex flex-col items-center text-[#3E3F45] px-1 md:px-3 py-4 text-[14px]  tracking-wide `}
                >
                  Clothes
                </NavLink>
              </li>
              <li>
                <NavLink
                  state={{ category: "Shoes" }}
                  to={"/products"}
                  className={`border-b-4  border-transparent flex flex-col items-center text-[#3E3F45] px-1 md:px-3 py-4 text-[14px]  tracking-wide `}
                >
                  Shoes
                </NavLink>
              </li>
              <li>
                <NavLink
                  state={{ category: "Electronics" }}
                  to={"/products"}
                  className={`border-b-4  border-transparent flex flex-col items-center text-[#3E3F45] px-1 md:px-3 py-4 text-[14px]  tracking-wide `}
                >
                  Electronics
                </NavLink>
              </li>
              <li>
                <NavLink
                  state={{ category: "Furniture" }}
                  to={"/products"}
                  className={`border-b-4  border-transparent flex flex-col items-center text-[#3E3F45] px-1 md:px-3 py-4 text-[14px]  tracking-wide `}
                >
                  Furniture
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex  items-center gap-2 md:gap-4">
            <SearchBar
              value={search}
              placeholder="Search for products, brands and more"
              onChange={(e) => setSearch(e.target.value)}
              to={`/search/${search}`}
            />
            <ul className={`flex items-center`}>
              {user !== null ? (
                <>
                  <MenuItem
                    to="/wishlist"
                    icon={<FaRegHeart size={"18px"} />}
                    name="Wishlist"
                  />
                  {/* <MenuItem
                      to="/checkout/cart"
                      icon={<HiOutlineShoppingBag size={"18px"} />}
                      name="Bag"
                    /> */}
                  <li onClick={logoutHandler}>
                    <NavLink
                      className={`border-b-4  border-transparent flex flex-col items-center text-[#3E3F45] md:px-3 py-4 text-[11px]  tracking-widest `}
                    >
                      <div className="pb-1">
                        <FiLogOut size={"18px"} />
                      </div>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <MenuItem
                    to="/login"
                    icon={<FaRegUser size={"18px"} />}
                    name="Login"
                  />
                </>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
