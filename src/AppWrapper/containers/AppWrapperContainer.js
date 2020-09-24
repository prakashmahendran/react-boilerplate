
import {
    connect
} from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import reducer from '../modules/reducer';
import AppWrapper from '../components/AppWrapper';

import {
} from '../modules/actions';


const mapStateToProps = (state) => ({
    appName: state.app.appName,
});

const mapDispatchToProps = (dispatch) => ({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });
export default compose(withReducer, withConnect)(AppWrapper);

