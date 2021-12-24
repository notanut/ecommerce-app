import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { CountProductProvider } from "./components/contexts/CountProductContext"

function App() {
  return (
    <CountProductProvider>
      <Header />
      <Main />
    </CountProductProvider>
  );
}

export default App;
