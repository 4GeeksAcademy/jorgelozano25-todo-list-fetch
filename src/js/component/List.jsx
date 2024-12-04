import React from "react";

const List = ({ values, children }) => {
  return (
    <>
      <ul className="m-auto">
        {values.map(children)}
      </ul>
    </>

  )
}

export default List;