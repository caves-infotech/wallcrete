export default function Home() {
  return (
    <div className="bg-[#FEFAF6] min-h-screen flex flex-col items-center justify-center">
      <header className="w-full bg-gradient-to-r from-red-500 to-yellow-500 p-8 shadow-xl rounded-b-lg">
        <h1 className="text-5xl font-extrabold text-center text-white tracking-wider drop-shadow-lg">
          Welcome to wallcrete !!!
        </h1>
        <p className="text-center text-white text-lg mt-2 drop-shadow-sm">
          Designing the future of architecture
        </p>
      </header>

      <main className="flex flex-col items-center justify-center mt-12 space-y-6">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg text-center">
          <p className="text-xl font-semibold text-gray-800">
            We are launching soon...
          </p>
          <p className="text-gray-600 mt-4">
            Stay tuned for updates and be the first to experience something new
            and innovative.
          </p>
        </div>
      </main>
    </div>
  );
}
