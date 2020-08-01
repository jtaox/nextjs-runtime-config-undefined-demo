import Layout from "./../components/Layout/ShortLayout";

import "./../scss/global.scss";

const App =  ({ Component, pageProps }) => {
  return (
    <Layout><Component {...pageProps} /></Layout>
  );
};


export default App