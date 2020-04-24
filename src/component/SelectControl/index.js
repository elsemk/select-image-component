import React  from 'react';
import './index.css';
import icon from './true.png';

const SelectControl = React.memo(({isSelected}) => {
  return (
    <div className={`selectControl ${isSelected && 'isSelected'}`}>
      {isSelected && <img className='icon' src={icon} alt="" />}
    </div>
  );
});

export default SelectControl