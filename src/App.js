import React from "react";
import Items from "./components/Items";
import Selected from "./components/Selected";
import { SelectProvider } from "./SelectContext";

const items = ["select", "delete", "rename", "preview", "separated link"];

class App extends React.Component {
  state = {
    selected: "select",
    toggle: false,
    items
  };

  toggleList = () => {
    const { toggle } = this.state;

    this.setState({ toggle: !toggle });
  };

  getSelected = item => {
    const { toggle } = this.state;

    this.setState({ selected: item, toggle: !toggle });
  };

  render() {
    const { selected, items, toggle } = this.state;
    return (
      <SelectProvider
        value={{
          items,
          toggle,
          selected,
          onSelected: this.getSelected,
          ontoggleList: this.toggleList
        }}
      >
        <div className="Select">
          <Selected toggle={toggle} />
          <Items />
        </div>
      </SelectProvider>
    );
  }
}

export default App;
