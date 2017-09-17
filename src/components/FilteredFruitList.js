import React from 'react';
import PropTypes from 'prop-types';

const FilteredFruitList = ({ fruit, filter }) => {
  const list = (!filter || filter === 'all') ? fruit : fruit.filter(i => i.fruit_type === filter);
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
};

FilteredFruitList.propTypes = {
  filter: PropTypes.string,
  fruit: PropTypes.array
};

export default FilteredFruitList;
