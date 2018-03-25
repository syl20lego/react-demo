import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import Home from './Home';
import {ActionCreators} from '../actions/ActionCreators';

class HomePage extends Component {

    componentDidMount() {
        this.props.changeProfile();
    }

    render() {
        return (
            <Home timeline={this.props.timeline} onClick={this.props.changeProfile}/>
        )
    }
}

HomePage.propTypes = {
	timeline: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        timeline: state.tweets.timeline
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeProfile: (profile) => {
            dispatch(ActionCreators.changeProfile(profile));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);