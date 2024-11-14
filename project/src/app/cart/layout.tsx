import NavBar from "@/components/NavBar";

export default function CartLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F4F3F1F0]  min-h-dvh box-border ">{children}</div>
  );
}
