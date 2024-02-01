import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <Toaster />
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
