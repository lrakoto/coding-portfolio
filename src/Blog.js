import React from 'react';

function Blog(props) {
    let blogArray = props.posts.map((p, idx) => {
        return(
            <div>
                <h1>{p.title}</h1>
                <p>{p.content}</p>
            </div>
        )
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>Blog</h1>
                    <p>Welcome to the Blog page</p>
                    {blogArray}
                    
                </div>
            </div>
        </div>
    )
}

export default Blog;