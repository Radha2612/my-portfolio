import Image from 'next/image';

const blogPosts = [
  {
    title: 'Understanding React Hooks',
    description: 'A deep dive into React hooks, how they work, and when to use them in your projects.',
    link: 'https://legacy.reactjs.org/docs/hooks-intro.html',
  },
  {
    title: 'Introduction to Next.js',
    description: 'An introductory guide to Next.js, its features, and how to get started with this powerful framework.',
    link: 'https://nextjs.org/learn',
  },
  // Add more blog posts as needed
];

const Home = () => {
  return (
    <div className="min-h-screen p-4">

      <main className="mt-10">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <a
                  href={post.link}
                  className="text-gray-700 hover:text-gray-900 transition-colors mt-4 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
