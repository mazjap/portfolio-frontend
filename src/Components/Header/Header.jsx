import './Header.css';

export default function Header(props) {
  const { title, subtitle } = props;

  return (
    <header className='app-header'>
      <div className='header-title'>
        <h1>{ title }</h1>
        <p>{ props.subnote ?? "" }</p>
      </div>
      <p>{ subtitle }</p>
    </header>
  );
}