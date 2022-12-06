import Title from './components/Title';
import CokeImage from './assets/coke.png';
import PepsiImage from './assets/pepsi.png';
import PollResults from './components/PollResults';
import ImageContainer from './components/Image';
import VoteButton from './components/VoteButton';
import { useVotes } from './context/VoteContext';

function App() {
	const { state, dispatch } = useVotes();
	console.log(state);
	return (
		<div className="h-screen w-screen bg-white bg-gradient-to-r from-coke to-pepsi">
			<Title />
			<main>
				<section className="mt-6 flex content-center justify-around">
					<ImageContainer alt="coke" src={CokeImage} />
					<ImageContainer alt="pepsi" src={PepsiImage} />
				</section>
				<section>
					<PollResults name="Coke" percentage={70} />
					<PollResults name="Pepsi" percentage={40} />
				</section>
				<section>
					<div className="m-auto  mt-16 flex w-10/12 flex-col items-center justify-between gap-6 sm:mt-12 sm:flex-row">
						<VoteButton for="coke" color="red" buttonText="Coke" />
						<VoteButton
							for="pepsi"
							color="blue"
							buttonText="Pepsi"
						/>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
