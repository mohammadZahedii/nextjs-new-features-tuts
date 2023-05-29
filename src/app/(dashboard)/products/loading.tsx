import { NextPage } from "next";
import * as React from "react";

interface IProductsLoadingProps {}

const ProductsLoading: NextPage<IProductsLoadingProps> = (props) => {
  return (
    <div style={{ backgroundColor: "yellow", color: "black", padding: "10px" }}>
      LOADING...
    </div>
  );
};

export default ProductsLoading;
