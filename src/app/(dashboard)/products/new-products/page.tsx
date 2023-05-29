import { NextPage } from "next";
import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

interface INewProductsPageProps {}

const NewProductsPage: NextPage<INewProductsPageProps> = (props) => {
  return (
    <div className="new-products-container">
      new products page
      <Link href={"/products/old-products"}>
        <button style={{ backgroundColor: "lightpink", padding: "10px" }}>
          go to old products page
        </button>
      </Link>
    </div>
  );
};

export default NewProductsPage;
