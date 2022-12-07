// Components Importation
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// Styles Importation
import "./global.css";
import styles from "./App.module.css";
import { DeleteComment } from "./components/DeleteComment";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/83432409?v=4",
      name: "Mariano Capiliku",
      role: "Front-End Developer @Pc's Net",
    },

    content: [
      { type: "paragraph", contentComment: "Hi everyone 👋 " },
      {
        type: "paragraph",
        contentComment:
          "Leadership is behavioral, not positional. The capacity to integrate, motivate, and mobilize others to bring a common aspiration to life is what leadership is all about, not holding positions of formal authority",
      },
      { type: "paragraph", contentComment: "- Nelson Mandela" },
      { type: "link", contentComment: "👉@marianocapiliku" },
    ],
    publisedAt: new Date("2022-12-2 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/66078558?v=4",
      name: "Misael Lopes",
      role: "Back-End Developer @Pc's Net",
    },

    content: [
      { type: "paragraph", contentComment: "Olá famila Dev 👋 " },
      { type: "paragraph", contentComment: "Avisoo 😱 " },
      {
        type: "paragraph",
        contentComment:
          "O evento que consegue deitar abaixo plataformas mesmo quando avisadas pra escalar seus serviços está de volta, bora pra mais uma semana rumo ao next level",
      },
      { type: "link", contentComment: "@Misael_Lopes " },
    ],
    publisedAt: new Date("2022-12-06 20:00:00"),
  },

  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },

    content: [
      { type: "paragraph", contentComment: "Fala Dev 👋 " },
      {
        type: "paragraph",
        contentComment:
          "Linkedin, Netflix, Uber, IBM…sabe o que essas empresas têm em comum?Elas usam Node.js em suas aplicações.",
      },
      {
        type: "paragraph",
        contentComment:
          "Uma tecnologia com poder de performance, produtividade e escala gigantesca, muito valorizada no mercado da programação e que pode fazer você decolar na programação em 2023.",
      },
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
                key={post.id}
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
