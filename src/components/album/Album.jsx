import './album.scss'
import AlbumImage from '../../static/images/album.jpeg'

function Album() {
  return (
    <div className="album">
      <div className="album-container">
        <div class="album-container__content">
          <img
            class="album-container__content-image"
            src={AlbumImage}
            alt="Capa do álbum"
          />
        </div>
        <div class="album-container__info">
          <p class="album-container__info-title">
            <strong>ÁLBUM</strong>
          </p>
          <p class="album-container__info-name">
            <strong>AmarElo</strong>
          </p>
          <div class="album-container__info-section">
            <div class="album-container__info-section-first">
              <img
                class="album-container__info-section-artist"
                src="https://i.scdn.co/image/ab6761610000e5eb8df392a7b0b69c291ffd9231"
                alt="Foto do artista"
              />
              <div class="album-container__info-section-text">
                <span class="album-container__info-section-text-artist">
                  {' '}
                  <strong>Emicida</strong>{' '}
                </span>
              </div>
            </div>
            <span class="album-container__info-section-text-circle">
              &#8226;
            </span>
            <div class="album-container__info-section-second">
              <span class="album-container__info-section-second-topic">
                Album
              </span>
              <span class="album-container__info-section-circle-second">
                &#8226;
              </span>
              <span class="album-container__info-section-second-year">
                2019
              </span>
            </div>
            <span class="album-container__info-section-text-music">
              {' '}
              &#8226; 11 músicas,
            </span>
            <span class="album-container__info-section-text-duration">
              {' '}
              48min
            </span>
            <span class="album-container__info-section-text-seconds">47s</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Album
