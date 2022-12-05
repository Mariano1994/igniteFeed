// Components Importation
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// Styles Importation
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/83432409?v=4",
      name: "Mariano Capiliku",
      role: "Front-End Developer @PCS NET",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉jane.design/doctorcare " },
    ],
    publisedAt: new Date("2022-12-20 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/66078558?v=4",
      name: "Misael Lopes",
      role: "Back-End Developer @PCS NET",
    },

    content: [
      { type: "paragraph", content: "Falaaa Devv 👋 " },
      {
        type: "paragraph",
        content: "Ola familia Dev",
      },
      { type: "link", content: "👉jane.design/doctorcare " },
    ],
    publisedAt: new Date("2022-12-06 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.werapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publisedAt={post.publisedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
