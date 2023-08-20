import cx from "classnames";

import { Typography } from "@/components";

const Home = () => {
  return (
    <div className={cx("pt-40")}>
      <Typography variant="text6Xl" customClassName="mb-16">
        A Frontend and Mobile Developer with passion for creating beautiful user
        interfaces and satisfying user experiences.
      </Typography>

      <Typography variant="textLg" customClassName="mb-8">
        Hello 👋, i&apos;m Muhammad Gata. I was born in Malang East Java, but i
        spent time living in Mojokerto East Java. I have good skill in Frontend
        and Mobile Development. Now, i focused how to make beautifull user
        interfaces and satisfying user experiences to increase user enjoyment.
      </Typography>

      <Typography variant="textLg" customClassName="mb-8">
        I&apos;m proficient in Frontend Technologies including HTML, CSS,
        Javascript, and Typescript, focusing on modern framework such as React
        JS, Vue Js, and Next Js. Also, skilled in Mobile App Development using
        React Native and Flutter.
      </Typography>

      <Typography variant="textLg" customClassName="mb-8">
        Detail-oriented and committed to writing clean, well-maintained code
        according to best practices. Work well together in a work team with good
        problem solving and always looking to learn new skills.
      </Typography>

      <Typography variant="textLg" customClassName="mb-8">
        I choose Frontend and Mobile Development because i love to see beautiful
        design, smooth interactivity in website/app and about the right layout.
        For me, pouring design as code is the best healing for now 😇.
      </Typography>
    </div>
  );
};

export default Home;
