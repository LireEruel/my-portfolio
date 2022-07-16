import './assets/topbar.css';

function Topbar () {


    return (
        <nav>
        <div>
          정서희
        </div>
        <div className='top-menu-wrap'>
          <ol>
            <li><a>About</a></li>
            <li><a>Experience</a></li>
            <li><a>Work</a></li>
            <li><a>Contact</a></li>
          </ol>
          <button className='resume-btn'>resume</button>
        </div>

      </nav>
    )
}

export default Topbar