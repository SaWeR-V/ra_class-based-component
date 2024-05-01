import './App.css';
import { ShopItemClass } from './ShopItemClass';
import items from './items'


function App() {
  
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass items={items}/>
    </div>
  </div>
  );
}

export default App;
