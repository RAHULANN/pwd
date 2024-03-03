import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./scroll.css";
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const LeftArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);
  return (
    <Box
      disabled={isFirstItemVisible}
      onClick={() => {
        visibility.scrollPrev("smooth");
      }}
    >
      Left
    </Box>
  );
};

const RightArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);
  return (
    <Box
      disabled={isLastItemVisible}
      onClick={() => {
        visibility.scrollNext("smooth");
      }}
      className="arrow-right"
    >
      {">"}
    </Box>
  );
};

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.useIsVisible(itemId, true);

  return (
    <div
      onClick={() => onClick(visibility)}
      className="react-horizontal-scrolling-menu--item"
    >
      <Button
        // className="card"
        sx={{
          color: "#FFFFFF",
          // height: "100px",
        }}
      >
        {" "}
        <Typography variant="button"> {title}</Typography>
      </Button>{" "}
    </div>
  );
}
function ScrollTab() {
  const [items, setItems] = useState([
    "Cooling tower chemicals",
    "Boiler Chemicals",
    "AHU Descaling Chemicals",
    "Descaling Chemicals",
    "Chiller Tower Chemicals",
    "Fireside Additives",
    "R.O. Antiscalants and Cleaners",
  ]);
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);
      console.log(itemSelected);
      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu
      scrollContainerClassName={"test"}
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {items.map((id, index) => (
        <Card
          itemId={index} // NOTE: itemId is required for track items
          title={id}
          key={index}
          onClick={handleClick(index)}
          selected={isItemSelected(index)}
        />
      ))}
    </ScrollMenu>
  );
}

export default ScrollTab;
