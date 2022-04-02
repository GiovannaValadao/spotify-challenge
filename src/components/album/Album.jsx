import './album.css'
import AlbumImage from '../../static/images/album.jpeg'

function Album() {
  return (
    <div className="album">
      <div className="album-container">
        <div class="album-container__content">
          <img src={AlbumImage} />
        </div>
      </div>
    </div>
  )
}
export default Album
