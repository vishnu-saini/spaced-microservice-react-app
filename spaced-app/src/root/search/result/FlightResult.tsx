import './FlightResult.scss';
import React, { useEffect, useState, useContext } from 'react';
import { fetchDepartDates } from 'api';
import SearchModel from 'model/SearchModel';
import RightArrow from 'img/right.png';
import LeftArrow from 'img/left.png';
import ItemsCarousel from 'react-items-carousel';
import moment from 'moment';
import { __RouterContext } from 'react-router';

interface IFlightResultProps {
  formData: SearchModel;
  flights: any[];
  fetchFlights(formData: SearchModel): void;
  updateFormData(field: string, value: any): void;
}

const FlightResult: React.FC<IFlightResultProps> = props => {
  const { formData, flights, updateFormData, fetchFlights } = props;
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [departDates, setDepartDates] = useState([]);
  const router = useContext(__RouterContext);
  const chevronWidth = 40;
  const flightClasses = ['economy', 'business', '1st'];

  useEffect(() => {
    if (formData.origin.code && formData.destination.code)
      fetchDepartDates(formData.origin.code, formData.destination.code).then(
        (response: any) => {
          setDepartDates(response);
        }
      );
  }, [formData]);

  useEffect(() => {
    fetchFlights(formData);
  }, [formData]); // eslint-disable-line react-hooks/exhaustive-deps

  const onFlightSelect = (flightId: string, flightClass: string) => {
    console.log(flightId, flightClass);
    updateFormData('flightId', flightId);
    updateFormData('class', flightClass);
    router.history.push('/checkout');
  };

  return (
    <React.Fragment>
      <div className="content-container result-date-container">
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={6}
            gutter={20}
            leftChevron={<img src={LeftArrow} alt="left" />}
            rightChevron={<img src={RightArrow} alt="right" />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {departDates.map((item: any) => (
              <div
                key={Math.random()}
                className={
                  'date-box-container ' +
                  (item.date === formData.departDate ? ' selected ' : '') +
                  (item.isSoldOut ? ' sold-out ' : '')
                }
              >
                <div className="day">{moment(item.date).format('ddd')}</div>
                <div
                  className={'date-box '}
                  onClick={() => {
                    if (!item.isSoldOut)
                      updateFormData('departDate', item.date);
                  }}
                >
                  <div className="month">{moment(item.date).format('MMM')}</div>
                  <div className="date"> {moment(item.date).format('D')}</div>
                  <div className="price">
                    {' '}
                    {item.isSoldOut
                      ? 'SOLD OUT'
                      : `from $ ${item.minPrice}`}{' '}
                  </div>
                </div>
              </div>
            ))}
          </ItemsCarousel>
        </div>
      </div>
      <div className="search-result-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="label">
                DEPARTURE TIME
              </th>
              <th scope="col" className="label">
                ECONOMY
              </th>
              <th scope="col" className="label">
                BUSINESS
              </th>
              <th scope="col" className="label">
                1ST CLASS
              </th>
            </tr>
          </thead>
          <tbody>
            {flights.map((e: any) => (
              <tr key={e.id}>
                <th scope="row">
                  <div className="flex-container info-wrap">
                    <div className="flex-itm">
                      <div className="time">{e.startTime}</div>
                      <span className="place">{e.origin.name} </span>
                      <span className="caption-text place-code">
                        {e.origin.code}
                      </span>
                    </div>
                    <div className="flex-itm duration-wrap">
                      <span className="duration">{`${e.durationInMin /
                        60} h ${e.durationInMin % 60} m`}</span>
                      <div className="point-to-point">
                        <div className="point"></div>
                        .............
                        <div className="point"></div>
                      </div>
                    </div>
                    <div className="flex-itm">
                      <div className="time">{e.endTime}</div>
                      <span className="place">{e.destination.name} </span>
                      <span className="caption-text place-code">
                        {e.destination.code}
                      </span>
                    </div>
                  </div>
                </th>
                {flightClasses.map(flightClass => (
                  <td key={flightClass}>
                    {e.flightClass[flightClass].availableSeats > 0 && (
                      <React.Fragment key={e.fli}>
                        <div
                          className=" price"
                          onClick={() => onFlightSelect(e.id, flightClass)}
                        >
                          {e.flightClass[flightClass].priceInBaseUnit}
                        </div>
                        <div className=" seat-left">
                          {e.flightClass[flightClass].availableSeats} Seat Left
                        </div>
                      </React.Fragment>
                    )}
                    {e.flightClass[flightClass].availableSeats === 0 && (
                      <div className=" price sold-out">SOLD OUT</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default FlightResult;
