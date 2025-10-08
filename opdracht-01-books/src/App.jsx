import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <BookList />
      </Layout>
    </div>
  );
}

export default App;