import { Dip, Drink, ProductType, Wonton } from "@/types/types";
import { apiKey } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //const params = req.nextUrl.searchParams
  /* const { searchParams } = new URL(req.url);
  const type = searchParams.get("type"); */
  //const httpsAgent = new https.Agent({rejectUnauthorized: false});
  // const type = await params.type.toString();
  // const { type } = await params; // it says that await does nothing, but it removes an error in the terminal that I access perams before awaiting??
  // const typeStringFormat = type?.toString();
  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  // console.log("apiKey handler:", apiKey);
  const url = new URL(req.url);
  const type = url.pathname.split("/").pop();

  const typeStringFormat = type?.toString();
  /* const url = new URL(req.url);

  const type = url.searchParams.get("type"); */
  // const { type } = context.params;

  try {
    const response = await fetch(
      `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=${typeStringFormat}`,
      {
        headers: {
          accept: "application/json",
          "x-zocom": apiKey,
        } as HeadersInit,
      }
    );

    // Check if the response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      // Log the response text for debugging
      const text = await response.text();
      console.error("Non-JSON response from external API:", text);
      return NextResponse.json(
        {
          error: "Received non-JSON response from external API",
          details: text,
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    const items = data.items as (Wonton | Dip | Drink)[];
    // console.log("data:", data);

    // return  res.status(200).json(data);
    // data.items !!!!!!!!!!
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    //res.status(500).json({ error: 'Failed to fetch data' });
    return NextResponse.json(
      { error: "Failed to fetch menu-data" },
      { status: 500 }
    );
  }
}
