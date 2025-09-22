import Welcome from './component/welcome';
import HeaderCostum from "./component/HeaderCostum";
import ProfileCard from "./component/profilecard";
import Counter from "./component/Counter";
import './App.css';
import './index.css'

function App() {
  return (
    <div className='container'>
      <Welcome />
      <HeaderCostum />
      <ProfileCard />

      <Counter />
      <main>
        <h1>Selamat datang di Website Belajar Super Dede</h1>

      </main>
    </div>
  );
}

export default App;


