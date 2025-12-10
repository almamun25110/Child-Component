import logo from './logo.svg';
import './App.css';
import Faqs from './Faqs';
import { toast, ToastContainer } from 'react-toastify';


function App() {
  // const notify = () => toast.info('🦄 Wow so easy!');
  // const notify = () => toast.warn('🦄 Wow so easy!');
  // const notify = () => toast.error('🦄 Wow so easy!');
  const notify = () => toast('🦄 Wow so easy!');
  // const notify = () => toast.success('Successfully Submit!');
  return (
    <div className="App">
      <Faqs/>
      <ToastContainer/>
      <button className='btn' onClick={notify}>Submit</button>
    </div>
  );
}

export default App;
