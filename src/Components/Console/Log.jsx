import { useRef, useEffect } from 'react';
import { logPrefixForLevel } from './consoleUtils';
import { useConsole } from '../../ContextProviders/ConsoleContext';

export default function Log(props) {
  const { filter, floatingHeight } = props;
  const { logs, addLog } = useConsole();

  const outputRef = useRef(null);

  useEffect(() => { // Scroll to the bottom of the output on change of logs
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => { // Log welcome message if no other logs exist
    let isMounted = true;
    let timer = setTimeout(() => {
      if (isMounted && logs.length === 0) addLog('Welcome to my portfolio. Type \'help\' to get started');
    }, 1000);

    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, []); // No dependencies because this useEffect should only ever run once

  return (
    <div className='output' ref={outputRef} style={{ paddingBottom: floatingHeight + 8 }}>
      {logs.filter(({ message }) => message.includes(filter)).map(({ message, level }, index) => <p className='log' key={[index + message + level].join('-')}>{logPrefixForLevel(level) + ' ' + message}</p>)}
    </div>
  )
}