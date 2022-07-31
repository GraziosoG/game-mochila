import './Lang.css';
import PropTypes from 'prop-types';

const Lang = ({ inputName, referName, callback, langValue, marginBottom }) => {
  
    return (
    <div className="language-div" style={{marginBottom: marginBottom}}>
        <label htmlFor={referName}>Choose Language</label>

        <br></br>

        <select name={referName} className={inputName} value={langValue} onChange={(e) => {callback(e.target.value);}}>
            <option value="English" defaultValue>English</option>
            <option value="Spanish">Spanish</option>
        </select>

    </div>
    
  )
}

Lang.propTypes = {
    inputName: PropTypes.string,
    referName: PropTypes.string,
    callback: PropTypes.func,
    langValue: PropTypes.string
}

export default Lang