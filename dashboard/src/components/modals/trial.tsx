
  return (
    <div className="modal-overlay">
      <div className="modal-container-edit">
        <span className="modal-close" onClick={()=>setOpenEditModal(false)}>Close</span>
        <span className="property__page-icon">Edit</span>
        <div className="modal-content">
        <div className="form">
    <h4 className="title">Add Property</h4>
    <div className="input-container">
      <label htmlFor="property-title" className="form-label">
        Name
      </label>
      <input type="text" className="form-input"
      name="title" value={property.title}  />
    </div>
    <div className="input-container">
      <label htmlFor="property-area" className="form-label">
        Area in area<sup>2</sup>
      </label>
      <input type="number" className="form-input" placeholder="e.g 600" 
      name="area" value={property.area} />
    </div>
    <div className="input-container">
      <label htmlFor="property-price" className="form-label">
        Price(Ksh)
      </label>
      <input type="text" className="form-input" placeholder="e.g 60000"
      name="price" value={property.price}  />
    </div>
    <div className="input-container">
      <label htmlFor="property-description" className="form-label">
        Description
      </label>
      <textarea rows={7} className="form-textarea" 
      name="description" value={property.description} />
    </div>
    <div className="input-container">
      <label htmlFor="property-location" className="form-label">
        Location
      </label>
      <select  id="" name="location"   className="form-input" >
        <option value="">--please select--</option>
        <option value="Kizingo">Kizingo</option>
        <option value="Likoni">Likoni</option>
      </select>
    </div>
  </div>
          <button className="btn ">ok</button>
          <button className="btn close-btn">cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Edit