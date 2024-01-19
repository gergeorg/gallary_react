import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
// import { Provider } from 'react-redux';
// import { store } from './store/store.js';
import { App } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
);