import React from "react";

import Item from "./Item";
import { SelectConsumer } from "../SelectContext";

const Items = () => {
  return (
    <SelectConsumer>
      {({ selected, items, toggle, onSelected }) => {
        return (
          <div className={toggle ? "Show" : "Hide"}>
            {items.map((item, i) => {
              if (item !== selected) {
                return (
                  <Item
                    key={i}
                    items={items}
                    item={item}
                    i={i}
                    onSelected={onSelected}
                  />
                );
              }
              return;
            })}
          </div>
        );
      }}
    </SelectConsumer>
  );
};

export default Items;
