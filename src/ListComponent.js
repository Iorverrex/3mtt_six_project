import React from "react";

//2. Create a Reusable list Component Develop a reusable list Component that takes in an array of items as props. Render each item dynamically inside the list. Ensure flexibility by allowing customization through props (e.g passing a custom render function for list items)
const ListComponent = ({ items, renderItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
export default ListComponent;