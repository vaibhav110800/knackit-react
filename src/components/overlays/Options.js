import React, { useState } from "react";
import Select from "react-select";

const Options = ({ arr, visible }) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const Dropdown =
    () =>
    ({ children, isOpen, target, onClose }) =>
      (
        <div style={{ position: "relative" }}>
          {target}
          {isOpen ? <Menu>{children}</Menu> : null}
          {isOpen ? <Blanket onClick={onClose} /> : null}
        </div>
      );
  const Menu = (props) => {
    const shadow = "hsla(218, 50%, 10%, 0.1)";
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
          marginTop: 8,
          position: "absolute",
          zIndex: 2,
        }}
        {...props}
      />
    );
  };
  const Blanket = (props) => (
    <div
      style={{
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        position: "fixed",
        zIndex: 1,
      }}
      {...props}
    />
  );
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        <button onClick={toggleOpen} isSelected={isOpen}>
          Select a State
        </button>
      }
    >
      <Select
        controlShouldRenderValue={false}
        isClearable={false}
        backspaceRemovesValue={false}
        options={options}
      />
    </Dropdown>
    // <div className="flex flex-col mt-10 ml-10 z-50 border w-fit shadow-lg right-1 absolute bg-white border-gray-400 p-3 rounded-lg">
    //   {arr.map((item) => (
    //     <p className="text-gray-500 cursor-pointer text-base mb-2">{item}</p>
    //   ))}
    // </div>
  );
};

export default Options;
