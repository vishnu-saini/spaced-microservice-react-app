import './Origin.scss';
import React, { useState } from 'react';
import { fetchOrigins } from 'api';
import Close from 'img/close.png';

interface IOriginProps {
  setFocusOn(item: string): void;
  updateFormData(field: string, value: any): void;
}
const Origin: React.FC<IOriginProps> = props => {
  const { updateFormData, setFocusOn } = props;
  const [origins, setOrigins] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = async (event: any) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() === '') {
      setOrigins([]);
    } else
      fetchOrigins(event.target.value).then((response: any) => {
        setOrigins(response);
      });
  };

  return (
    <div className="content-container origin">
      <input
        className="origin-input"
        type="text"
        value={inputValue}
        placeholder="Enter origin here"
        onChange={onInputChange}
      />
      <div
        className="clear-origin"
        onClick={() => {
          setInputValue('');
          setOrigins([]);
        }}
      >
        <img src={Close} alt="close" />
      </div>

      {origins.map(o => (
        <div
          key={o.code}
          className="origin-suggestion"
          onClick={() => {
            updateFormData('origin', { name: o.name, code: o.code });
            setFocusOn('destination');
            setOrigins([]);
          }}
        >
          {o.fullName}
          <small className="caption-text">{o.code}</small>
        </div>
      ))}
    </div>
  );
};

export default Origin;
