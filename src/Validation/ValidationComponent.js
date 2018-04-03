import React from 'react';

const validationComponent = (props) => {

    let count = null;
    if (props.length > 5) {
        count = (
            <div><p>Text long enough</p></div>
        );
    } else {
        count = (
            <div><p>Text too short</p></div>
        );
    }

    return (
        <div>
            {count}
        </div>
    )
};

export default validationComponent;