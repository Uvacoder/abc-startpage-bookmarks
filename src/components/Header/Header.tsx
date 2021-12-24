import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useState,
} from "react";
import { GearIcon } from "../icons/GearIcon";

interface Props {
  onSidebarButtonClick: () => void;
}

export const Header: React.FC<Props> = ({ onSidebarButtonClick }) => {
  const [webSearchValue, setWebSearchValue] = useState<string>("");

  // This controls searching, detects when "Enter" is pressed
  const handleWebSearch = () => {
    window.location.assign(
      `https://duckduckgo.com/?q=${encodeURI(webSearchValue ?? "")}`
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-16 px-4 lg:px-6 bg-white shadow-sm flex flex-row items-center justify-between">
      <div className="flex-grow flex flex-row items-center mr-4">
        <input
          className="flex-grow border shadow rounded-lg px-4 py-2"
          placeholder="Search the Web (Press <Enter> to Search)"
          value={webSearchValue}
          onChange={(e) => setWebSearchValue(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && handleWebSearch();
          }}
        />
      </div>
      <button onClick={() => onSidebarButtonClick()}>
        <GearIcon />
      </button>
    </div>
  );
};