import React from 'react';
import Blog from './Blog'
import Category from './Category'

function Section(props) {
    return (
        <h3 className="text-right display-3">{props.titleSection}</h3>        
    );
}

export default Section;