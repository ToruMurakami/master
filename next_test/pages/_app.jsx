import '../node_modules/normalize.css/normalize.css'
import '../style/bootstrap.custom.scss';

function MyApp({ Component, pageProps }) {
  console.log("render MyApp");
  return <Component {...pageProps} />
}
export default MyApp
