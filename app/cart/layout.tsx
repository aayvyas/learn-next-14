export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/3">
        <div className="bg-slate-200 rounded-3xl h-96 w-full m-5 flex flex-col items-center">
          <p className="mt-2 text-gray-700 justify-center font-bold">
            Cart Summary
          </p>
          <div className="w-11/12 h-full mb-8 rounded-3xl p-2 mx-5 mt-2 bg-white "></div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
