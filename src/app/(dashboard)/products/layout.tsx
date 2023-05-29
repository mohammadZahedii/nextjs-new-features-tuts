"use client";
import { NextPage } from "next";
import * as React from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface IProductsLayoutProps {
  children: React.ReactNode;
}

const ProductsLayout: NextPage<IProductsLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments");
  }, []);
  return (
    <div className="products-wrapper">
      {"products layout"}
      <br />
      <br />
      {`pathname that received from usePathname : ${pathname}`}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {pathname !== "/products" ? (
          <Link href={"/products"}>
            <button style={{ padding: "10px" }}>back to products</button>
          </Link>
        ) : null}
        <Link href={"/"}>
          <button style={{ padding: "10px" }}> go to home page</button>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default ProductsLayout;
