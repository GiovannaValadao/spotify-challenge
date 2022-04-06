import './album.scss'
import AlbumImage from '../../static/images/album.jpeg'

function Album() {
  return (
    <div className="album">
      <div className="album-container">
        <div class="album-container__content">
          <img class="album-container__content-image" src={AlbumImage} />
        </div>
        <ul class="album-container__info">
          <p class="album-container__info-title">
            <strong>ÁLBUM</strong>
          </p>
          <p class="album-container__info-name">
            <strong>AmarElo</strong>
          </p>
          <div class="album-container__info-section">
            <img
              class="album-container__info-section-artist"
              src="https://i.scdn.co/image/ab6761610000e5eb8df392a7b0b69c291ffd9231"
            />
            <p class="album-container__info-section-text">
              <strong>Emicida</strong> &#9679; 2019 &#9679; 11 músicas, 48min
              47s
            </p>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Album
