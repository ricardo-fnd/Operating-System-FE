module.exports = {
  ".show-y-scrollbar": {
    "overflow-y": "auto",
    "&::-webkit-scrollbar": {
      display: "block",
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#b0b0b0",
      "border-radius": "8px",
      cursor: "pointer",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#a3a3a3",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  },
};
