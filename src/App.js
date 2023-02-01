
import './App.css';
import Container from './Container';
import Nav from './Nav';
import { Provider } from "react-redux"
import store  from './redux/store';

function App() {
  return (
   <div className=''>
    <Provider store={store}>
    <Nav/>
    <Container/>
    </Provider>
   </div>
  );
}

export default App;
