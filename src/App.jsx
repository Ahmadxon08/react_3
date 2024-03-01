import { Component } from "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Group from "./components/group/Company";
import "./sass/Main.scss";
import Paper from "./components/certy/Paper";
import Our from "./components/our/Our";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false, 
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;
    return (
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Header toggleDarkMode={this.toggleDarkMode} isDarkMode={isDarkMode} />
        <Home isDarkMode={isDarkMode} />
        <Group isDarkMode={isDarkMode} />
        <Paper />
        <Our />
        <Footer isDarkMode={isDarkMode} />
      </div>
    );
  }
}

export default App;
