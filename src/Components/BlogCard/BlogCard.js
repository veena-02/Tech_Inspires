import React from 'react'
import './BlogCard.css';

function BlogCard() {
    return (
        <div style={{display: 'flex',justifyContent: 'center'}}>
            <div className="blog_container">
                <div className="blog_heading">
                    <h3 style={{height:'90%',width:'90%'}}>Lorum IPsum Lorum IPsumLorum IPsum</h3>
                </div>
            <div>
                <p className="blog_text">This is my first blog</p>
            </div>
            </div>
        </div>
    )
}

export default BlogCard
