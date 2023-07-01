import { useGetAllPropertiesQuery } from "@/pages/redux/services/Api";
import React, { useState, useReducer, SetStateAction, Dispatch } from "react";

interface Props {
  setFilter: Dispatch<
    SetStateAction<{
      location: string;
      sort: string;
      price_min: string;
      price_max: string;
      size_max: string;
      size_min: string;
      search: string;
    }>
  >;
  filter: {
    location: string;
    sort: string;
    price_min: string;
    price_max: string;
    size_max: string;
    size_min: string;
    search: string;
  };
}
const Refine = ({ setFilter, filter }: Props) => {
  const [refine, setRefine] = useState(false);

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
      <div className="input__size input__size_search">
        <input
          type="text"
          placeholder="search"
          name="search"
          onChange={handleChange}
          value={filter.search}
        />
      </div>
      <div className="properties__header-buttons">
        <button
          onClick={() => {
            setRefine((prev) => !prev);
          }}
        >
          {!refine ? "Refine Search" : "Close"}
        </button>

        <select
          name="sort"
          id=""
          className="properties__header-sort"
          onChange={handleChange}
        >
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
              <p>
                Selected Range: KSH.{" "}
                {parseInt(filter.price_min).toLocaleString()}
              </p>
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
              <button className="btn input__refine-btn">Clear Filters</button>
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
