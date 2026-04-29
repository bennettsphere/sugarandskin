type Props = {
  name: string;
  price: string;
  duration: string;
};

export function ServiceRow({ name, price, duration }: Props) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-4 border-b border-[var(--ss-line)] break-inside-avoid">
      <p className="text-soft-black flex-1 leading-snug">{name}</p>
      <p className="shrink-0 text-right whitespace-nowrap">
        <span className="text-soft-black font-medium">{price}</span>
        <span className="text-soft-black/55 ml-2 text-sm">· {duration}</span>
      </p>
    </div>
  );
}
