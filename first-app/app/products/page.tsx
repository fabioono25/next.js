import { title } from "process";
import Link from "next/link";

export const metadata = {
  // title: "Products Page"
  title: {
    absolute: "BLOG",
  },
};

const Page = () => {
  const prodId = 100;

  return (
    <>
      <Link href="/">HOME</Link>
      <h1>
        <Link href="/products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/products/2" replace>Product 2</Link>
      </h1>
      <h1>
        <Link href={`/products/${prodId}`}>Product {prodId}</Link>
      </h1>
    </>
  );
};

export default Page;
