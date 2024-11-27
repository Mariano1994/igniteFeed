import { Toaster } from "sonner";
import "./App.css";
import Header from "./components/Header";
import MainContentWrapper from "./components/MainContentWrapper";

function App() {
  return (
    <>
      <div className=" antialiased font-app">
        <Toaster richColors />
        <Header />
        <MainContentWrapper />
      </div>
    </>
  );
}

export default App;
