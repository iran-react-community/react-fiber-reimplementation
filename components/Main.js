import { myReact, Component } from "../myReact";
import Counter from "./Counter";
import "../index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  counterHandle() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }
  render() {
    return (
      <div className="main">
        <Counter counterHandle={this.counterHandle.bind(this)} />
        <h3
          style={{
            fontSize: "5rem",
            textAlign: "center",
            marginTop: "2rem"
          }}
        >
          {this.props.title} <br /> COUNT: {this.state.count}
        </h3>
      </div>
    );
  }
}
