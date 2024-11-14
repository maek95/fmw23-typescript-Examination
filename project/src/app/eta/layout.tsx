import NavBar from "@/components/NavBar";

// NOT USING, USING EtaModal.tsx in components instead!!!
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
