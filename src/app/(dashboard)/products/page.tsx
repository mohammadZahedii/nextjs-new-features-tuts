"use client";
import { NextPage } from "next";
import Link from "next/link";
import * as React from "react";

interface IProductsPageProps {}

const ProductsPage: NextPage<IProductsPageProps> = (props) => {
  return (
    <div className="products-container">
      <h4>products page</h4>
      <Link href={"/products/new-products"}>
        <button style={{ backgroundColor: "skyblue" }}>
          go to new products page
        </button>
      </Link>
      <Link href={"/products/1"}>
        <button style={{ backgroundColor: "lightgreen" }}>
          view sample product
        </button>
      </Link>
    </div>
  );
};

export default ProductsPage;
