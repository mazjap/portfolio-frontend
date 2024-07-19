import { forwardRef } from 'react';

import { ReactComponent as Options } from './icons/options.svg';
import { ReactComponent as SidebarLeft } from './icons/sidebarLeft.svg';
import { ReactComponent as SidebarRight } from './icons/sidebarRight.svg';
import { ReactComponent as Trash } from './icons/trash.svg';

const svgs = {
  'options' : Options,
  'sidebarLeft' : SidebarLeft,
  'sidebarRight' : SidebarRight,
  'trash' : Trash
};

const ConsoleButton = forwardRef((props, ref) => {
  const { isActive, onClick } = props;
  const color = props.color ?? (isActive ? "#097aff" : "white");
  const svg = props.svg ?? 'trash';

  return (
    <button className='console-button' onClick={onClick} ref={ref}>
      <SvgLayer svg={svg} color={color} />
    </button>
  );
})

function SvgLayer({ svg, color }) {
  const SVG = svgs[svg] ?? Trash;

  return <SVG fill={color} stroke={color} className='console-icon' />
}

export default ConsoleButton;