import './Passenger.scss';
import React, { useState, useEffect } from 'react';
import Plus from 'img/plus.png';
import Minus from 'img/minus.png';
import Shuttle from 'img/shuttle-scheme-img.png';
import SearchModel from 'model/SearchModel';
import { fetchFlightClasses } from 'api';

interface IPassengerProps {
  updateFormData(field: string, value: any): void;
  formData: SearchModel;
}

const Passenger: React.FC<IPassengerProps> = props => {
  const { updateFormData, formData } = props;
  const { passenger } = formData;
  const [adults, setAdults] = useState(passenger.adults);
  const [children, setChildren] = useState(passenger.children);
  const [infants, setInfants] = useState(passenger.infants);
  const [flightClasses, setFlightClasses] = useState<any[]>([]);

  useEffect(() => {
    fetchFlightClasses().then(response => setFlightClasses(response));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateFormData('passenger', {
      adults,
      children,
      infants,
      total: adults + children + infants
    });
  }, [adults, children, infants]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <div className="content-container passenger-container">
        <div className="flex-container">
          {flightClasses.map((flightClass: any) => (
            <div
              key={flightClass.value}
              className={
                'flex-itm label ' +
                (formData.class === flightClass.value ? 'active' : '')
              }
              onClick={() => updateFormData('class', flightClass.value)}
            >
              {flightClass.label}
            </div>
          ))}
        </div>
        <div className="flex-container seat-count-container">
          <div className=" flex-itm">
            <div className="label">ADULTS</div>
            <div className="number-input">
              <img
                src={Minus}
                alt="minus"
                className="number-input-handle"
                onClick={() => {
                  if (adults > 0) setAdults(adults - 1);
                }}
              ></img>
              <span className="number-input-value">{adults}</span>
              <img
                src={Plus}
                alt="plus"
                className="number-input-handle"
                onClick={() => setAdults(adults + 1)}
              ></img>
            </div>
          </div>
          <div className=" flex-itm">
            <div className="label">CHILDREN AGE 2-17</div>
            <div className="number-input">
              <img
                src={Minus}
                alt="minus"
                className="number-input-handle"
                onClick={() => {
                  if (children > 0) setChildren(children - 1);
                }}
              ></img>
              <span className="number-input-value">{children}</span>
              <img
                src={Plus}
                alt="plus"
                className="number-input-handle"
                onClick={() => setChildren(children + 1)}
              ></img>
            </div>
          </div>
          <div className=" flex-itm">
            <div className="label">LAP INFANT AGE 0-2</div>
            <div className="number-input">
              <img
                src={Minus}
                alt="minus"
                className="number-input-handle"
                onClick={() => {
                  if (infants > 0) setInfants(infants - 1);
                }}
              ></img>
              <span className="number-input-value">{infants}</span>
              <img
                src={Plus}
                alt="plus"
                className="number-input-handle"
                onClick={() => setInfants(infants + 1)}
              ></img>
            </div>
          </div>
        </div>
        <div className="shuttle-img-wrapper">
          <img src={Shuttle} alt="shuttle" />
          {flightClasses.map((flightClass: any) => (
            <div
              key={flightClass.value}
              className={
                (flightClass.value === '1st' ? 'first' : flightClass.value) +
                '-count ' +
                (formData.class === flightClass.value ? 'active' : '')
              }
            >
              <div className="available-count">{flightClass.seats} </div>
              Seats
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Passenger;
