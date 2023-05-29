import { NextPage } from "next";
import Link from "next/link";
import * as React from "react";

interface IOldProductsPageProps {}

const OldProductsPage: NextPage<IOldProductsPageProps> = (props) => {
  return (
    <div className="old-products-container">
      old products page
      <Link href={"/products/new-products"}>
        <button style={{ backgroundColor: "lightblue", padding: "10px" }}>
          go to new products page
        </button>
      </Link>
    </div>
  );
};

export default OldProductsPage;
