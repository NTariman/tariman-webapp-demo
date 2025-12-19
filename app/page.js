import Image from "next/image";

export default function TutorialBlog() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TailwindCSS Blog</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#intro" className="hover:text-gray-700 transition">Introduction</a>
            <a href="#additional" className="hover:text-gray-700 transition">Additional Info</a>
            <a href="#buttons" className="hover:text-gray-700 transition">Buttons</a>
            <a href="#colors" className="hover:text-gray-700 transition">Colors</a>
            <a href="#typography" className="hover:text-gray-700 transition">Typography</a>
            <a href="#layouts" className="hover:text-gray-700 transition">Layouts</a>
            <a href="#images" className="hover:text-gray-700 transition">Images</a>
            <a href="#contact" className="hover:text-gray-700 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 px-6 border-b border-gray-200">
        <h1 className="text-5xl font-extrabold mb-4">How to Use Tailwind CSS</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          A clean, minimalist tutorial blog demonstrating Tailwind CSS components, layouts, and typography.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://tailwindcss.com/docs"
            className="bg-black text-white py-2 px-6 rounded transition hover:bg-gray-800"
          >
            Official Docs
          </a>
          <a
            href="https://nextjs.org/learn"
            className="bg-gray-200 text-black py-2 px-6 rounded transition hover:bg-gray-300"
          >
            Next.js Learn
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-16 py-16">

        {/* Introduction */}
        <section id="intro" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-800 mb-2">
            Tailwind CSS is a utility-first CSS framework that allows you to build responsive designs quickly.
          </p>
          <p className="text-gray-800">
            Instead of writing custom CSS, you use pre-defined classes like <code className="bg-gray-100 px-1 rounded">bg-black</code>, <code className="bg-gray-100 px-1 rounded">text-white</code>, and <code className="bg-gray-100 px-1 rounded">rounded-lg</code> directly in your markup.
          </p>
        </section>

        {/* Additional Info Section */}
        <section id="additional" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Additional Info</h2>
          <p className="text-gray-800 mb-2">
            Tailwind CSS is highly versatile. You can create complex layouts and reusable components without writing custom CSS.
          </p>
          <p className="text-gray-800 mb-2">
            Its utility-first approach allows for consistent styling across projects, faster prototyping, and responsive designs with minimal effort.
          </p>
          <p className="text-gray-800">
            Many developers use Tailwind to rapidly build production-ready UIs, integrate dark mode, and maintain a clean, scalable codebase.
          </p>
        </section>

        {/* Buttons */}
        <section id="buttons" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Buttons</h2>
          <p className="text-gray-800 mb-4">
            Tailwind allows easy creation of buttons with different styles and hover effects.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white py-2 px-4 rounded transition hover:bg-gray-800">Primary</button>
            <button className="border border-black text-black py-2 px-4 rounded transition hover:bg-black hover:text-white">Outline</button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded transition hover:bg-black">Dark Button</button>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Typography</h2>
          <p className="text-gray-800 mb-4">Tailwind lets you control font sizes, weights, and spacing easily.</p>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-bold">Heading 2</h2>
            <h3 className="text-2xl font-bold">Heading 3</h3>
            <p className="text-lg text-gray-700">Regular paragraph text using text-lg.</p>
            <p className="font-bold">Bold text example</p>
            <p className="italic">Italic text example</p>
          </div>
        </section>

        {/* Layouts */}
        <section id="layouts" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Layouts</h2>
          <h3 className="text-xl font-semibold mb-4">Grid Layout</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center font-semibold">Card 1</div>
            <div className="bg-gray-100 p-6 rounded-lg text-center font-semibold">Card 2</div>
            <div className="bg-gray-100 p-6 rounded-lg text-center font-semibold">Card 3</div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Flex Layout</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-black text-white p-4 rounded-lg">Item 1</div>
            <div className="bg-gray-800 text-white p-4 rounded-lg">Item 2</div>
            <div className="bg-gray-700 text-white p-4 rounded-lg">Item 3</div>
          </div>
        </section>

        {/* Images */}
        <section id="images" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Images</h2>
          <p className="text-gray-800 mb-4">You can style images with rounded corners or shadows for a clean look.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://via.placeholder.com/400x300/000000/FFFFFF?text=Image+1" className="w-full rounded-lg shadow" />
            <img src="https://via.placeholder.com/400x300/333333/FFFFFF?text=Image+2" className="w-full rounded-lg shadow" />
            <img src="https://via.placeholder.com/400x300/555555/FFFFFF?text=Image+3" className="w-full rounded-lg shadow" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-800 mb-6">
            Have questions or want to get in touch? Fill out the form below and we will respond as soon as possible.
          </p>
          <form className="space-y-4 max-w-md">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                rows={4}
                placeholder="Your Message"
              />
            </div>
            <button className="bg-black text-white py-2 px-6 rounded transition hover:bg-gray-800">
              Send Message
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold">Built with Next.js and Tailwind CSS</p>
          <p className="text-sm mt-2">@Tariman_Nathaniel 2025. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
