import React from 'react';
import PropTypes from 'prop-types';
import Strings from '../libs/Strings';
import './Menu.css';

const Menu = ({ onClick, timeline: { name, profile } = {} }) => {
  return (
        <div className="menu">
            <div className="menuText">
                {name}
            </div>
            <div>
                <button className="button" onClick={() => onClick(profile)}>
                    {Strings.next}
                </button>
            </div>
        </div>
  );
};

Menu.propTypes = {
  timeline: PropTypes.shape({
    name: PropTypes.string,
    profile: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default Menu;
