import Footer from './components/Footer';
import GymActions from './components/GymActions';
import GymList from './components/GymList';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { requests } from './app/features/gymSlice';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requests.getAllGyms());
    }, []);
    return (
        <>
            <Navbar />
            <GymActions />
            <main>
                <GymList />
            </main>
            <Footer />
        </>
    );
}

export default App;
