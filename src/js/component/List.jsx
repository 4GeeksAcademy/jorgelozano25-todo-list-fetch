import React from "react";

// el values y el children estas haciendo un dirupturin, pero pdrias poner solo props en vez de values y children pero luego tendrias
// que añadir props.values.map y props.children
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