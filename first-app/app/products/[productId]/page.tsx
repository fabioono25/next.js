interface Props {
  params: {
    productId: string;
  };
}

const Page = ({ params }: Props) => {
  return <div>Product: { params.productId }</div>;
};

export default Page;
