import React from 'react';
import Strings from '../libs/Strings';
import './Menu.css';

export default (props) => {
    return (
        <div className="menu">
            <div className="menuText">
                {props.timeline && props.timeline.name}
            </div>
            <div>
                <button className="button" onClick={() =>props.onClick(props.timeline.profile)}>
                    {Strings.next}
                </button>
            </div>
        </div>
    );
}