import React from "react";

const Filter = ({ count, sortProducts, filterProduct, brand }) => {
  return (
    <div className="filter">
      <div className="filter-block">
        <span className="filter-label">Products</span>
        <div className="result">Total number of products: {count}</div>
      </div>
      <div className="filter-block sort">
        <span className="filter-label">Sort by</span>
        <div className="form-checkbox">
          <label className="form-group">
            <input type="radio" name="radioName" value="asc" onChange={sortProducts} />
            New products
          </label>
          <label className="form-group">
            <input type="radio" name="radioName" value="desc" onChange={sortProducts} />
            Old products
          </label>
        </div>
      </div>
      <div className="filter-block brand">
        <span className="filter-label">Brands</span>
        <select value={brand} onChange={filterProduct}>
          <option value="">All</option>
          <option value="samsung">Samsung</option>
          <option value="iphone">iPhone</option>
          <option value="motorola">Motorola</option>
          <option value="blackberry">BlackBerry</option>
          <option value="lg">LG</option>
          <option value="sony">Sony</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

// if you give radio buttons a same name, you can just choose one of them
