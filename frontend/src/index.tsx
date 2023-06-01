import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/App';
import store from 'src/stores';
import 'src/themes/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Roboto-400',
            colorPrimary: '#48ABE2',
            colorText: '#292D32',
            colorError: '#FF7777',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
