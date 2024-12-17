import { auth } from "@/lib/auth";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const session = await auth();
  console.log(`🚀 ~ file: page.tsx:8 ~ session:`, session?.user);
  return <div>Page</div>;
};

export default Page;
