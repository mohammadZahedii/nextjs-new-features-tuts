import { NextPage } from "next";
import * as React from "react";

interface ISingleProductProps {
  params: {
    id: string;
  };
}

const SingleProduct: NextPage<ISingleProductProps> = ({ params }) => {
  const { id } = params;

  return <div>{`product id is : ${id}`}</div>;
};

export default SingleProduct;
