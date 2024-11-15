export default function ButtonDarkLarge({
  title,
  onClick,
  disabled = false,
}: {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full rounded-sm border-[#353131] border-solid h-20 ${
        disabled ? "bg-[#353131]/50" : "bg-[#353131]"
      } hover:bg-inherit text-[#F4F3F1F0] //hover:text-[#353131] cursor-pointer box-border`}
    >
      <h3 className="text-inherit">{title}</h3>
    </button>
  );
}
