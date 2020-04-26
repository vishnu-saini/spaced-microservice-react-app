import './Destination.scss';
import React, { useEffect, useState } from 'react';
import { fetchDestinations } from 'api';

interface IDestinationProps {
  setFocusOn(item: string): void;
  updateFormData(field: string, value: any): void;
}

const Destination: React.FC<IDestinationProps> = props => {
  const { updateFormData, setFocusOn } = props;
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchDestinations().then((response: any) => {
      setDestinations(response);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="content-container destination">
      <div className="dest-sec">
        <span className="label">
          Available {destinations.length} destinations
        </span>
        <div className="row">
          {destinations.map((d: any) => (
            <div key={d.code} className="col-sm-3 dest-card-wrapper">
              <div
                className=" destination-card"
                style={{ backgroundImage: 'url(' + d.imgPath + ')' }}
                onClick={() => {
                  updateFormData('destination', { name: d.name, code: d.code });
                  setFocusOn('departDate');
                }}
              >
                <div className="dest-name">
                  {d.name}
                  <br />
                  <small
                    style={{
                      height: '20px',
                      fontFamily: '"Montserrat"',
                      fontSize: '14px',
                      lineHeight: '1.43'
                    }}
                  >
                    {d.description}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="img/step-1.png" className="dest-image" alt="way"></img>
    </div>
  );
};

export default Destination;
