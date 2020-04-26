import './SeatLayout.scss';
import React from 'react';
import Selected from '../../img/done.png';
import Sleep from '../../img/zzz.png';
import Chat from '../../img/chat.png';
import Busy from '../../img/busy.png';
import BookedSeat from 'model/BookedSeat';

interface ISeatLayoutProps {
  bookedSeats: BookedSeat[];
  selectedSeats: string[];
  setSelectedSeats: (selectedSeat: string[]) => void;
  seatCount: number;
}

const SeatLayout: React.FC<ISeatLayoutProps> = props => {
  const { bookedSeats, seatCount, selectedSeats, setSelectedSeats } = props;
  const rows = 12;
  const rowSeats = ['A', 'B', 'C', 'D', 'E', 'F'];
  const bookedSeatsMap = new Map();

  bookedSeats.forEach(e => {
    bookedSeatsMap.set(e.seatNumber, e.travelMood);
  });

  let key = 0;
  const layoutJsx = [];
  for (let i = 1; i <= rows; i++) {
    const rowJsxArr = [];
    for (let j = 0; j < rowSeats.length; j++) {
      const booked = bookedSeatsMap.get(i + rowSeats[j]);
      if (booked) {
        let icon;
        switch (booked) {
          case 'chat':
            icon = Chat;
            break;
          case 'dnd':
            icon = Sleep;
            break;
          case 'business':
            icon = Busy;
            break;
        }
        rowJsxArr.push(
          <div className=" seat-placeholder booked" key={key++}>
            <img src={icon} alt="seat-mood" />
          </div>
        );
      } else if (selectedSeats.includes(i + rowSeats[j])) {
        rowJsxArr.push(
          <div
            key={key++}
            className="seat-placeholder  selected"
            onClick={() =>
              setSelectedSeats(
                selectedSeats.filter(item => item !== i + rowSeats[j])
              )
            }
          >
            <img src={Selected} alt="selected" />
          </div>
        );
      } else
        rowJsxArr.push(
          <div
            key={key++}
            className="seat-placeholder available"
            onClick={() => {
              if (selectedSeats.length >= seatCount) return;
              selectedSeats.push(i + rowSeats[j]);
              setSelectedSeats([...selectedSeats]);
            }}
          ></div>
        );

      if (j === 2) {
        rowJsxArr.push(
          <div className="row-num" key={key++}>
            {i}
          </div>
        );
      }
    }
    layoutJsx.push(<div key={key++}>{rowJsxArr}</div>);
  }

  return (
    <div className="seat-layout">
      <div>{layoutJsx}</div>
    </div>
  );
};

export default SeatLayout;
