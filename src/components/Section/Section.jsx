import './section.scss'
import Arrow from '../../static/images/arrow.jpeg'
import Photo from '../../static/images/photo.png'
import ArrowDown from '../../static/images/arrow-down.jpeg'

function Section() {
  return (
    <div className="section">
      <div className="section-container">
        <img
          src={Arrow}
          alt="setas para avançar ou voltar"
          width="70px"
          height="50px"
        />
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
              alt="seta para baixo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
