import Welcome from './component/welcome';
import HeaderCostum from "./component/HeaderCostum";
import ProfileCard from "./component/profilecard";
import Counter from "./component/Counter";
import './App.css';
function App() {
  return (
    <div className='container'>
      <Welcome />
      <HeaderCostum />
      <ProfileCard />
      <Counter />
      <main>
        <h1>Selamat datang di Website</h1>
        <p>Ini adalah konten utama.</p>
      </main>
    </div>
  );
}

export default App;


