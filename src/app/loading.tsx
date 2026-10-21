export default function Loading() {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm font-medium text-slate-500">
        Loading directory records...
      </p>
    </div>
  );
}
