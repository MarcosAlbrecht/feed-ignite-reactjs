import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'

import styles from './App.module.css';

//author: {avatar_url: "", name:"", role:"", }
//publishedAt: Date
//content
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/MarcosAlbrecht.png',
      name: 'Marcos Roberto Albrecht',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, illum? Perspiciatis eaque sunt recusandae ipsum est doloribus vel veritatis magnam. '}, 
      {type: 'paragraph', content: 'Sunt eaque eos magnam nisi? Tempora repudiandae reprehenderit facere reiciendis.'},
      
      {type: 'link', content: 'marcos.design'},
    ],
    publishedAt: new Date('2023-01-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/MarcosAlbrecht.png',
      name: 'Joao Dev',
      role: 'Owner'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, illum? Perspiciatis eaque sunt recusandae ipsum est doloribus vel veritatis magnam. '}, 
      {type: 'paragraph', content: 'Sunt eaque eos magnam nisi? Tempora repudiandae reprehenderit facere reiciendis.'},
      
      {type: 'link', content: 'marcos.design'},
    ],
    publishedAt: new Date('2023-01-11 15:00:00')
  },
]

function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return( 
              <Post author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

