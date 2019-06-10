import React from 'react';
import './SeasonDisplay.css';
import Loader from './Loader';

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!!!`,
    iconName: 'sun'
  },
  winter: {
    text: `Burr It's Cold!!!`,
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer': 'winter'; 
  } else {
    return lat < 0 ? 'winter': 'summer';
  }
}


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];

  if (props.lat === null) {
    return (
     <Loader />
    )
  }

  return (
    <div className={`season-display ${season}` }>
      <i className={`icon-left ${iconName} icon massive `} ></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
  )

}
export default SeasonDisplay;