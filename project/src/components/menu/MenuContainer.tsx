import { ReactNode } from "react";

export default function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <section className="w-full box-border rounded-xl border-none bg-[#605858] flex flex-col ">
      {" "}
      {/* place py-2 here as well? */}
      {children}
    </section>
  );
}
