import type { NextPage } from "next";
import * as tokens from "../src/tokens/data";

const Home: NextPage = () => {
  return (
    <div>
      <span
        style={{
          fontFamily: tokens.TypographyH1.fontFamily,
          fontSize: tokens.TypographyH1.fontSize,
        }}
      >
        h1
      </span>
      <span
        style={{
          fontFamily: tokens.TypographyH2.fontFamily,
          fontSize: tokens.TypographyH2.fontSize,
        }}
      >
        h2
      </span>
    </div>
  );
};

export default Home;
