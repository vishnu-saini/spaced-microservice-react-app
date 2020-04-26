import './DepartDate.scss';
import React, { useState, useEffect } from 'react';
import SearchModel from 'model/SearchModel';
import ItemsCarousel from 'react-items-carousel';
import RightArrow from 'img/right.png';
import LeftArrow from 'img/left.png';
import moment from 'moment';
import { fetchDepartDates } from 'api';

interface IDepartDateProps {
  updateFormData(field: string, value: any): void;
  formData: SearchModel;
  setFocusOn(item: string): void;
}

const DepartDate: React.FC<IDepartDateProps> = props => {
  const { updateFormData, formData, setFocusOn } = props;
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [departDates, setDepartDates] = useState([]);
  const chevronWidth = 40;
  const date = formData.departDate;

  useEffect(() => {
    if (formData.origin.code && formData.origin.code) {
      fetchDepartDates(formData.origin.code, formData.destination.code).then(
        (response: any) => {
          setDepartDates(response);
        }
      );
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (formData.origin.code === '' || formData.destination.code === '') {
    return (
      <div className="content-container depart-date-container ">
        <span className="label">PLEASE SELECT ORIGIN AND DESTINATION</span>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="content-container depart-date-container ">
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
                key={item.date}
                className={
                  'date-box-container ' +
                  (item.date === date ? ' selected ' : '') +
                  (item.isSoldOut ? ' sold-out ' : '')
                }
              >
                <div className="day">{moment(item.date).format('ddd')}</div>
                <div
                  className={'date-box '}
                  onClick={() => {
                    if (!item.isSoldOut) {
                      updateFormData('departDate', item.date);
                      setFocusOn('passenger');
                    }
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
    </React.Fragment>
  );
};

export default DepartDate;
