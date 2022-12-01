import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <Post
        title="DeveTeam"
        author="Mariano Capiliku"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ea accusamus facere aut rem reprehenderit nam nesciunt explicabo fuga. Autem amet neque sunt perspiciatis saepe molestiae assumenda cum minus ipsam?"
      />

      <Post
        title="Area da Qualidade"
        author="Nery Capiliku"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
      />
    </>
  );
}
