import { Component } from "react";

// import searchImages from '../services/index';
import Searchbar from './Searchbar';



export class App extends Component {
  state = {
    page: 1,
    name: '',
    images: [],
  };

  onSubmit = nameImg => {
    this.setState({
      name: nameImg,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
      </div>
    );
  }
  
};
