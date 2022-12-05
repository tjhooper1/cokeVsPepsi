import Title from './components/Title';
import CokeImage from './assets/coke.png';
import PepsiImage from './assets/pepsi.png';
import PollResults from './components/PollResults';
import ImageContainer from './components/Image';

function App() {
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
                    <div className='m-auto  sm:mt-12 mt-16 flex sm:flex-row flex-col gap-6 w-10/12 items-center justify-between'>
                        <button className='sm:w-1/4 w-1/2 h-14 sm:h-12 bg-red-400 text-white font-bold sm:text-2xl rounded-xl hover:bg-red-300'>Coke</button>
                        <button className='sm:w-1/4 w-1/2 h-14 sm:h-12 bg-blue-400 text-white font-bold sm:text-2xl rounded-xl hover:bg-blue-300'>Pepsi</button>
                    </div>
                </section>
			</main>
		</div>
	);
}

export default App;
