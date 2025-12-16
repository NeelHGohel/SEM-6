export default function Page() {
  return (
    <main className="min-h-[calc(100vh-160px)] bg-gray-50 px-6 py-12">
      
      {/* Page Header */}
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Welcome to Our Platform
        </h1>
        <p className="mt-4 text-gray-600">
          Build fast, modern, and scalable applications using Next.js and Tailwind CSS.
        </p>
      </section>

      {/* Content Section */}
      <section className="mx-auto mt-12 max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Fast Performance
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Optimized for speed and SEO using Next.js App Router.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Responsive Design
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Mobile-first layout powered by Tailwind CSS.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Scalable Architecture
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Clean file structure with reusable components.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
