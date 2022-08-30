import './App.css';
import Title from './components/Title/Title';
import Testimony from './components/Testimony/Testimony'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <Testimony 
          name="John Doe"
          country="Canada"
          position="Software Engineer"
          enterprise="Amazon"
          testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
          image="john"/>
          <Testimony 
          name="Leonardo "
          country="Spain"
          position="Software Engineer"
          enterprise="ChatDesk"
          testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
          image="leonardo"/>
          <Testimony 
          name="Maryam"
          country="Canada"
          position="Software Engineer"
          enterprise="Spotify"
          testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          image="maryam"/>
      </div>
    </div>
  );
}

export default App;