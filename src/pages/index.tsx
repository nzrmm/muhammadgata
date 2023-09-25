import Head from "next/head";

import { Button } from "@/components";
import { cn } from "@/utils";
import { mediaSocials } from "@/data/media-socials";

const Home = () => {
  return (
    <>
      <Head>
        <title>Muhammad Gata - Frontend and Mobile Developer</title>
        <meta
          name="description"
          content="Hello, I am Muhammad Gata. I am a Frontend and Mobile Developer with passion for creating beautiful user interfaces and satisfying user experiences."
        />
      </Head>

      <div className={cn("mb-20")}>
        <h1 className={cn("mb-10", "lg:mb-16")}>
          A Frontend and Mobile Developer with passion for creating beautiful
          user interfaces and satisfying user experiences.
        </h1>

        <div className={cn("flex flex-col gap-6 mb-10", "lg:gap-8 lg:mb-16")}>
          <h6>
            Hello 👋, i&apos;m Muhammad Gata. I was born in Malang East Java,
            but i spent time living in Mojokerto East Java. I have good skill in
            Frontend and Mobile Development. Now, i focused how to make
            beautiful user interfaces and satisfying user experiences to
            increase user enjoyment.
          </h6>

          <h6>
            I&apos;m proficient in Frontend Technologies including HTML, CSS,
            Javascript, and Typescript, focusing on modern framework such as
            React JS, Vue Js, and Next Js. Also, skilled in Mobile App
            Development using React Native and Flutter.
          </h6>

          <h6>
            Detail-oriented and committed to writing clean, well-maintained code
            according to best practices. Work well together in a work team with
            good problem solving and always looking to learn new skills.
          </h6>

          <h6>
            I choose Frontend and Mobile Development because i love to see
            beautiful design, smooth interactivity in website/app and about the
            right layout. For me, pouring design as code is the best healing for
            now 😇.
          </h6>
        </div>

        <div
          className={cn("flex flex-col gap-8", "lg:flex-row lg:items-center")}
        >
          <div className={cn("flex items-center gap-3")}>
            {mediaSocials.map((mediaSocial, index) => {
              return (
                <a
                  key={index}
                  href={mediaSocial.href}
                  target="_blank"
                  aria-label={mediaSocial.name}
                  className={cn(
                    "w-10 h-10 flex justify-center items-center rounded-md hover:bg-neutral-100",
                    "hover:dark:bg-neutral-800"
                  )}
                >
                  <mediaSocial.icon
                    size={24}
                    className={cn("fill-neutral-700", "dark:fill-neutral-100")}
                  />
                </a>
              );
            })}
          </div>

          <div>
            <a href="mailto:iamgata.me@gmail.com">
              <Button id="email-me-button" size="sm" variant="primary">
                Email me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
