import GlobalStyle from './styles/global';
import Title from './components/Title';
import Article from './components/Article';
import ToggleButton from './components/ToggleButton';
import './App.css';

function App() {
  return (
    <>
    <GlobalStyle />
    <Title>Light / Dark Mode - Toggle Button</Title>
    <ToggleButton />
    <Article>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum optio ab porro magni in sunt ipsam,
      doloremque minima, itaque sapiente consequatur, repellat velit voluptatum accusantium aperiam. Nostrum
      sunt reprehenderit nemo!
    </Article>
    </>
  );
}

export default App;
