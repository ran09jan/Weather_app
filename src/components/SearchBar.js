import React, { useState, useEffect, useRef } from 'react';
import { searchCities } from '../data/cities';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const clickingRef = useRef(false);

  useEffect(() => {
    if (inputValue.length >= 2) {
      const cityMatches = searchCities(inputValue, 5);
      setSuggestions(cityMatches);
      setShowSuggestions(cityMatches.length > 0);
      setActiveSuggestionIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setActiveSuggestionIndex(-1);
    }
  }, [inputValue]);

  const performSearch = async (cityToSearch) => {
    if (!cityToSearch || isSearching) return;
    
    setIsSearching(true);
    try {
      await onSearch(cityToSearch);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityToSearch = activeSuggestionIndex >= 0 
      ? suggestions[activeSuggestionIndex] 
      : inputValue.trim();
    
    if (cityToSearch) {
      performSearch(cityToSearch);
      setInputValue('');
      setShowSuggestions(false);
      setActiveSuggestionIndex(-1);
      inputRef.current?.blur();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (activeSuggestionIndex >= 0) {
          const selectedCity = suggestions[activeSuggestionIndex];
          handleSuggestionClick(selectedCity);
        } else {
          handleSubmit(e);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
        inputRef.current?.blur();
        break;
      default:
        break;
    }
  };

  const handleSuggestionClick = (city) => {
    if (!city || isSearching) return;
    
    clickingRef.current = false; // Reset clicking state
    performSearch(city);
    setInputValue('');
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
    inputRef.current?.blur();
  };

  const handleSuggestionMouseDown = (city, e) => {
    e.preventDefault(); // Prevent input from losing focus
    clickingRef.current = true;
  };

  const handleInputBlur = () => {
    // Only hide suggestions if we're not in the middle of clicking
    if (!clickingRef.current) {
      setTimeout(() => {
        if (!clickingRef.current) {
          setShowSuggestions(false);
          setActiveSuggestionIndex(-1);
        }
      }, 100);
    }
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleSuggestionMouseUp = (city) => {
    if (clickingRef.current && !isSearching) {
      handleSuggestionClick(city);
    }
  };

  const handleSuggestionMouseLeave = () => {
    clickingRef.current = false;
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="Enter city name..."
            className="search-input"
            autoComplete="off"
            disabled={isSearching}
          />
          <button 
            type="submit" 
            className={`search-button ${isSearching ? 'loading' : ''}`}
            disabled={isSearching}
          >
            {isSearching ? '⏳' : '🔍'}
          </button>
        </div>
      </form>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-dropdown" ref={suggestionsRef}>
          {suggestions.map((city, index) => (
            <div
              key={city}
              className={`suggestion-item ${
                index === activeSuggestionIndex ? 'active' : ''
              } ${isSearching ? 'disabled' : ''}`}
              onMouseDown={(e) => !isSearching && handleSuggestionMouseDown(city, e)}
              onMouseUp={() => !isSearching && handleSuggestionMouseUp(city)}
              onMouseLeave={handleSuggestionMouseLeave}
              onMouseEnter={() => !isSearching && setActiveSuggestionIndex(index)}
            >
              <span className="city-icon">📍</span>
              <span className="city-name">{city}</span>
              <span className="click-hint">👆 Click to search</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 