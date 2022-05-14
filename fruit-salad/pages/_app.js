import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { store } from '../store'
import { Provider } from 'react-redux'

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
