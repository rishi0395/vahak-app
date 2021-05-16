const SUBMIT_SECTION_1 = 'SUBMIT_SECTION_1';
const SUBMIT_SECTION_2 = 'SUBMIT_SECTION_2';
const SUBMIT_SECTION_3 = 'SUBMIT_SECTION_3';
const SUBMIT_SECTION_4 = 'SUBMIT_SECTION_4';
const SUBMIT_SECTION_5 = 'SUBMIT_SECTION_5';
const HEADING_UPDATE = 'HEADING_UPDATE';

const initialState = {
  selectLocation: '',
  destination: '',
  enterCarType: 'SUV',
  numberOfTravellers: '',
  inr: 0,
  mobileNumber: null,
  name: '',
  remarks: '',
  otp: '',
  heading: 'Place your Bid(1/4 step)'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SECTION_1:
      return {
        ...state,
        ...action.payload
      };
    case SUBMIT_SECTION_2:
      return {
        ...state,
        ...action.payload
      };

    case SUBMIT_SECTION_3:
      return {
        ...state,
        ...action.payload
      };

    case SUBMIT_SECTION_4:
      return {
        ...state,
        ...action.payload
      };

    case SUBMIT_SECTION_5:
      return {
        ...state,
        ...action.payload
      };
    case HEADING_UPDATE:
      return {
        ...state,
        heading: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export const onSubmitSection1 = (payload) => ({
  type: SUBMIT_SECTION_1,
  payload
});

export const onSubmitSection2 = (payload) => ({
  type: SUBMIT_SECTION_2,
  payload
});

export const onSubmitSection3 = (payload) => ({
  type: SUBMIT_SECTION_3,
  payload
});

export const onSubmitSection4 = (payload) => ({
  type: SUBMIT_SECTION_4,
  payload
});

export const onSubmitSection5 = (payload) => ({
  type: SUBMIT_SECTION_5,
  payload
});

export const updateHeading = (payload) => ({
  type: HEADING_UPDATE,
  payload
});

export default reducer;
