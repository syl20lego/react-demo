import React from 'react';
import PropTypes from 'prop-types';
import Strings from '../libs/Strings';
import './Menu.css';

const Menu = (props) => {
  return (
        <div className="menu">
            <div className="menuText">
                {props.timeline && props.timeline.name}
            </div>
            <div>
                <button className="button" onClick={() => props.onClick(props.timeline.profile)}>
                    {Strings.next}
                </button>
            </div>
        </div>
  );
};

Menu.propTypes = {
  timeline: PropTypes.object,
  onClick: PropTypes.func,
};

export default Menu;
