import type { NextPage } from "next";
import * as tokens from "../src/tokens/data";

const Home: NextPage = () => {
  console.log(tokens.TypographyH1.lineHeight);

  return (
    <div>
      <span
        style={{
          fontFamily: tokens.TypographyH1.fontFamily,
          fontSize: tokens.TypographyH1.fontSize,
          // lineHeight: tokens.TypographyH1.lineHeight,
        }}
      >
        h1
      </span>
      <br />
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
