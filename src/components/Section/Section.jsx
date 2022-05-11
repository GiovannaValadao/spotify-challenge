import './section.scss'
import Arrow from '../../static/images/lala.jpeg'
import Photo from '../../static/images/photo.png'
import ArrowDown from '../../static/images/arrow-down.jpeg'

function Section() {
  return (
    <div className="section">
      <div className="section-container">
        <img src={Arrow} alt="lala" width="70px" height="50px" />
      </div>
      <div className="section-second-container">
        <div className="section-second-container__user">
          <div className="section-second-container__user-content">
            <img
              className="section-second-container__user-content__photo"
              src={Photo}
            ></img>
          </div>
          <span className="section-second-container__user-name">
            <strong>Giovanna Valadao</strong>
          </span>
          <div className="section-user-arrow-down">
            <img
              className="section-second-container__user-arrow-down-icon"
              src={ArrowDown}
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
