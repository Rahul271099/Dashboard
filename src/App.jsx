import "./App.css";
import SidebarComponent from "./components/Sidebar/Sidebar.Component";
import MainComponent from "./components/main_component/MainComponent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <SidebarComponent />
        <MainComponent />
      </div>
    </>
  );
}

export default App;
