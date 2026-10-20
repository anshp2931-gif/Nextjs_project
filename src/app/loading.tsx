export default function Loading() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center animate-in">
      <div className="glass-spinner mb-5" />
      <p className="text-sm font-medium text-dark-400">
        Loading directory records...
      </p>
    </div>
  );
}
