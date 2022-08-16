import * as React from 'react';

import Index from './Index'

// Import Redux
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Index/>
    </Provider>
  );
}

export default App;