import Article from "./Article";

function ArticleList({posts}){
    return(
        <main>
            {posts.map((post)=>(
                <Article 
                id={post.id}
                title={post.title}
                preview={post.preview}
                minutes={post.minutes}   
                />
            ))}
            
        </main>
    )
}

export default ArticleList;
