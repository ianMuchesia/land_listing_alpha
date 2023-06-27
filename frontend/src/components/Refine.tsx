import React from 'react'

interface Props{
    setRefine: (value: React.SetStateAction<boolean>) => void;
}
const Refine = ({setRefine}:Props) => {
  return (
    <div className="properties__refine">
    <form action="" className="properties__refine-form">
                    <select name="" id="">
                        <option value="">-Choose Location-</option>
                        <option value="Likoni">Likoni</option>
                        <option value="Nyali">Nyali</option>
                    </select>
                    <div className="input__price">
                        <input type="number"
                        placeholder="Min. Price" />
                          <input type="number"
                        placeholder="Max. Price" />
                    </div>
                    <div className="input__size">
                        <input type="number"
                        placeholder="Size min"
                         />
                        <input type="number" 
                         placeholder="Size max"/> 
                    </div>
                    <div className="properties__refine-form-btn">
                    <button className="btn input__refine-btn">Search</button>
                    <button type="button" className="btn input__refine-btn" onClick={()=>{setRefine(false)}}>Close</button>
                    </div>
                </form>
                </div>
  )
}

export default Refine