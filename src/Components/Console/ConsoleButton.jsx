import { forwardRef } from 'react';
import { ReactSVG } from 'react-svg';

const ConsoleButton = forwardRef((props, ref) => {
  const { isActive, onClick } = props;
  const color = props.color ?? (isActive ? "#097aff" : "white");
  const svg = props.svg ?? 'trash';

  return (
    <button className='console-button' onClick={onClick} ref={ref}>
      <ReactSVG
        src={`${process.env.PUBLIC_URL}/images/icons/${svg}.svg`}
        beforeInjection={(svg) => {
          svg.setAttribute('fill', color);
          svg.setAttribute('stroke', color);
        }}
        alt={svg}
        className="console-icon"
      />
    </button>
  );
})

export default ConsoleButton;