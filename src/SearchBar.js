import { useState } from "react";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const mockSuggestions = [
    "React Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Jobs",
    "CSS Tricks",
  ];

  const filteredSuggestions = mockSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar" style={searchBarStyles}>
      <input
        type="text"
        placeholder="Search 'dev' for dropdown"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        style={inputStyles}
      />
      {showSuggestions && searchTerm && (
        <div className="suggestions-dropdown" style={dropdownStyles}>
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => {
                  setSearchTerm(suggestion);
                  setShowSuggestions(false);
                }}
                style={suggestionItemStyles}
              >
                {suggestion}
              </div>
            ))
          ) : (
            <div style={suggestionItemStyles}>No suggestions found</div>
          )}
        </div>
      )}
    </div>
  );
}
const searchBarStyles = {
  position: "relative",
  width: "300px",
  marginRight: "5%",
};

const inputStyles = {
  width: "100%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  outline: "none",
};

const dropdownStyles = {
  position: "absolute",
  top: "100%",
  left: "0",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 100,
};

const suggestionItemStyles = {
  padding: "8px 10px",
  fontSize: "14px",
  color: "#333",
  cursor: "pointer",
  backgroundColor: "#fff",
};

suggestionItemStyles["&:hover"] = {
  backgroundColor: "#f0f0f0",
};