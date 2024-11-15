import { Dip, Drink, ProductType, Wonton } from "@/types/types";
import { apiKey } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
  /*  {
    params,
  }: {
    params: { type: string };
  } */
) {
  //const params = req.nextUrl.searchParams
  /*  const { searchParams } = new URL(req.url);
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

    const data = await response.json();
    // console.log("data:", data);
    const items = data.items as (Wonton | Dip | Drink)[];
    // console.log("items", items);

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
