
import Article from "./Article"; 

function ArticleList() {
  const blogPosts = [
    { id: 1, title: "First Post", date: "January 1, 2024", preview: "This is the preview of the first post." },
    { id: 2, title: "Second Post", date: "January 5, 2024", preview: "Here's what you need to know about the second post." },
    { id: 3, title: "Third Post", date: "January 10, 2024", preview: "Details about the third post are here." }
  ];

  return (
    <main>
      {blogPosts.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
        />
      ))}
    </main>
  );
}

export default ArticleList;
