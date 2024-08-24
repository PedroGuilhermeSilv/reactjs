import { Header } from "./components/Header";
import { Author, Content, Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

interface PostProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      name: "Pedro Guilherme",
      avatarUrl: "https://github.com/PedroGuilhermeSilv.png",
      role: "FullStack Jr Developer",
    },
    publishedAt: new Date("2024-05-10"),
    content: [
      { type: "text", value: "Fala galera👋" },
      {
        type: "text",
        value: "Acabi de subir mais um projeto no meu portifolio",
      },
      { type: "link", value: "👉 pedro.fullstack" },
      { type: "link", value: "novoprojetos" },
      { type: "link", value: "novoprojeto" },
    ],
  },

  {
    id: 2,
    author: {
      name: "Lucas Guilherme",
      avatarUrl: "https://github.com/diego3g.png",
      role: "FullStack Developer",
    },
    publishedAt: new Date("2024-08-13"),
    content: [
      { type: "text", value: "Fala galera👋" },
      {
        type: "text",
        value: "Acabi de subir mais um projeto no meu portifolio",
      },
      { type: "link", value: "👉 deigo.fullstack" },
      { type: "link", value: "#novoprojetos" },
      { type: "link", value: "#novoprojeto" },
    ],
  },
];

export function App() {
  console.log(styles);
  return (
    <>
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
    </>
  );
}
