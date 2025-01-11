export default function Home() {
  return (
    <div>
      <div className="lg:col-span-2">
        <div className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="mb-10">
              <h2 className="my-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Tips
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                このブログは、役立つツール置き場です。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:gap-6 lg:grid-cols-1 xl:grid-cols-1 xl:gap-8"></div>
            <div className="grid py-5 lg:grid-cols-2 md:grid-cols-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
