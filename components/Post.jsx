import Link from 'next/link';
import React from 'react';

const Post = ({post}) => {
    const {title,id} = post;
    
    return (
        <div className='w-25 border p-3' style={{cursor:'pointer',}}>
            <Link href={`/posts/${id}`}>
                <h1>{title} </h1>
            </Link>
        </div>
    );
};

export default Post;