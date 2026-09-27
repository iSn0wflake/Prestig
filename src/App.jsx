import './App.scss';
import Header from './app/components/layout/header/header';
import Intro from './app/components/screens/Intro/Intro';
import Footer from './app/components/layout/footer/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            <Footer />
        </div>
    );
}

export default App;
