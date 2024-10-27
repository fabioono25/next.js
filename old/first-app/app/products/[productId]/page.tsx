import { Metadata } from "next";

interface Props {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone: ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };

  // return {
  //   title: `Product: ${params.productId}`,
  // };
};

const Page = ({ params }: Props) => {
  return <div>Product: {params.productId}</div>;
};

export default Page;
