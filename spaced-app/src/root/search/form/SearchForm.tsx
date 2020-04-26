import './SearchForm.scss';
import React from 'react';
import { searchFormItems, formTitles } from '../../../constants';
import DropDown from '../../../img/drop-down.png';
import SearchModel from 'model/SearchModel';
import moment from 'moment';
import { searchOperations } from '../duck';

interface ISearchFormProps {
  formData: SearchModel;
  focusOn: string;
  setFocusOn(focusOn: string): void;
}

const SearchForm: React.FC<ISearchFormProps> = props => {
  const { setFocusOn, formData, focusOn } = props;
  const { origin, destination, passenger } = formData;

  const onFlightSearch = () => {
    searchOperations.fetchFlights(formData);
    if (isFormCompleted) setFocusOn(searchFormItems.searchResults);
  };

  const isFormCompleted =
    formData.origin.code !== '' &&
    formData.destination.code !== '' &&
    formData.passenger.total !== 0 &&
    formData.departDate !== '';

  const isDateSelected = formData.departDate !== '';
  const dropDownIcon = (
    <img className="drop-down" src={DropDown} alt="Select" />
  );

  return (
    <div className="search-sec">
      <h1 className="main-title">{formTitles[focusOn]}</h1>
      <div className="row search-form">
        <div
          className="col-sm form-itm-wrapper"
          onClick={() => setFocusOn(searchFormItems.origin)}
        >
          <div
            className="form-itm"
            style={focusOn === 'origin' ? { color: '#ec495a' } : {}}
          >
            <small
              className="search-form-title"
              style={focusOn === 'origin' ? { color: '#ec495a' } : {}}
            >
              From
            </small>
            <br />
            {origin.code === '' && 'Origin'}
            {origin.code !== '' && origin.name}
            {origin.code !== '' && (
              <span
                className="caption-text"
                style={
                  focusOn === 'origin'
                    ? { backgroundColor: '#ec495a', color: 'white' }
                    : {}
                }
              >
                {origin.code}
              </span>
            )}
          </div>
          {dropDownIcon}
        </div>
        <div
          className="col-sm form-itm-wrapper"
          onClick={() => setFocusOn(searchFormItems.destination)}
        >
          <div
            className="form-itm"
            style={focusOn === 'destination' ? { color: '#ec495a' } : {}}
          >
            <small
              className="search-form-title"
              style={focusOn === 'destination' ? { color: '#ec495a' } : {}}
            >
              To
            </small>
            <br />
            {!destination.code && 'Destination'}
            {destination.code !== '' && destination.name}
            {destination.code !== '' && (
              <span
                className="caption-text"
                style={
                  focusOn === 'destination'
                    ? { backgroundColor: '#ec495a', color: 'white' }
                    : {}
                }
              >
                {destination.code}
              </span>
            )}
          </div>
          {dropDownIcon}
        </div>
        <div
          className="col-sm form-itm-wrapper"
          onClick={() => setFocusOn(searchFormItems.departDate)}
        >
          <div
            className="form-itm"
            style={focusOn === 'departDate' ? { color: '#ec495a' } : {}}
          >
            <small
              className="search-form-title"
              style={focusOn === 'departDate' ? { color: '#ec495a' } : {}}
            >
              Depart
            </small>
            <br />
            {isDateSelected && moment(formData.departDate).format('ddd, D MMM')}
            {!isDateSelected && 'Date'}
          </div>
          {dropDownIcon}
        </div>
        <div
          className="col-sm form-itm-wrapper  no-border"
          onClick={() => setFocusOn(searchFormItems.passenger)}
        >
          <div
            className="form-itm"
            style={focusOn === 'passenger' ? { color: '#ec495a' } : {}}
          >
            <small
              className="search-form-title"
              style={focusOn === 'passenger' ? { color: '#ec495a' } : {}}
            >
              Passengers
            </small>
            <br />
            {passenger.children + passenger.adults + passenger.infants}{' '}
            Passenger
          </div>
          <img className="drop-down" src={DropDown} alt="select" />
        </div>
        <div
          className={
            'col-sm search-button label no-border ' +
            (isFormCompleted ? '' : 'disabled')
          }
          onClick={onFlightSearch}
        >
          SEARCH FLIGHTS
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
