import React from 'react'

const Filter = ({count, sortProducts, filterProduct, brand}) => {
  return (
    <div className='filter'>
        <div className='result'>
            Total number of products: {count}
        </div>
        <div className='sort'>
            <div className='sort-title'>Sort by:</div>
            <div className='form-checkbox'>
                <div className='form-group'>
                    <input type='radio' name='radioName' value='asc' onChange={sortProducts}/>
                    <label htmlFor=''>New Products</label>
                </div>
                <div className='form-group'>
                <input type='radio' name='radioName' value='desc' onChange={sortProducts}/>
                    <label htmlFor=''>Old Products</label>
                </div>
            </div>
        </div>
        <div className='brand'>
            Brands
            <select value={brand} onChange={filterProduct}>
                <option value=''>All</option>
                <option value='samsung'>Samsung</option>
                <option value='iphone'>iPhone</option>
                <option value='motorola'>Motorola</option>
                <option value='blackberry'>BlackBerry</option>
                <option value='lg'>LG</option>
                <option value='sony'>Sony</option>
            </select>
        </div>
      
    </div>
  )
}

export default Filter


// if you give radio buttons a same name, you can just choose one of them 
