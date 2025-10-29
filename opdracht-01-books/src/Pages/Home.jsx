import '../App.css';
import Header from '../components/Header';
import Layout from '../components/Layout';
import BookList from '../components/Book-list';

const Home = () => {
    return ( 
        <div className="App">
     
      <Layout>
        <BookList />
      </Layout>
    </div>
    );
}
 
export default Home;