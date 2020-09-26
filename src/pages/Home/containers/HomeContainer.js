
import {
    connect
} from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../modules/reducer';
import Home from '../components/Home';

import {
    setUserName
} from '../modules/actions';


const mapStateToProps = (state) => ({
    userName: state.home.userName,
});

const mapDispatchToProps = (dispatch) => ({
    setUserName: (username) => dispatch(setUserName(username)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
export default compose(withReducer, withConnect)(Home);

