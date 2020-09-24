/**
 *
 * AppWrapper
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. 
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';


const INITIAL_STATE = {
};

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.name = "AppWrapper";
    this.state = INITIAL_STATE;
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        <Helmet
          titleTemplate="%s - Communications and Tracking"
          defaultTitle="Communications and Tracking"
          meta={[
            {
              name: 'description',
              content: 'A Communications and Tracking application',
            },
          ]}
        />

          <div className="App__header">
          <Navbar />
        </div>
        <div className="App__sidebar col-lg-4">
          <Sidebar/>
        </div>
        <div id="main_content" className="App-view col-lg-8">
          {React.Children.toArray(children)}
        </div>

      </div>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;

import {
  connect
} from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../modules/reducer';
import AppWrapper from '../components/AppWrapper';

import {
  makeSelectMasthead,
  makeSelectLeftStrip,
  makeSelectUser,
  makeSelectNotifications,
} from '../modules/selectors';

import {
  onProductMenuSelect,
  onAvatarMenuSelect,
  onInitialNotifications,
  onUpdateNotifications,
  onUnprocessedNotifications,
  onMarkNotificationsRead,
} from '../modules/actions';


const mapStateToProps = (state) => {
  const mastheadConfig = makeSelectMasthead()(state);
  const leftStripConfig = makeSelectLeftStrip()(state);
  const user = makeSelectUser()(state);
  const notifications = makeSelectNotifications()(state);

  return {
    ...state,
    mastheadConfig,
    leftStripConfig,
    user,
    notifications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  mastheadActions: {
    onLogOutSelect: () => dispatch(push('/logout')),
    notificationsCallbacks: {
      markAllAsRead: () => false,
      onPrevious: () => false,
      onNext: () => false,
    },
    onNavMenuOpenClose: () => false,
    onProductMenuOpenClose: () => false,
    onSupportMenuOpenClose: () => false,
    supportMenuSearch: () => false,
    onAvatarMenuOpenClose: () => false,
    onNavMenuSelect: (event, item) => {
      dispatch(push(item.path));
    },
    onProductMenuSelect: (event, item, state) => {
      // put any state cleanup or analytics here
      dispatch(onProductMenuSelect(state));
      window.location.href = item.path;
    },
    onAvatarMenuSelect: (event, item, state) => {
      dispatch(onAvatarMenuSelect(state));
      if (item.path) {
        dispatch(push(item.path));
      }
    },
  },
  dispatchOnInitialNotifications: (notifications) =>
    dispatch(onInitialNotifications(notifications)),
  dispatchOnUpdateNotifications: (notifications) =>
    dispatch(onUpdateNotifications(notifications)),
  dispatchOnUnprocessedNotifications: (notifications) =>
    dispatch(onUnprocessedNotifications(notifications)),
  markNotificationsRead: (notifications) =>
    dispatch(onMarkNotificationsRead(notifications)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });
export default compose(withReducer, withConnect)(AppWrapper);

  /* eslint-disable no-undef,no-useless-catch */
/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import {
  ON_PRODUCT_MENU_SELECT,
  ON_AVATAR_MENU_SELECT,
  ON_MULTI_GROUP_OPEN,
  ON_MULTI_GROUP_CHECK,
  ON_SINGLE_GROUP_OPEN,
  ON_SINGLE_GROUP_SELECT,
  ON_LEFT_STRIP_ADVANCE_ANIMATION,
  ON_LEFT_STRIP_RETREAT_ANIMATION,
  ON_LEFT_STRIP_EXPAND_COLLAPSE,
  USER_SET,
  TOGGLE_AUTH_MODAL_OPEN,
  ON_INITIAL_NOTIFICATIONS,
  ON_UPDATE_NOTIFICATIONS,
  ON_UNPROCESSED_NOTIFICATIONS,
  MARK_NOTIFICATIONS_READ,
  UPDATE_INPUT_VALUE,
  CLEAR_SUGGESTIONS,
  MAYBE_UPDATE_SUGGESTIONS,
  LOAD_SUGGESTIONS_BEGIN,
  ERROR_API_CALL,
  NOTIFICATION_BANNER_UPDATE,
  NOTIFICATION_BANNER_DISMISS,
  GLOBAL_LOADER_UPDATE,
  UPDATE_SELECTED_PROVIDER,
  LOAD_MENU,
  SET_SELECTED_JOB_DETAIL,
  GET_JOB_DETEAIL,
  GET_CUSTOMER_NAME_NON_CHC_USER,
  SET_SELECTED_JOB_INFO,
  CLOSE_ERROR_API_CALL,
  ERROR_API_CALL_MESSAGE,
  LOAD_SUGGESTIONS_END,
  INITIAL_LOAD,
  INITIAL_LOADED, IS_COLUMN_CLICKED,
} from './constants';

