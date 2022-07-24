import './assets/topbar.css';

function Topbar ({step}) {
  console.log(step)
  const listItem = [ <li><a>About</a></li>,  <li><a>Experience</a></li>, <li><a>Work</a></li>, <li><a>Contact</a></li>]

    const renderListItem = () => {

      return listItem.slice(0, step)
    }


    return (
        <nav>
        <div>
      
        </div>
        <div className='top-menu-wrap'>
          <ol>
            {renderListItem()}
          </ol>
          <button className='resume-btn'>Resume</button>
        </div>

      </nav>
    )
}

export default Topbar