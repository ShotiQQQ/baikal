import './App.scss';
import Calculator from './Components/Calculator/Calculator';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Calculator />
      </Layout>
    </div>
  );
}

export default App;
