import './Quantity.css';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Quantity = ({ inputName, referName, quantName, quantValue, callback }) => {
    const [quant, setQuantValue] = useState(quantValue);
  
    return (
    <div className="quantity">
        <label htmlFor={referName}>{quantName}</label>

        <br></br>

        <input
        type="number"
        min="1"
        max="10"
        value={quant}
        name={referName}
        className={inputName}
        onChange={(e) => {callback(e.target.value); setQuantValue(e.target.value)}}     
        />
    </div>
    
  )
}

Quantity.defaultProps = {
    quantValue: 3
}

Quantity.propTypes = {
    className: PropTypes.string,
    inputName: PropTypes.string,
    quantName: PropTypes.string,
    quantValue: PropTypes.number,
    callback: PropTypes.func
}

export default Quantity