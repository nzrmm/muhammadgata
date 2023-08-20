import cx from "classnames";

import { Button, Typography } from "@/components";
import { MEDIA_SOCIALS } from "@/constants";

const Home = () => {
  return (
    <div className={cx("pt-40 pb-32")}>
      <Typography variant="text6Xl" customClassName="mb-16">
        A Frontend and Mobile Developer with passion for creating beautiful user
        interfaces and satisfying user experiences.
      </Typography>

      <div className={cx("flex flex-col gap-8 mb-16")}>
        <Typography variant="textLg">
          Hello 👋, i&apos;m Muhammad Gata. I was born in Malang East Java, but
          i spent time living in Mojokerto East Java. I have good skill in
          Frontend and Mobile Development. Now, i focused how to make beautifull
          user interfaces and satisfying user experiences to increase user
          enjoyment.
        </Typography>

        <Typography variant="textLg">
          I&apos;m proficient in Frontend Technologies including HTML, CSS,
          Javascript, and Typescript, focusing on modern framework such as React
          JS, Vue Js, and Next Js. Also, skilled in Mobile App Development using
          React Native and Flutter.
        </Typography>

        <Typography variant="textLg">
          Detail-oriented and committed to writing clean, well-maintained code
          according to best practices. Work well together in a work team with
          good problem solving and always looking to learn new skills.
        </Typography>

        <Typography variant="textLg">
          I choose Frontend and Mobile Development because i love to see
          beautiful design, smooth interactivity in website/app and about the
          right layout. For me, pouring design as code is the best healing for
          now 😇.
        </Typography>
      </div>

      <div className={cx("flex items-center gap-8")}>
        <div className={cx("flex items-center gap-3")}>
          {MEDIA_SOCIALS.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className={cx(
                  "w-10 h-10 flex justify-center items-center rounded-md",
                  "hover:bg-neutral-100"
                )}
              >
                <item.icon size={24} className={cx("fill-neutral-700")} />
              </a>
            );
          })}
        </div>

        <a href="mailto:iamgata.me@gmail.com">
          <Button id="email-me-button" type="primary" variant="small">
            Email me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
