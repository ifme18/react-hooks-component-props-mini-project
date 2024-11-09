import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);


function App() {
  const aboutText = "Welcome to my blog where I share insights and stories!";
  const imageUrl = "https://via.placeholder.com/215";
  const blogName = "My Awesome Blog";
  return (
    <div className="App">
       <Header name ={blogName} />
       <About image={imageUrl}/>
       <About about={aboutText}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
