// single selection
// multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const [enableMultiSeletion, setEnableMultiSelection] = useState(false);

  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(selectedId) {
    {
      setSelected(selected === selectedId ? null : selectedId);
    }
  }

  function handleMultiSelection(selectedId) {
    let copyMultile = [...multiple];
    const findCurrentIndex = copyMultile.indexOf(selectedId);

    console.log(findCurrentIndex);

    if (findCurrentIndex === -1) copyMultile.push(selectedId);
    else copyMultile.splice(findCurrentIndex, 1);

    setMultiple(copyMultile);

    // console.log(copyMultile)
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSeletion)}>
        {enableMultiSeletion
          ? "Disable MultiSelection"
          : "Enable MultiSelection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() =>
                  enableMultiSeletion
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSeletion
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div class="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
