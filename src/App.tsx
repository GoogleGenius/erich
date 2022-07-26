import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Profile from './components/Profile';
import projects from './data/projects';
import { FC } from 'react';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__grid">
          <Profile />
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
        <div className="App__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
