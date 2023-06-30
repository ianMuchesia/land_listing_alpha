import React, { useState, useReducer } from "react";

const Refine = () => {
  const [refine, setRefine] = useState(false);

  const [filter, setFilter] = useState({
    location: "",
    sort: "",
    price_min: "",
    price_max: "",
    size_max: "",
    size_min: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [e.target.name]: e.target.value,
    }));
  };

 
  return (
    <div className="properties__main__header">
      <div className="properties__header">
        <h4>Lands for Sale in Mombasa</h4>
        <h5>Page 1 of 1</h5>
      </div>
      <div className="properties__header-buttons">
        <button
          onClick={() => {
            setRefine((prev) => !prev);
          }}
        >
          {!refine ? "Refine Search" : "Close"}
        </button>

        <select name="sort" id="" className="properties__header-sort" onChange={handleChange}>
          <option value="">--sort--</option>
          <option value="price">Price (lowest first)</option>
          <option value="-price">Price (highest first)</option>
        </select>
      </div>
      {refine && (
        <div className="properties__refine">
          <div className="properties__refine-form">
            <select name="location" id="" onChange={handleChange}>
              <option value="">-Choose Location-</option>
              <option value="Likoni">Likoni</option>
              <option value="Nyali">Nyali</option>
            </select>
            <div className="input__price">
              <input
                type="number"
                name="price_min"
                placeholder="Min. Price"
                onChange={handleChange}
                value={filter.price_min}
              />
              <input
                type="number"
                name="price_max"
                placeholder="Max. Price"
                onChange={handleChange}
                value={filter.price_max}
              />
            </div>
            <div className="input__size">
              <input
                type="number"
                placeholder="Size min"
                name="size_min"
                onChange={handleChange}
                value={filter.size_min}
              />
              <input
                type="number"
                placeholder="Size max"
                name="size_max"
                onChange={handleChange}
                value={filter.size_max}
              />
            </div>
            <div className="properties__refine-form-btn">
              <button className="btn input__refine-btn">Search</button>
              <button
                type="button"
                className="btn input__refine-btn"
                onClick={() => {
                  setRefine(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Refine;
