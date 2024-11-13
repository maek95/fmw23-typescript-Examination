import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full box-border flex justify-between sticky top-0 mb-6 px-4 pt-4">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="cartbtn"
          height={100}
          width={100}
          className="rounded-xl"
        />
      </Link>
      <Link href={"/cart"}>
        <Image
          src={"/cartbtn.svg"}
          alt="cartbtn"
          height={100}
          width={100}
          className="bg-[#F4F3F1F0] rounded-xl"
        />
      </Link>
    </nav>
  );
}