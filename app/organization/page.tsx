import { NextPage } from "next";
import { OrganizationList } from "./_components/organization_list";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <OrganizationList />
    </div>
  );
};

export default Page;
