export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="w-12 h-px bg-accent-muted" />
    </div>
  );
}
