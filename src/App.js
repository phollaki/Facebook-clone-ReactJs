import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();

  const getUsername = () => {
    console.log("App réteg");
  };
  //user

  return (
    <div className="app">
      {!user ? (
        <Login username={getUsername} />
      ) : (
        <>
          <Header me={user} />
          <div className="app__body">
            <Sidebar me={user} />
            <Feed me={user} />
            <Chat />
          </div>
        </>
      )}
      {/*Header*/}
      {/*Header*/}
      {/*Header*/}
    </div>
  );
}

export default App;
