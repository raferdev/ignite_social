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
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw",
      name: "Rafael Fernandes",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Helloo guys 👋" },
      {
        type: "paragraph",
        content:
          "I'm trainning my react basis, have a nice day 🚀",
      },
      {
        type: "link",
        content: "https://raferdev.com",
      },
    ],
    publishedAt: new Date("2023-01-19 14:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw",
      name: "Rafael Fernandes",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "It's me again 👋" },
      {
        type: "paragraph",
        content:
          "Just remember to drink water please. This is the post. 🥤",
      },
      {
        type: "link",
        content: "https://raferdev.com",
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
