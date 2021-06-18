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

  const me = {
    name: "Puteáni-Holl Ákos",
    picture:
      "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/199716171_3812342788894365_6007568025747142072_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Jy2kBW4gC_oAX9D0lwp&tn=AqadETK8Pk2iXntr&_nc_ht=scontent-vie1-1.xx&oh=c0e43c052c32a267be2fa45f7da7ee19&oe=60D00E06",
  };
  return (
    <div className="app">
      {!user ? (
        <Login username={getUsername} />
      ) : (
        <>
          <Header me={me} />
          <div className="app__body">
            <Sidebar me={me} />
            <Feed me={me} />
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