import { fetchAPI } from '../../../commonResources/helpers/api';
// import {
//   FETCH_TEMPLATES
// } from '../constants/TemplateListConstants';
import {
  FETCH_FIELDS
} from '../../DataFileList/modules/constants';

export const clearJobData = () => dispatch => {
  /* dispatch({
    type: FETCH_TEMPLATES,
    images: []
  }); */
  dispatch({
    type: FETCH_FIELDS,
    records: [],
    parserDetails: {}
  });
};

export const onProductMenuSelect = (event, state, safeProductMenuItems) => {
  window.location.replace(
    safeProductMenuItems.menuItems[state.activeMenuItemIndex].path,
  );
};
export const showMessageBoxOnHeaderClick = values => ({
  type: 'Show_Logo',
  boolVal: values,
});
export const ShowMessageBox = value => ({
  type: 'Show_Message',
  record: value,
});

export function errorApiCall(error) {
  return {
    type: ERROR_API_CALL,
    errorMessage: error,
  };
}
export function initialLoad(){
  return {
    type:INITIAL_LOAD
  };
}
export function initialLoaded(){
  return {
    type:INITIAL_LOADED
  };
}

export function closeErrorApiCall(){
  return {
    type:CLOSE_ERROR_API_CALL
  };
}
export function updateInputValue(value) {
  if (value.name) {
    return {
      type: UPDATE_INPUT_VALUE,
      selectedCustomerName: value.name,
      selectedCustomerId: value.company_id || 0,
      selectedCustomerIsChannelPartner: value.channel_partner,
      isCustomerSelected: true,
      isChannelPartner: value.channel_partner,
      ixtSystemId: value.system_id,
      hierarchy_needed: (!value.hierarchy_needed ? false : value.hierarchy_needed)
    };
  }
  return {
    type: UPDATE_INPUT_VALUE,
    selectedCustomerName: value,
    selectedCustomerId: 0,
    isCustomerSelected: false,
    isChannelPrtner: false,
    ixtSystemId: 0,
  };
}

export function clearSuggestions() {
  return {
    type: CLEAR_SUGGESTIONS,
  };
}

export function maybeUpdateSuggestions(suggestions, value) {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    selectedCustomerName: value,
  };
}
export function loadSuggestionsBegin() {
  return {
    type: LOAD_SUGGESTIONS_BEGIN,

  };
}
export function loadSuggestionsEnd() {
  return {
    type: LOAD_SUGGESTIONS_END,
  };
}
export function loadSuggestions(value) {
  return async dispatch => {
    const escapedValue = value.trim();
    if (escapedValue === '') {
      dispatch(loadSuggestionsEnd());
      dispatch(errorApiCall('Input value is empty!'));
    } else {
      // Generate parameter for store procedure
      const queryInput = {
        escaped_Value: escapedValue,
      };
      try {
        const response = await fetchAPI({
          url: '/api/ixtdb/getcustomername',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(queryInput),
        });
        dispatch(maybeUpdateSuggestions(response.results, value));
      } catch (err) {
        dispatch(loadSuggestionsEnd());
        dispatch(errorApiCall(ERROR_API_CALL_MESSAGE));
      }
    }
  };
}
export function loadNonChcUserCustomerInfo(value) {
  return async dispatch => {
    const customerName = value.trim();
    if (customerName === '') {
      dispatch(errorApiCall('Input value is empty!'));
    } else {
      // Generate parameter for store procedure
      const queryInput = {
        customerName,
      };
      try {
        const response = await fetchAPI({
          url: '/api/ixtdb/getcustomernameForNonChcUser',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(queryInput),
        });
        dispatch({
          type: GET_CUSTOMER_NAME_NON_CHC_USER,
          selectedNonChcCustomerName: response.results[0].CompanyName,
          selectedNonChcCustomer: response.results[0],
        });
      } catch (err) {
        dispatch(errorApiCall(ERROR_API_CALL_MESSAGE));
      }
    }
  };
}

