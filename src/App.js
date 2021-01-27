import './App.css';
import Row from './components/Row/Row.component';
import request from './request/request';

function App() {
  return (
    <div className="App">
      <h1>testing</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
