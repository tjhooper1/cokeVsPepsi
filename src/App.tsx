import Title from './components/Title';
import CokeImage from './assets/coke.png';
import PepsiImage from './assets/pepsi.png';
import PollResults from './components/PollResults';
import ImageContainer from './components/Image';
import VoteButton from './components/VoteButton';
import { useVotes } from './context/VoteContext';

function App() {
	const { state } = useVotes();
	const { cokeVotes, pepsiVotes, totalVotes } = state;

	//  calculate percentage of votes for each drink
	function drinkVotes() {
		const cokePercent = Math.round((cokeVotes / totalVotes) * 100) || 0;
		const pepsiPercent = Math.round((pepsiVotes / totalVotes) * 100) || 0;
		return { cokePercent, pepsiPercent };
	}

	const { cokePercent, pepsiPercent } = drinkVotes();
	
	return (
		<div className="h-screen w-screen bg-white bg-gradient-to-r from-coke to-pepsi">
			<Title />
			<main>
				<section className="mt-6 flex content-center justify-around">
					<ImageContainer alt="coke" src={CokeImage} />
					<ImageContainer alt="pepsi" src={PepsiImage} />
				</section>
				<section>
					<PollResults
						voteCount={cokeVotes}
						name="Coke"
						percentage={cokePercent}
					/>
					<PollResults
						voteCount={pepsiVotes}
						name="Pepsi"
						percentage={pepsiPercent}
					/>
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
