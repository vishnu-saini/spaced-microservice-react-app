import React, { useState } from 'react';
import SearchForm from './form/SearchForm';
import DepartDate from './form/DepartDate';
import Destination from './form/Destination';
import Passenger from './form/Passenger';
import { searchFormItems } from 'constants/index';
import Origin from './form/Origin';
import SearchModel from 'model/SearchModel';
import FlightResult from './result/FlightResult';
import { IAppState, ISpacedThunkDispatch } from 'store';
import { searchOperations } from './duck';
import { connect } from 'react-redux';

interface ISearchContainerProps {
  formData: SearchModel;
  flights: any[];
  fetchFlights(formData: SearchModel): void;
  updateFormData(field: string, value: any): void;
}

const SearchContainer: React.FC<ISearchContainerProps> = props => {
  const { formData, flights, fetchFlights, updateFormData } = props;
  const [focusOn, setFocusOn] = useState('');

  return (
    <div className="container">
      <SearchForm
        setFocusOn={setFocusOn}
        formData={formData}
        focusOn={focusOn}
      />
      {focusOn === searchFormItems.origin && (
        <Origin updateFormData={updateFormData} setFocusOn={setFocusOn} />
      )}
      {focusOn === searchFormItems.destination && (
        <Destination updateFormData={updateFormData} setFocusOn={setFocusOn} />
      )}
      {focusOn === searchFormItems.departDate && (
        <DepartDate
          updateFormData={updateFormData}
          formData={formData}
          setFocusOn={setFocusOn}
        />
      )}
      {focusOn === searchFormItems.passenger && (
        <Passenger updateFormData={updateFormData} formData={formData} />
      )}
      {focusOn === searchFormItems.searchResults && (
        <FlightResult
          flights={flights}
          formData={formData}
          fetchFlights={fetchFlights}
          updateFormData={updateFormData}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  formData: state.flightSearch.form,
  flights: state.flightSearch.results
});

const mapDispatchToProps = (dispatch: ISpacedThunkDispatch) => ({
  fetchFlights: (formData: SearchModel) =>
    dispatch(searchOperations.fetchFlights(formData)),
  updateFormData: (field: string, value: any) =>
    dispatch(searchOperations.updateSearchFormData(field, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
