import Clock from '../../static/images/clock.png'
import './sortingTopics.scss'

function SortingTopics() {
  return (
    <div className="sorting-topics">
      <div className="sorting-topics__container">
        <div className="sorting-topics__container-item">#</div>
        <div className="sorting-topics__container-title">Título</div>
        <div className="sorting-topics__container-album">Álbum</div>
        <div className="sorting-topics__container-add">Adicionado em</div>
        <div className="sorting-topics__container-content">
          <img className="sorting-topics__container-content-icon" src={Clock} />
        </div>
      </div>
    </div>
  )
}
export default SortingTopics
