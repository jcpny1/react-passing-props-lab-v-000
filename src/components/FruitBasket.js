import React from 'react';
import PropTypes from 'prop-types';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, currentFilter }) =>
  <div className="fruit-basket">
    <FilteredFruitList fruit={fruit} filter={currentFilter}/>
  </div>

FruitBasket.defaultProps = {
  currentFilter: null,
  filters: [],
  fruit: [],
  updateFilterCallback: null
};

FruitBasket.propTypes = {
  currentFilter: PropTypes.string,
  filters: PropTypes.array,
  fruit: PropTypes.array,
  updateFilterCallback: PropTypes.func
};

export default FruitBasket;
