import Menubar from './components/MenuBar/MenuBar';
import './styles/App.css'
import './styles/MenuBar.css'

function App() {
  return (
    <div className="app">
      {/* Fixed Menu Bar */}
      <Menubar />
      
      {/* Three-Column Grid */}
      <div className="three-column-grid">
        {/* 1st Column for Topics */}
        <div className="column topics">
          {/* Your content for the Topics column */}
        </div>

        {/* 2nd Column for Contents */}
        <div className="column contents">
          {/* Your content for the Contents column */}
          Deepak
        </div>

        {/* 3rd Column for Scroll Bar */}
        <div className="column scroll-bar">
          {/* Your content for the Scroll Bar column */}
        </div>
      </div>
    </div>
  );
}

export default App;
