import './App.css';
import Websites from './Components/websites'

function App() {
  return (
    <div className="App">
    <div style={{display:'grid',}}>
      <h2 style={{color:'#ECEFF4',}}>Reddit</h2>
        <Websites name="jvscholz" link="https://www.reddit.com/user/jvscholz/"/>
        <Websites name="unixrice" link="https://www.reddit.com/r/unixporn/"/>
        <Websites name="Light Novels" link="https://www.reddit.com/r/LightNovels/"/>
        <Websites name="Manga News" link="https://www.reddit.com/r/manganews/"/>
    </div>
    <div style={{display:'grid',}}>
      <h2 style={{color:'#ECEFF4',}}>Programming</h2>
      <Websites name="The Odin Project" link="https://www.theodinproject.com/"/>
      <Websites name="Github Profile" link="https://github.com/Tweetsauceyeep"/>
      <Websites name="Github" link="https://github.com/"/>
      <Websites name="React Docs" link="https://reactjs.org/docs/getting-started.html"/>
    </div>
    <div style={{display:'grid',}}>
      <h2 style={{color:'#ECEFF4',}}>Misc.</h2>
      <Websites name="Last FM" link="https://www.last.fm/home"/>
      <Websites name="Nyaa.si" link="https://nyaa.si/"/>
      <Websites name="Messenger" link="https://www.messenger.com/"/>
      <Websites name="Youtube"link="https://www.youtube.com/"/>
      <Websites name="Libgen"link="http://libgen.rs/"/>
    </div>
    </div>
  );
}

export default App;
