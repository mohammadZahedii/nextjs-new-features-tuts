import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      home page
      <Link href={"/products"}>
        <button style={{ padding: "10px" }}> go to products</button>
      </Link>
    </div>
  );
}
