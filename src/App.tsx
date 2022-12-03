import Title from './components/Title';
import CokeImage from './assets/coke.png';
import PepsiImage from './assets/pepsi.png';
import PollResults from './components/PollResults';

function App() {
	return (
		<div className="h-screen bg-white bg-gradient-to-r from-coke to-pepsi">
			<header className="flex items-center justify-center">
				<span className="m-3 text-4xl font-bold text-red-400">
					Coke
				</span>
				<span className="m-3 text-2xl text-white">Vs</span>
				<span className="m-3 text-4xl font-bold text-blue-400">
					Pepsi
				</span>
			</header>
			<main>
				<div></div>
				<section className="mt-6 flex content-center justify-around">
					<div>
						<img
							className="w h-auto  w-96 object-contain"
							src={CokeImage}
						/>
					</div>
					<div>
						<img
							className="h-auto w-96 object-contain"
							src={PepsiImage}
						/>
					</div>
				</section>
				<section>
					<PollResults name="Coke" />
				</section>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
