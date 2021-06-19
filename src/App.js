import './App.css';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';

function App() {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
    </div>
  );
}

export default App;
