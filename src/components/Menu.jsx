import React from 'react';
import Strings from '../libs/Strings';
export default (props) => {
    return (
        <div>
            {props.timeline && props.timeline.name}
            <button onClick={() =>props.onClick(props.timeline.profile)}>
                {Strings.next}
            </button>
        </div>
    );
}