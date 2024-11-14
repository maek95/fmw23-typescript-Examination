//

import { Order, OrderBody } from "@/types/types";
import { apiKey, tenantId } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { itemIds } = await req.json();

  const orderBody: OrderBody = {
    items: itemIds,
  };

  try {
    console.log(itemIds);
    console.log(orderBody);

    const response = await fetch(
      `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/${tenantId}/orders`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-requested-with": "XMLHttpRequest",
          "x-zocom": apiKey,
          "Content-Type": "application/json",
        } as HeadersInit,
        body: JSON.stringify(orderBody),
      }
    );

    const data = await response.json();
    const order = data.order as Order;
    //console.log("data:", data);

    // return  res.status(200).json(data);
    // data.items !!!!!!!!!!
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    //res.status(500).json({ error: 'Failed to fetch data' });
    return NextResponse.json(
      { error: "Failed to POST order" },
      { status: 500 }
    );
  }
}
