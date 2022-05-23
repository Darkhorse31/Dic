import "./App.scss";
import CustomerDetail from "./component/CustomerDetail";
import { Forget } from "./component/Forgetpage/Forget";
import Home from "./component/Home";
import { Landing } from "./component/Main";

function App() {
  return (
    <div className="App">
      {/* <Landing/> */}
      <Home />
      {/* <CustomerDetail/> */}
    </div>
  );
}

export default App;
