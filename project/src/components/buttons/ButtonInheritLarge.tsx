export default function ButtonInheritLarge({
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
      className={`w-full rounded-sm border-[#F4F3F1F0] border-solid h-20 ${
        disabled ? "bg-inherit/50" : "bg-inherit"
      } hover:bg-[#353131] text-[#F4F3F1F0] cursor-pointer box-border`}
    >
      <h3 className="text-inherit">{title}</h3>
    </button>
  );
}