export function notificationOnDismiss() {
  return {
    type: NOTIFICATION_BANNER_DISMISS,
  };
}

export function updateMasterHeaderMenu(userInfo) {
  let isCHCEmployee = false;
  if (
    userInfo &&
    userInfo.company &&
    userInfo.company.name &&
    (userInfo.company.id === process.env.CHANGE_HEALTHCARE_COMPANY_ID || userInfo.company.id === process.env.FAKE_CHANGE_HEALTHCARE_COMPANY_ID)
  ) {
    isCHCEmployee = true;
  }
  return {
    type: LOAD_MENU,
    isCHCEmployee,
  };
}

export function updateGlobalLoader(isLoading) {
  return {
    type: GLOBAL_LOADER_UPDATE,
    isLoading,
  };
}

export function showNotificationBanner(
  notificationType,
  notificationText,
  notificationAutoDismiss,
) {
  return {
    type: NOTIFICATION_BANNER_UPDATE,
    notificationType,
    notificationText,
    notificationAutoDismiss,
  };
}

export const getUserSource = async accessToken => {
  try {
    const response = await fetchAPI({
      url: '/api/auth/get_user_source',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_token: accessToken,
        base_url: process.env.AUTH_BASE_URL,
        client_id: process.env.CLIENT_ID,
      }),
    });
    if (response.userInfo) {
      return response.userInfo;
    }
    throw response;
  } catch (err) {
    return err;
  }
};

export const createCORSRequest = (method, url) => {
  let xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== 'undefined') {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return xhr;
};

// this call has to be fired before any API calls
export const enableIE = async () => {
  const result = await new Promise((resolve) => {
    const xhr = createCORSRequest('GET', process.env.API_ROOT_Server);
    xhr.open('GET', process.env.API_ROOT_Server, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    if (sessionStorage.getItem('accessToken')) {
      xhr.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));
    }
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        resolve('Error');
      }
    };
    xhr.onerror = () => {
      resolve('Error');
    };
    xhr.send();
  });
  return result;
};

export const getJobFlowOrderDetails = async (
  ixtJobId,
  ixtParentCustomerId,
  isChannelPartner,
) => {
  try {
    const response = await fetchAPI({
      url: '/api/job/getjobflowdetails',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ixt_job_id: ixtJobId,
        ixt_parent_customer_id: ixtParentCustomerId,
        is_channel_partner: isChannelPartner,
      }),
    });
    return {
      ...response
    };
  } catch (error) {
    throw error;
  }
};
export const resetMasterHeaderReducer = () => ({
  type: 'RESET_MASTER_HEADER_REDUCER',
});
export const hasPageAccess = (userInfo, modulePath) => {
  if (
    userInfo &&
    userInfo.auth &&
    userInfo.auth.roles &&
    userInfo.auth.roles.length > 0
  ) {
    const pageList = userInfo.auth.roles[0].pages;
    if (pageList && pageList.length > 0) {
      const code = pageList.find(page => page.path === modulePath);
      if (code && code.pageCode.length > 0) {
        return true;
      }
      return false;
    }
  }
  return false;
};

export const hasPageAccessByCode = (userInfo, moduleCode) => {
  if (
    userInfo &&
    userInfo.auth &&
    userInfo.auth.roles &&
    userInfo.auth.roles.length > 0
  ) {
    const pageList = userInfo.auth.roles[0].pages;
    if (pageList && pageList.length > 0) {
      const code = pageList.find(page => page.pageCode === moduleCode);
      if (code && code.pageCode.length > 0) {
        return true;
      }
      return false;
    }
  }
  return false;
};
export const isColumnClicked = value => dispatch => {
  dispatch({
    type: IS_COLUMN_CLICKED,
    records: value,
  });
};

export const getUniqueId = (
  ixtSystemId,
  selectedIxtCustomerId,
  selectedProviderId,
  selectedCsspFacilityIdentifier,
) => {
  // Direct company
  let uniqueId = `${ixtSystemId}-${selectedIxtCustomerId}`;
  if (selectedProviderId > 0) {
    // Provider
    uniqueId = `${ixtSystemId}-${selectedProviderId}`;
  } else if (!!selectedCsspFacilityIdentifier && selectedCsspFacilityIdentifier.length > 0) {
    // Facility
    uniqueId = `${ixtSystemId}-${selectedCsspFacilityIdentifier}`;
  }
  return uniqueId;
};




export const onProductMenuSelectOld = state => ({
  type: ON_PRODUCT_MENU_SELECT,
  state,
});

