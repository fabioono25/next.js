interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

const Page = ({ params }: Props) => {
  return <div>Review: { params.reviewId } for Product: { params.productId }.</div>;
};

export default Page;
