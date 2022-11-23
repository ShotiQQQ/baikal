import React from 'react';
import './title.scss';

const Title = ({text, className}) => {
    return (
        <h1 className={className}>{text}</h1>
    );
};

export default Title;