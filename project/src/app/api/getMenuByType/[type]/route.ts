import { apiKey } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { type: string } }
) {
  //const httpsAgent = new https.Agent({rejectUnauthorized: false});
  const type = params.type;
  /*  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log("apiKey handler:", apiKey);

  const customerTel = req.nextUrl.searchParams.get("customerTel"); */

  //const type = "wonton";

  try {
    const response = await fetch(
      `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=${type}`,
      {
        headers: {
          accept: "application/json",
          "x-zocom": apiKey,
        } as HeadersInit,
      }
    );

    const data = await response.json();
    console.log("data:", data);

    // return  res.status(200).json(data);
    // data.items !!!!!!!!!!
    return NextResponse.json(data.items, { status: 200 });
  } catch (error) {
    //res.status(500).json({ error: 'Failed to fetch data' });
    return NextResponse.json(
      { error: "Failed to fetch menu-data" },
      { status: 500 }
    );
  }
}
