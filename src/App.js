import './App.css';
import Collections from './components/Collections';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <MainContent />
        <Collections />
      </div>
    </div>

  );
}

export default App;
