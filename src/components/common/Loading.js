import React from "react";
import PropTypes from 'prop-types';
import "./Loading.css"

const Loading = (props) => {
    const {width, height} = props
    return(
        <div 
            className="Loading"
            style={{width, height}}
        />
    )
}

Loading.propTypes = { 
    width: PropTypes.string,
    height: PropTypes.string,
}

Loading.defaultProps = {
    width:'20px',
    height:'20px',
}
export default Loading