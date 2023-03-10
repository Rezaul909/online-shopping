import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import MainLayout from '../components/MainLayout'
import Post from '../components/Post'
import PostsServices from '../services/postsServices'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [posts, setPosts] = useState([]);
  // console.log(posts, 'myData');


  // const handleHit = async() =>{
  //   const data = {
  //     user_name: 'Rezaul',
  //     password: '123'
  //   }
  //   const res = await PostsServices.createPosts(data);
  //   // console.log(res, 'response');
  // };

  const getAllPost = async() =>{
    const res = await PostsServices.getAllPost()
    setPosts(res.data);
    // console.log(res);
  };

  useEffect( ()=>{
    getAllPost();
  } ,[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <div className='d-flex justify-center flex-wrap gap-4'>
          {
            posts.map(post => <Post key={post.id} post={post} ></Post>)
          }
        </div> */}
        <MainLayout>
          <h3>This is Home</h3>
        </MainLayout>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
