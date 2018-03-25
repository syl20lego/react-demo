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
        console.log('HOMEPAGE',this.props.timeline)
        return (
            <Home timeline={this.props.timeline} />
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