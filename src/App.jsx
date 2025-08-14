import './App.css';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import Header from './components/Header';
import { Products } from './components/Products';

function App() {
	return (
		<>
			<Header />
			<Products />
			<Form />
			<Footer />
		</>
	);
}

export default App;
