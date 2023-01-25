import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar.js";

import { Header } from "./components/Header.jsx";
import { Post } from "./components/Post.jsx";

interface Posts {
   id:number;
   author: {
    avatarUrl:string;
    name:string;
    role:string;
   }
   content: {
    type: 'paragraph' | 'link';
    content: string;
   }[]
   publishedAt: Date;
}


const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/raferdev.png",
      name: "Rafael Fernandes",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-01-19 14:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/raferdev.png",
      name: "Rafael Fernandes",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-01-19 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
