import React from 'react';
import PropTypes from 'prop-types';

//received tech and function by param
function TechItem({ tech, onDelete }){
    return (
        <li key={tech}>
            {tech}
            <button onClick={onDelete} type="button">Remove</button>
        </li>
    );
}

//setter default properties in component
TechItem.defaultProps = {
    tech: 'Oculto',
};

//validation properties in the component
TechItem.prototype = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};

export default TechItem;