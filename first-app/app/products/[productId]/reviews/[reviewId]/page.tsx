import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewDetail = ({ params }: Props) => {
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
