import type { NextPage } from "next";
import { H1, H2 } from "../src/tokens/tokens";

const Home: NextPage = () => {
  console.log(H1.fontWeight);

  return (
    <div>
      <span style={{ fontFamily: H1.fontFamily, fontSize: H1.fontSize }}>
        h1
      </span>
      <span style={{ fontFamily: H2.fontFamily, fontSize: H2.fontSize }}>
        h2
      </span>
    </div>
  );
};

export default Home;
