"use client";
/* http://yumyum-assets.s3-website.eu-north-1.amazonaws.com

// api generated:
// https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys
yum-4wOFSa0vV0WtlFYK

// tenant id generated:
// https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants
{
  "id": "2ncs",
  "name": "maek"
}
*/

import Menu from "@/components/menu/Menu";
import NavBar from "@/components/NavBar";
import { Dip, Drink, Wonton } from "@/types/types";
import { url } from "@/utils/utils";
import { useEffect, useState } from "react";

// TODO: I might have to make this client-side to not have to use 'url'... makes it hard to build on vercel...?
export default function Home() {
  const [foodData, setFoodData] = useState<Wonton[]>();
  const [drinksData, setDrinksData] = useState<Drink[]>();
  const [dipsData, setDipsData] = useState<Dip[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/getMenuByType/wonton`, {
          headers: {
            accept: "application/json", //
          },
        }); // GET
        const data = await response.json();
        //console.log("foodData", foodData);
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching /api/getMenuByType/wonton:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/getMenuByType/drink`, {
          headers: {
            accept: "application/json", //
          },
        }); // GET
        const data = await response.json();
        //console.log("foodData", foodData);
        setDrinksData(data);
      } catch (error) {
        console.error("Error fetching /api/getMenuByType/drink:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/getMenuByType/dip`, {
          headers: {
            accept: "application/json", //
          },
        }); // GET
        const data = await response.json();
        //console.log("foodData", foodData);
        setDipsData(data);
      } catch (error) {
        console.error("Error fetching /api/getMenuByType/dip:", error);
      }
    })();
  }, []);

  /* let foodData: Wonton[] = [];
  try {
    const response = await fetch(`${url}/api/getMenuByType/wonton`, {
      headers: {
        accept: "application/json", //
      },
    }); // GET
    foodData = await response.json();
    console.log("foodData", foodData);
  } catch (error) {
    console.error("Error fetching /api/getMenuByType/wonton:", error);
  }

  let drinksData: Drink[] = [];
  try {
    const response = await fetch(`${url}/api/getMenuByType/drink`, {
      headers: {
        accept: "application/json",
      },
    }); // GET
    drinksData = await response.json();
  } catch (error) {
    console.error("Error fetching /api/getMenuByType/drink:", error);
  }

  let dipsData: Dip[] = [];
  try {
    const response = await fetch(`${url}/api/getMenuByType/dip`, {
      headers: {
        accept: "application/json",
      },
    }); // GET
    dipsData = await response.json();
  } catch (error) {
    console.error("Error fetching /api/getMenuByType/dip:", error);
  } */

  return (
    <div className="w-full">
      <NavBar />

      <main className="flex flex-col w-full text-start px-4 pb-6 box-border">
        <h1
          className="text-[#F4F3F1F0] custom-text-shadow"
          //style={{ textShadow: "2px 2px #000000" }}
        >
          Meny
        </h1>

        {foodData &&
          drinksData &&
          dipsData &&
          foodData.length > 0 &&
          drinksData.length > 0 &&
          dipsData.length > 0 && (
            <Menu
              foodData={foodData}
              drinksData={drinksData}
              dipsData={dipsData}
            />
          )}
      </main>
    </div>
  );
}
