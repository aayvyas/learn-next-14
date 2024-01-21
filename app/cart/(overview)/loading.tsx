const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
const Loading = () => {
  return (
    <div
      className={`${shimmer} w-full h-full bg-slate-100 p-4 rounded-2xl m-2`}
    >
      Loading...
    </div>
  );
};

export default Loading;
