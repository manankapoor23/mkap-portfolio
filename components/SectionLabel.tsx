export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="mono text-[0.7rem] tracking-[0.2em] uppercase text-muted">{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
