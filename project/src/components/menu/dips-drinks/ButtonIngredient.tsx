export default function ButtonIngredient({ title }: { title: string }) {
  return (
    <button className="bg-[#F1F0EC3D] border-none p-2 rounded-md">
      {" "}
      {/* selected button color: #353131 */}
      <p>{title}</p>
    </button>
  );
}
