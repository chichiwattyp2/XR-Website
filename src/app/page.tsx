export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to XR Website
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your Extended Reality experience starts here
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/experience"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Start XR Experience
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
