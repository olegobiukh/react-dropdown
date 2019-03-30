import React from "react";
import classNames from "classnames";

const Item = ({ i, items, item, onSelected }) => {
  const ItemClasses = classNames({
    Select__item: true,
    Select__footer: items[items.length - 1] === item
  });

  return (
    <div key={i} className={ItemClasses} onClick={() => onSelected(item)}>
      {item === "select"
        ? "Dropdown"
        : item.replace(item[0], item[0].toUpperCase())}
    </div>
  );
};

export default Item;
