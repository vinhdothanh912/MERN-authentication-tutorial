import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/App';
import store from 'src/stores';
import 'src/themes/index.scss';
import { WorkoutsContextProvider } from './context/WorkoutContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider>
        <WorkoutsContextProvider>
          <App />
        </WorkoutsContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
