import { useState } from 'react'


export default function Navigation() {

  return (
    <div className='navigation'>
      <DropDown text='self (Portfolio.Jordan<Christensen>)'>
        <DropDown text='experience (Portfolio.Experience)' to="#experience" />
        <DropDown text='projects (Portfolio.Projects)' to="#projects" />
        <DropDown text='skills (Portfolio.Skills)' to="#skills" />
        <DropDown text='education (Portfolio.Education)' to="#education" />
        <DropDown text='contact (Portfolio.Contact)' to='#contact' />
      </DropDown>
    </div>
  )
}

function DropDown(props) {
  const { text } = props

  const [isExpanded, setExpanded] = useState(false)

  return (
    <div>
      <div className='dropdown-inline'>
        { props.to && (<a style={{ marginLeft: '40px' }} href={props.to}>{text}</a>) }
        { props.children && (
            <>
              <button onClick={ () => setExpanded(oldVal => !oldVal) }>
                { isExpanded ? "▼" : "▶" }
              </button>
              <p>{text}</p>
            </>
        )}
      </div>
      { isExpanded && props.children }
    </div>
  )
}