type TableOfContentsProps = {
  items: Array<{
    id: string;
    label: string;
  }>;
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="space-y-3">
      <h3 className="font-sans text-xl font-semibold text-slate-900">In dit artikel</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-md border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-[0.99]"
            >
              <span className="block font-sans text-xs font-semibold text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block font-sans text-sm font-medium text-slate-700">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
