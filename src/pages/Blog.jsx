export function Blog() {
  const posts = [
    {
      id: 1,
      title: "Understanding Jane Austen's Impact on Literature",
      excerpt: "Explore how Jane Austen's works have influenced modern literature and continue to resonate with readers today.",
      author: "Emily Wilson",
      date: "March 15, 2024",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "The Evolution of Gothic Literature",
      excerpt: "A deep dive into the dark and mysterious world of Gothic literature, from its origins to modern interpretations.",
      author: "Michael Roberts",
      date: "March 12, 2024",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-8 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold">Literary Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div>
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}