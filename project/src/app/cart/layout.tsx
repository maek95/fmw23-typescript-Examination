import NavBar from "@/components/NavBar";

export default function CartLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    // bg-[#F4F3F1F0]
    <div className=" bg-[#EEEEEE] min-h-dvh box-border ">{children}</div>
  );
}
