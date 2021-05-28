import logo from './logo.svg';
import MainComponent from './components/MainComponent';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="main">
      <Helmet>
      <title>SkilWil: Earn and learn</title>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/skilwilicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
      name="description"
      content="Intellect is the most underrated superpower!"
      />
      <meta name="description" content="Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards. Also, ask your subject doubts for free." />
      <meta name="theme-color" content="#008f68" />
    </Helmet>
      <MainComponent/>
    </div>
  );
}

export default App;