export const onAvatarMenuSelect = state => ({
  type: ON_AVATAR_MENU_SELECT,
  state,
});

export const onSingleGroupOpen = state => ({
  type: ON_SINGLE_GROUP_OPEN,
  state,
});

export const onSingleGroupSelect = state => ({
  type: ON_SINGLE_GROUP_SELECT,
  state,
});

export const onMultiGroupOpen = state => ({
  type: ON_MULTI_GROUP_OPEN,
  state,
});

export const onMultiGroupCheck = state => ({
  type: ON_MULTI_GROUP_CHECK,
  state,
});

export const onAdvanceLeftStripAnimation = state => ({
  type: ON_LEFT_STRIP_ADVANCE_ANIMATION,
  state,
});

export const onRetreatLeftStripAnimation = state => ({
  type: ON_LEFT_STRIP_RETREAT_ANIMATION,
  state,
});

export const onLeftStripExpandCollapse = state => ({
  type: ON_LEFT_STRIP_EXPAND_COLLAPSE,
  state,
});

export const setUser = state => ({
  type: USER_SET,
  state,
});

export const toggleAuthModalOpen = state => ({
  type: TOGGLE_AUTH_MODAL_OPEN,
  state,
});

// NOTIFICATIONS
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––
export const onInitialNotifications = state => ({
  type: ON_INITIAL_NOTIFICATIONS,
  state,
});

export const onUpdateNotifications = state => ({
  type: ON_UPDATE_NOTIFICATIONS,
  state,
});

export const onUnprocessedNotifications = state => ({
  type: ON_UNPROCESSED_NOTIFICATIONS,
  state,
});

export const onMarkNotificationsRead = state => ({
  type: MARK_NOTIFICATIONS_READ,
  state,
});

import {
  NAV_MENU_ITEMS,
  MAST_HEAD_SELECT_CUSTOMER,
  MAST_HEAD_DISABLE_CUST_SEARCH,
  MAST_HEAD_UPDATE_NAV_MENU,
} from './constants';

const initialState = {
  navMenuItems: NAV_MENU_ITEMS,
  disableCustomerSearch: false,
  selectedCustomerName: '',
  selectedCustomerId: '',
  isChannelPartner: false,
  ixtSystemId: 0,
  hierarchy_needed: false,

  isCustomerSelected:false,
};
const mastheadReducer = (state = initialState, action) => {
  switch (action.type) {


    case MAST_HEAD_SELECT_CUSTOMER:
      return {
        ...state,
        selectedCustomerName: action.selectedCustomerName,
        selectedCustomerId: action.selectedCustomerId,
        isChannelPartner: action.isChannelPartner,
        ixtSystemId: action.ixtSystemId,
        hierarchy_needed: action.hierarchy_needed,
        navMenuItems: action.navMenuItems,
        isCustomerSelected: action.isCustomerSelected
      };
    case MAST_HEAD_DISABLE_CUST_SEARCH:
      return {
        ...state,
        disableCustomerSearch: action.disableCustomerSearch,
      };
    case MAST_HEAD_UPDATE_NAV_MENU:
      return {
        ...state,
        navMenuItems: action.navMenuItems,
      };
    default:
      return {
        ...state,
      };
  }
};
export default mastheadReducer;

.header_divider{
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  border-left: 1px solid #FFF;
}

.header_name{
  display: inline-flex;
  vertical-align: super;
  padding-left: 1.25rem;
  color: #FFF;
  font-size: 13px;
}

.mast_head_search_div{
  display: inline-block;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px 0;
}

.react-autosuggest__container {
  position: relative;
  display: inline-block; 
}

.react-autosuggest__input {
  width: 240px;
  height: 30px;
  padding: 0 0 0 10px;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: text;
  background-color: white;
}

.react-autosuggest__input--focused {
  outline: none;
}

.react-autosuggest__input--open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.react-autosuggest__suggestions-container {
  display: none;
}

.react-autosuggest__suggestions-container--open {
  display: block;
  position: absolute;
  width: 240px;
  border: 1px solid #aaa;
  background-color: #fff;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 2;
}

.react-autosuggest__suggestions-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  height: 200px;
  overflow-y: auto;
}

.react-autosuggest__suggestion {
  cursor: pointer;
  padding: 10px 20px;
}

.react-autosuggest__suggestion--highlighted {
  background-color: #ddd;
}


