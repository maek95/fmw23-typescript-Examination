import { Order, Receipt } from "@/types/types";
import { apiKey, tenantId } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: { orderId: string };
  }
) {
  const { orderId } = await params; // it says that await does nothing, but it removes an error in the terminal that I access perams before awaiting??

  if (!orderId) {
    return NextResponse.json(
      { error: "Missing orderId in getReceipt request" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/receipts/${orderId}`,
      {
        headers: {
          accept: "application/json",
          "x-zocom": apiKey,
        } as HeadersInit,
      }
    );

    const data = await response.json();
    const receipt = data.receipt as Receipt;
    // console.log("data:", data);

    // return  res.status(200).json(data);
    // data.items !!!!!!!!!!
    return NextResponse.json(receipt, { status: 200 });
  } catch (error) {
    //res.status(500).json({ error: 'Failed to fetch data' });
    return NextResponse.json(
      { error: "Failed to fetch receipt-data" },
      { status: 500 }
    );
  }
}
