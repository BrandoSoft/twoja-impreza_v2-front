import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import './Alert.scss'

const Alert = props => props.alerts !== null && props.alerts.length > 0 && props.alerts.map(alert => (
    <div key={alert.id} className={`alert alert--${alert.alertType}`}>
        {alert.msg}
    </div>
))


Alert.propTypes = {
    alerts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);