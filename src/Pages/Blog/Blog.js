import React from 'react';
import Blogs from './Blogs';

const Blog = () => {
    const blogs = [
        {
            id:'1',
            question: 'What are the different ways to manage a state in a React application?',
            ans:'There are several other ways to manage state​s in React, including the use of: Hooks. React Context API. Apollo Link State.',
        },
        {
            id:'2',
            question: 'How does prototypical inheritance work?',
            ans:'There are several other ways to manage state​s in React, including the use of: Hooks. React Context API. Apollo Link State.',
        },
        {
            id:'3',
            question: 'What is a unit test? Why should we write unit tests?',
            ans:'There are several other ways to manage state​s in React, including the use of: Hooks. React Context API. Apollo Link State.',
        },
        {
            id:'4',
            question: 'React vs. Angular vs. Vue?',
            ans:'There are several other ways to manage state​s in React, including the use of: Hooks. React Context API. Apollo Link State.',
        },
    ]
    return (
        <div>
            {
                blogs.map(blog=><Blogs
                key={blog.id}
                blog={blog}
                ></Blogs>)
            }
        </div>
    );
};

export default Blog;