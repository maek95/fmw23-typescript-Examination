import Image from "next/image";

export default function EtaPage() {
  return (
    <div className="flex flex-col items-center">
      <Image src={"/boxtop.png"} alt="boxtop" />
      <h1>DINA "WONTONS?" TILLAGAS!</h1> {/*  */}
      <h2>ETA 5 MIN</h2>
      <p></p>
    </div>
  );
}
