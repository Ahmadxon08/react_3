import  { Component } from "react";
import Home from './components/home/Home'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './sass/Main.scss';

import Group from "./components/group/Company";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false, // Dark rejimini boshlash holati
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
      <div className={isDarkMode ? "dark" : ""}>
        <Header toggleDarkMode={this.toggleDarkMode} />
        <Home />
        <Group />
        <Footer />
      </div>
    );
  }
}

export default App;
