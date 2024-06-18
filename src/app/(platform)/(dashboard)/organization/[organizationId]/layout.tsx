import { startCase } from "lodash";
import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";

import { OrgControl } from "./_components/orgcontrol";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default Layout;
