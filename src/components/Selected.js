import React from "react";

import classNames from "classnames";
import { SelectConsumer } from "../SelectContext";

const Selected = ({ toggle }) => {
  const IconClasses = classNames({
    arrow: true,
    down: toggle,
    up: !toggle
  });

  return (
    <SelectConsumer>
      {({ selected, ontoggleList }) => (
        <div className="Selected" onClick={ontoggleList}>
          {selected === "select"
            ? "Dropdown"
            : selected.replace(selected[0], selected[0].toUpperCase())}
          <i className={IconClasses} />
        </div>
      )}
    </SelectConsumer>
  );
};

export default Selected;
