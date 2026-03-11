import React from "react";
import ProductsList from "../../views/Products/ProductsList";

const ProductListing = () => {
  return (
    <section className="p-5">
      <h1 className="text-lg font-semibold">Products</h1>
      <div className="border rounded-md bg-white p-5 mt-2.5">
        <ProductsList />
      </div>
    </section>
  );
};

export default ProductListing;
