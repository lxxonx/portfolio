import React, { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props {}

function PortfolioPage({}: Props): ReactElement {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  return <div></div>;
}

export default PortfolioPage;
