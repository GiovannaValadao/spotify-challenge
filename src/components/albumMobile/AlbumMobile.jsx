import './albumMobile.scss'
import AlbumImage from '../../static/images/album.jpeg'

function Album() {
  return (
    <div className="album-mobile">
      <div className="album-mobile__container">
        <div class="album-mobile__container-content">
          <img class="album-mobile__container-content-image" src={AlbumImage} />
        </div>
        <ul class="album-mobile__container-info">
          <p class="album-mobile__container-info-title">
            <strong>Amarelo</strong>
          </p>
          <div class="album-mobile__container-info-name">
            <img
              class="album-mobile__container-info-section-artist"
              src="https://i.scdn.co/image/ab6761610000e5eb8df392a7b0b69c291ffd9231"
            />
            <p>
              {' '}
              <strong>Emicida</strong>
            </p>
          </div>
          <div class="album-mobile__container-info-section">
            <p class="album-mobile__container-info-section-text">
              Album &#8226; 2019
            </p>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Album
