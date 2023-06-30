import { useGetAllPropertiesQuery } from "@/pages/redux/services/Api";
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
    search:'',
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

  const { data , isLoading } = useGetAllPropertiesQuery({
    location:filter.location,
    sort: filter.sort,
    numericFilters: `area<=${filter.size_max},price>=${filter.price_min}`,
    search:filter.search

  })

 
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

        <div className="input__size">
            
            <input
              type="text"
              placeholder="search"
              name="search"
              onChange={handleChange}
              value={filter.search}
            />
          </div>
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
           
            <label htmlFor="price">Price</label>
          <input
            type="range"
           
            min={50000}
            max={1500000}
            id="price"
            name="price_min"
            value={filter.price_min}
            onChange={handleChange}
            className="input-price"
          />
          <p>Selected Range: KSH. {parseInt(filter.price_min).toLocaleString()}</p>
        
            </div>
            <div className="input__size">
            
              <input
                type="number"
                placeholder="Maximum area size"
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
