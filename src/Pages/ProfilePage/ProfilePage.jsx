import React from "react";
import {
  TruckIcon,
  CashIcon,
  ClockIcon,
  LinkIcon,
  EyeIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Product from "../HomePage/product";
import Profile from "./Profile";
import Navbar from "../../assets/Navbar/Navbar.jsx";

const products = [
  {
    image: "https://m.media-amazon.com/images/I/51JpA4Olu4L._AC_SL1157_.jpg",
    name: "Product 1",
    price: 29.99,
    rating: 4,
  },
  {
    image: "https://m.media-amazon.com/images/I/51Yzm2f9SsL._AC_SL1500_.jpg",
    name: "Product 2",
    price: 49.99,
    rating: 5,
  },
  {
    image: "https://i.ebayimg.com/images/g/9PgAAOSwNHphOEue/s-l960.webp",
    name: "Product 3",
    price: 19.99,
    rating: 3,
  },
];

function ProfilePage() {
  return (
    <div className="min-h-screen relative">
      {/* Green header div */}
      <div className="flex justify-center items-center h-24 bg-green-500 w-full"></div>

      {/* Blurred foggy div at the intersection */}
      <div className="flex justify-center absolute left-0 right-0 top-12 h-24 mx-auto max-w-md bg-gray-100 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-md z-10">
        {/* Profile picture and name */}
        <Profile
          imageUrl={"src/Pages/ProfilePage/logo.jpg"}
          name={"Jong Turkson"}
          location={"Douala"}
        />
      </div>

      {/* Main content div */}
      <div className="flex flex-col items-center min-h-screen bg-white pt-24 px-4">
        <div className="flex justify-center p-4 space-x-8 w-full max-w-md">
          <div className="flex flex-col items-center justify-center">
            <ClockIcon className="w-12 h-12 justify-center flex mb-2" />
            <p className="text-sm">Pending Payment</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <TruckIcon className="w-12 h-12 justify-center flex mb-2" />
            <p className="text-sm">In Transit</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CashIcon className="w-12 h-12 justify-center flex mb-2" />
            <p className="text-sm">Return and Refund</p>
          </div>
        </div>
        <div className="w-full max-w-md">
          <h4 className="mb-5 text-xl font-bold font-mono">Order History</h4>
          <div className="flex overflow-x-auto space-x-4">
            {products.map((product, index) => (
              <Product
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full max-w-md mt-4">
          {/* Icons and text of Wishlist, Recently viewed, groups, address mark, language, setting */}
          <div className="flex items-center mb-2">
            <LinkIcon className="w-8 h-8 mr-2" />
            <p className="text-sm">Wish List</p>
          </div>
          <div className="flex items-center mb-2">
            <EyeIcon className="w-8 h-8 mr-2" />
            <p className="text-sm">Recently Viewed</p>
          </div>
          <div className="flex items-center mb-2">
            <LinkIcon className="w-8 h-8 mr-2" />
            <p className="text-sm">Groups</p>
          </div>
          <div className="flex items-center mb-2">
            <LocationMarkerIcon className="w-8 h-8 mr-2" />
            <p className="text-sm">Address</p>
          </div>
          <div className="flex items-center mb-2">
            <LinkIcon className="w-8 h-8 mr-2" />
            <p className="text-sm">Language</p>
          </div>
          <div className="flex items-center mb-2">
            <EyeIcon className="w-8 h-8 mr-2" />
            <p className="text-sm">Setting</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <Navbar />
      </div>
    </div>
  );
}

export default ProfilePage;