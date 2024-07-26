"use client";

import React from "react";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order placed");
    // router.push("/");
    router.replace("/");
  };

  return (
    <>
      <div>OrderProduct</div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default OrderProduct;
