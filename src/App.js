import './App.css';
import Menu from './component/Menu';
import Footer from './component/Footer';
import RounterURL from './rounter/RounterURL';
import MyRounter from './rounter/MyRouter';
import Home from './component/Home/Home';
import VietNam from './component/VietNam/VietNam';
import World from './component/World';
import Vaccin from './component/Vaccin/Vaccin';
import Download from './component/Download';
import MyRouter from './rounter/MyRouter';
import Contact from './component/Contact';


const sections = [
  {id:1,component:Home, title:'Trang chủ',url:'/'},
  {id:2,component:VietNam, title:'Việt Nam',url:'/vietnam'},
  {id:3,component:World, title:'Thế Giới',url:'/world'},
  {id:4,component:Vaccin, title:'Vaccin',url:'/vaccin'},
  {id:5,component:Download, title:'Tải App',url:'/download'},
  {id:6,component:Contact, title:'Liên hệ',url:'/contact'},
]


function App() {
  return (
    <div className="App">
      <Menu sections={sections} />
      <RounterURL sections={sections} />
      <MyRouter/>
      <Footer />
    </div>
  );
}

export default App;
