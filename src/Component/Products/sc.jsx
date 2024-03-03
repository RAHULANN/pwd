import React, { useState, useEffect, useRef } from "react";
import "./sc.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Sc({ currentState, prevState, children }) {
  const menuRef = useRef(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [startItemIndex, setStartItemIndex] = useState(0);
  const visibleItemCount = 4; // Number of visible items in the menu

  console.log(startItemIndex);
  useEffect(() => {
    const menu = menuRef.current;
    const menuItems = menu.querySelectorAll(".menu-item");

    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        setSelectedItemIndex(index);
      });
    });

    menu.addEventListener("scroll", () => {
      const start = Math.floor(menu.scrollLeft / menu.offsetWidth);
      setStartItemIndex(start);
    });

    return () => {
      menuItems.forEach((item, index) => {
        item.removeEventListener("click", () => {
          setSelectedItemIndex(index);
        });
      });
      menu.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const menuItems = menu.querySelectorAll(".menu-item");

    const boundingClientRects = [...menuItems].map((item) =>
      item.getBoundingClientRect()
    );
    const currentScroll = menu.scrollLeft + menu.offsetWidth / 2;
    const currentIndex = boundingClientRects.findIndex(
      (rect) => rect.left <= currentScroll && rect.right >= currentScroll
    );
    console.log(currentIndex);
    if (currentIndex !== -1) {
      setSelectedItemIndex(currentIndex);
    }
  }, [startItemIndex]);

  useEffect(() => {
    const menu = menuRef.current;
    const totalItems = 7; // Total number of items in the menu
    const itemWidth = menu.offsetWidth / visibleItemCount;
    let newStartItemIndex = currentState[currentState.length - 1] > 3 ? 3 : 0;

    console.log("startItemIndex", startItemIndex);
    // console.log("newStartItemIndex", currentState[currentState.length - 1]);
    console.log("prevState", prevState);
    console.log("newStartItemIndex", newStartItemIndex);

    // Ensure newStartItemIndex stays within bounds
    newStartItemIndex = Math.max(
      0,
      Math.min(totalItems - visibleItemCount, newStartItemIndex)
    );

    // Calculate target scroll position based on newStartItemIndex
    const targetScroll = newStartItemIndex * itemWidth;

    // Scroll to the target position
    menu.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    // Update startItemIndex
    console.log(newStartItemIndex);
    setStartItemIndex(newStartItemIndex);
  }, [currentState]);

  const scrollToItem = (index) => {
    const menu = menuRef.current;
    const menuItems = menu.querySelectorAll(".menu-item");

    if (index < 0 || index >= menuItems.length) {
      return;
    }
    const selectedItem = menuItems[index];
    setSelectedItemIndex(index);
    selectedItem.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleArrowClick = (direction) => {
    const menu = menuRef.current;
    const totalItems = 7; // Total number of items in the menu
    const itemWidth = menu.offsetWidth / visibleItemCount;
    let newStartItemIndex = startItemIndex + direction;

    // Ensure newStartItemIndex stays within bounds
    newStartItemIndex = Math.max(
      0,
      Math.min(totalItems - visibleItemCount, newStartItemIndex)
    );

    // Calculate target scroll position based on newStartItemIndex
    const targetScroll = newStartItemIndex * itemWidth;

    // Scroll to the target position
    menu.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    // Update startItemIndex
    console.log(newStartItemIndex);
    setStartItemIndex(newStartItemIndex);
  };

  const menuItems = [];
  for (
    let i = startItemIndex;
    i < Math.min(startItemIndex + visibleItemCount, 7);
    i++
  ) {
    menuItems.push(
      <div
        key={i}
        className={`menu-item ${i === selectedItemIndex ? "selected" : ""}`}
      >
        {children[i]}
      </div>
    );
  }

  return (
    <div className="menu-container">
      <div
        className="menu-arrow left-arrow"
        onClick={() => handleArrowClick(-1)}
      >
        <ArrowBackIosIcon />
      </div>
      <div className="menu" ref={menuRef}>
        <div className="menu-items">{menuItems}</div>
      </div>
      <div
        className="menu-arrow right-arrow"
        onClick={() => handleArrowClick(1)}
      >
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Sc;
