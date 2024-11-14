import Image from "next/image";

// NOT USING, USING EtaModal.tsx in components instead!!!
export default function EtaPage() {
  return (
    <div className="flex flex-col items-center">
      <Image src={"/boxtop.png"} height={500} width={500} alt="boxtop" />
      <h1>DINA "WONTONS?" TILLAGAS!</h1> {/*  */}
      <h2>ETA 5 MIN</h2>
      <p></p>
    </div>
  );
}
