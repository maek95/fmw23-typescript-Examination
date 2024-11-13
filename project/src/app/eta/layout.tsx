import NavBar from "@/components/NavBar";

export default function EtaLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#605858]">
      <NavBar />
      {children}
    </div>
  );
}
