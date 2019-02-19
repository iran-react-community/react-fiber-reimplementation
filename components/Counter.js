import { myReact, Component } from "../myReact";

export default class NavbarItems extends Component {
  render() {
    return <button onClick={this.props.counterHandle}>Click</button>;
  }
}
