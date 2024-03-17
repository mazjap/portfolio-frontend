import { forwardRef } from 'react';
import { ReactComponent as Options } from './Assets/Options.svg';
import { ReactComponent as SidebarLeft } from './Assets/SidebarLeft.svg';
import { ReactComponent as SidebarRight } from './Assets/SidebarRight.svg';
import { ReactComponent as Trash } from './Assets/Trash.svg';

const svgs = {
    'options' : Options,
    'sidebarleft' : SidebarLeft,
    'sidebarright' : SidebarRight,
    'trash' : Trash
};

const idToSvg = (id) => svgs[id.trim().toLowerCase()] ?? Trash;

const ConsoleButton = forwardRef((props, ref) => {
    const { isActive, onClick } = props;
    const color = props.color ?? (isActive ? "#097aff" : "white");
    const svg = props.svg ?? '';

    return (
        <button className='console-button' onClick={ onClick } ref={ ref }>
            <SvgLayer svg={svg} color={color} />
        </button>
    );
})

function SvgLayer({ svg, color }) {
    const SVG = idToSvg(svg);

    return <SVG fill={color} stroke={color} className='console-icon' />
}

export default ConsoleButton;