import React from 'react'
import BlogCard from './../BlogCard/BlogCard';

const Blogs=()=> {
    return (
        <div style={{height:'300vh',width:'100vw', backgroundColor:'white'}}>
           <h1 style={{textAlign:"center "}}>Blogs</h1>
           <div className="add_blog_btn" >+</div>
            <BlogCard />
        </div>
    )
}
export default Blogs;