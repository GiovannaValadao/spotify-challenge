import Album from './components/Album/Album.jsx'
import Section from './components/Section/Section.jsx'
import ManageMusic from './components/ManageMusic/ManageMusic.jsx'

import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <Section />
      <Album />
      <ManageMusic />
    </div>
  )
}
export default App
