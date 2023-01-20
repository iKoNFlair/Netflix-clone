import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "https://api.themoviedb.org/3";
  axios.defaults.params = {
    api_key: "d3e77356e03ee5d6056a84d923d13f7e",
  };

  return (
    <div>
      <Nav />
      <Header  />
      <Content />
    </div>
  );
};

export default App;
