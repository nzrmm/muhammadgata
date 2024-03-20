import { ImageResponse } from "next/og";

export const runtime = "edge";

import { SITE_NAME } from "@/constants/env";

export const GET = (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "";
    const subTitle = searchParams.get("subTitle") || "";

    return new ImageResponse(
      (
        <div tw="w-full h-full flex flex-col justify-between bg-neutral-900 text-white px-14 py-20">
          <div tw="flex flex-col">
            <h5 tw="text-3xl text-white/70">{subTitle}</h5>
            <h1 tw="text-7xl font-bold -mt-4 -ml-1">{title}</h1>
          </div>

          <div tw="flex">
            <h5 tw="text-xl">{SITE_NAME}</h5>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return Response.json("Failed to generate the image", {
      status: 500,
    });
  }
};

// <div tw="w-full h-full flex flex-col justify-between bg-neutral-900 text-white rounded-md px-14 py-20">
//   <div>
//     <h5 tw="text-3xl text-white/70">{subTitle}</h5>
//     <h1 tw="text-7xl font-bold">{title}</h1>
//   </div>

//   <div>
//     <h5 tw="text-xl">muhammadgata.vercel.app</h5>
//   </div>
// </div>
