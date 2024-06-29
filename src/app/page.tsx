import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <section className="w-full max-w-5xl text-center mb-12">
        <Image
          src="/profile.jpeg"
          alt="Your Image Description"
          width={500}
          height={200}
          className="mx-auto mb-6 rounded-full shadow-lg border-4 border-yellow-500 hover:shadow-xl hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold mb-2">I am Radha, an aspiring <span className="text-yellow-500"> AI Engineer</span></h1>
      </section>

      <section className="w-full max-w-5xl text-center bg-gray-100 p-8 rounded-lg mb-12 hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-semibold mb-4">Programming Languages</h2>
        <p className="text-lg leading-relaxed">
          I'm comfortable with programming languages C, Python, Java. Open to learn new languages and able to switch between programming languages quickly.
        </p>
      </section>

      <section className="w-full max-w-5xl text-center bg-gray-100 p-8 rounded-lg mb-12 hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-semibold mb-4">Technologies</h2>
        <p className="text-lg leading-relaxed">
          I'm familiar with HTML, CSS, JavaScript, Git. I am flexible and adaptive in learning new technologies.
        </p>
      </section>

      <section className="w-full max-w-5xl text-center bg-gray-100 p-8 rounded-lg mb-12 hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-lg leading-relaxed mb-4">
          I have done a project Using HTML,Javascript and CSS. It is <span className="text-yellow-500">Shopping Cart</span>.
        </p>
        <a href="/projects" className="inline-block mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors">
          See more projects
        </a>
      </section>

      <section className="w-full max-w-5xl text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Want to Contact?</h2>
        <p className="text-lg leading-relaxed">
          Feel free to reach out to me via email at radhakottapalli2003@gmail.com or connect with me on LinkedIn.
        </p>
      </section>
        
    </main>
  );
}
