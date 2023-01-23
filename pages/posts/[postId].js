import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PostsServices from "../../services/postsServices";

const PostId = () => {
    const router = useRouter();
    const postId = router.query.postId
    const [singlePost, setSinglePost] = useState([]);

    const getSinglePost = async() =>{
        const res = await PostsServices.getSinglePost(postId)
        setSinglePost(res.data);
        console.log(res);
      };
      useEffect( ()=>{
        getSinglePost();
      } ,[]);

    return (
        <div className='w-50 border p-3'>
            <h4>{singlePost.id}</h4>
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
        </div>
    );
};
export default PostId;