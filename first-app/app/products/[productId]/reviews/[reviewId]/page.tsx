"use client";

import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({ params }: Props) => {

  const random = getRandomInt(2);

  if (random === 0) {
    // throw new Error("Random error review");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review: {params.reviewId} for Product: {params.productId}.
    </div>
  );
};

export default ReviewDetail;
