import axios from "axios";

const PostsServices = {};

PostsServices.getAllPost = async() =>{
    const url = '/posts'
    const res = await axios.get(url)
    return res;   
}
PostsServices.getSinglePost = async(id) =>{
    const url = `/posts/${id}`
    const res = await axios.get(url)
    return res;   
}

export default PostsServices;