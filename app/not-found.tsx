import Link from "next/link";
import Header from "./components/Header/Header";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div
        style={{
          textAlign: "center",
          width: "300px",
          height: "auto",
          margin: "300px auto",
        }}
      >
        <h2>not-found</h2>
        <p className="p-1 m-2">Could not find the requested resource</p>
        <Link
          style={{
            backgroundColor: "#1a1a1a",
            padding: "10px",
            margin: "20px auto",
          }}
          href={"/"}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
