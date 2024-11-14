import { Order } from "@/types/types";
import { apiKey, tenantId } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

// TODO: not using, only need to send an order and then check the receipt?
export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/${tenantId}/orders`,
      {
        headers: {
          accept: "application/json",
          "x-zocom": apiKey,
        } as HeadersInit,
      }
    );

    const data = await response.json();
    const orders = data.orders as Order[];
    // console.log("data:", data);

    // return  res.status(200).json(data);
    // data.items !!!!!!!!!!
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    //res.status(500).json({ error: 'Failed to fetch data' });
    return NextResponse.json(
      { error: "Failed to fetch menu-data" },
      { status: 500 }
    );
  }
}
