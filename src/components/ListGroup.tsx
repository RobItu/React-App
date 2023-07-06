import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [indexValue, setIndexValue] = useState(-1);

  const selectedIndex = 0;

  const message = items.length === 0 ? <p>No Item Found</p> : null;
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              indexValue === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setIndexValue(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
function sayHi() {
  <h1>Hi</h1>;
}
export default ListGroup;
