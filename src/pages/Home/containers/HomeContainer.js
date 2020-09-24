
import {
    connect
} from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../modules/reducer';
import Home from '../components/Home';

import {
} from '../modules/actions';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
export default compose(withReducer, withConnect)(Home);

