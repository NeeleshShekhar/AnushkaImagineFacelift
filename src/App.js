import logo from './logo.svg';
import MainComponent from './components/MainComponent';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="main">
      <Helmet>
      <title>SkilWil: Earn and learn</title>
      <meta name="description" content="Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards. Also, ask your subject doubts for free." />
      <meta name="theme-color" content="#008f68" />
    </Helmet>
      <MainComponent/>
    </div>
  );
}

export default App;
