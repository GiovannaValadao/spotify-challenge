import './manageMusic.scss'
import Play from '../../static/images/play.png'
import Like from '../../static/images/like.png'
import Download from '../../static/images/download.png'
import ThreeCircle from '../../static/images/three-circle.png'

function ManageMusic() {
  return (
    <div className="manage-music">
      <div className="manage-music-container">
        <div class="manage-music-container__content">
          <img
            class="manage-music-container__content-play"
            src={Play}
            alt="Ícone de play"
          />
        </div>
        <div class="manage-music-container__content">
          <img
            class="manage-music-container__content-like"
            src={Like}
            alt="Ícone de like"
          />
        </div>
        <div class="manage-music-container__content">
          <img
            class="manage-music-container__content-download"
            src={Download}
            alt="Ícone de download"
          />
        </div>
        <div class="manage-music-container__content">
          <img
            class="manage-music-container__content-three-circle"
            src={ThreeCircle}
            alt="Ícone de opçoes"
          />
        </div>
      </div>
    </div>
  )
}
export default ManageMusic
