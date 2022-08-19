import Head from 'next/head'
import Layout from '../components/Layout/Layout_component'
import { Provider } from "react-redux";
import store from '../Redux/store'

//All global css here 
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          {/* All meta tags and Title here */}
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no" />
          <title>UpStox</title>
          <meta content="" name="description" />
          <meta content="" name="keywords" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
