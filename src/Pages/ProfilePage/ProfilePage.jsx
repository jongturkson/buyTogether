import React from "react";
import { TruckIcon, CashIcon, ClockIcon, LinkIcon, EyeIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import Product from "../HomePage/product";
import Profile from "./Profile";

const products = [
    {
      image: 'https://m.media-amazon.com/images/I/51JpA4Olu4L._AC_SL1157_.jpg',
      name: 'Product 1',
      price: 29.99,
      rating: 4,
    },
    {
      image: 'https://m.media-amazon.com/images/I/51Yzm2f9SsL._AC_SL1500_.jpg',
      name: 'Product 2',
      price: 49.99,
      rating: 5,
    },
    {
      image: 'https://i.ebayimg.com/images/g/9PgAAOSwNHphOEue/s-l960.webp',
      name: 'Product 3',
      price: 19.99,
      rating: 3,
    },
  ];

function ProfilePage(){
    return (
        <div className="relative">
            {/* Green header div */}
            <div className="flex justify-center items-center h-24 bg-green-500">
            </div>
            
            {/* Blurred foggy div at the intersection */}
            <div className="flex justify-center absolute left-0 right-0 top-12 h-24 mr-50 ml-50 bg-gray-100 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-md z-10">
                {/* Profile picture and name */}
                <Profile imageUrl={"src/Pages/ProfilePage/logo.jpg"} name={"Jong Turkson"} location={"Douala"}/>
            </div>
            
            {/* Main content div */}
            <div className="justify-center items-center min-h-screen bg-white pt-10 m-10">
                <div className="flex justify-center p-4 space-x-8">
                    <div className="flex flex-col items-center justify-center">
                        <ClockIcon className="w-12 h-12 justify-center flex mb-2" />
                        <p>Pending Payment</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <TruckIcon className="w-12 h-12 justify-center flex mb-2" />
                        <p>In Transit</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <CashIcon className="w-12 h-12 justify-center flex mb-2" />
                        <p>Return and Refund</p>
                    </div>
                </div>
                <div>
                    <h4 className="mb-5 text-xl font-bold font-mono">Order History</h4>
                    <div  className="flex space-x-8">
                    {products.map((product, index) => (
                        <Product className=""
                            key={index}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                        />
                    ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    {/* Icons and text of Wishlist, Recently viewed, groups, address mark, language, setting */}
                    <div className="flex mb-2 mt-4">
                        <LinkIcon className="w-12 h-12" />
                        <p>Wish List</p>
                    </div>
                    <div className="flex mb-2">
                        <EyeIcon className="w-12 h-12 " />
                        <p>Recently Viewed</p>
                    </div>
                    <div className="flex mb-2">
                        <LinkIcon className="w-12 h-12 " />
                        <p>Groups</p>
                    </div>
                    <div className="flex">
                        <LocationMarkerIcon className="w-12 h-12" />
                        <p>Address</p>
                    </div>
                    <div className="flex mb-2">
                        <LinkIcon className="w-12 h-12" />
                        <p>Language</p>
                    </div>
                    <div className="flex mb-2">
                        <EyeIcon className="w-12 h-12" />
                        <p>Setting</p>
                    </div>
                    

                </div>
            </div>
            
        </div>
    );
}

export default ProfilePage;