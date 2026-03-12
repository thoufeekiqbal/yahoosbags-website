import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/HomeBackground.jpg";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}

<section
className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
style={{ backgroundImage: `url(${heroImage})` }}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative text-white">

<h1 className="text-6xl font-bold mb-6">
Premium Bag Manufacturing
</h1>

<p className="text-xl mb-8">
Custom Bags for Brands & Businesses
</p>

<Link to="/products">
<button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
Explore Products
</button>
</Link>

</div>

</section>


      {/* FEATURES SECTION */}

      <section className="py-20 px-20 text-center bg-white">

        <h2 className="text-4xl font-bold mb-10">
          Why Choose Yahoos Bags
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-semibold">In-house Manufacturing</h3>
            <p>2500+ bags per day capacity</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Custom Branding</h3>
            <p>Private label bags for brands</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Premium Quality</h3>
            <p>Durable materials and craftsmanship</p>
          </div>

        </div>

      </section>


      {/* MANUFACTURING SECTION */}

      <section className="py-20 px-20 text-center bg-gray-100">

        <h2 className="text-4xl font-bold mb-6">
          Custom Bag Manufacturing
        </h2>

        <p className="text-lg mb-8">
          Yahoos Bags manufactures premium bags for brands,
          businesses and retail customers.
        </p>

        <Link to="/contact">
         <button className="bg-black text-white px-8 py-3 rounded-lg">
           Request Bulk Order
         </button>
        </Link>

      </section>

    </div>
  );
}

export default Home;