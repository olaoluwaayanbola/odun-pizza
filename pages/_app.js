import '../styles/globals.css'
import Layout from '../Components/Layout'
import store from '../redux/store'
import { Provider } from "react-redux";
import { Providertheme } from '../contex/theme';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Providertheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providertheme>
    </Provider>
  );
}
export default MyApp
