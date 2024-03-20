import { ImageResponse } from "next/og";

export const runtime = "edge";

import { SITE_URL, SITE_OWNER, SITE_ROLE } from "@/constants/env";

export const GET = async (req: Request) => {
  const spaceGrotestkBold = fetch(
    new URL("../../../../public/fonts/SpaceGrotesk-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const spaceGrotestkReguler = fetch(
    new URL(
      "../../../../public/fonts/SpaceGrotesk-Regular.ttf",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "";
    const subTitle = searchParams.get("subTitle") || "";

    return new ImageResponse(
      (
        <div
          tw="w-full h-full flex flex-col justify-between bg-neutral-900 text-white p-20"
          style={{ fontFamily: "Space Grotesk Bold" }}
        >
          <div tw="flex flex-col">
            <h4
              tw="text-2xl text-white/70"
              style={{ fontFamily: "Space Grotesk Reguler" }}
            >
              {subTitle}
            </h4>
            <h1 tw="text-6xl font-bold -mt-4">{title}</h1>
          </div>

          <div tw="flex items-center">
            <div
              tw="flex w-12 h-12 rounded-full overflow-hidden mr-4"
              style={{
                backgroundImage: `url(${SITE_URL}/images/me.png)`,
              }}
            ></div>
            <div tw="flex flex-col -mt-2">
              <h5 tw="text-xl">{SITE_OWNER}</h5>
              <p
                tw="text-sm text-white/70 -mt-6"
                style={{ fontFamily: "Space Grotesk Reguler" }}
              >
                {SITE_ROLE}
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Space Grotesk Bold",
            data: await spaceGrotestkBold,
            style: "normal",
            weight: 700,
          },
          {
            name: "Space Grotesk Reguler",
            data: await spaceGrotestkReguler,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
};
