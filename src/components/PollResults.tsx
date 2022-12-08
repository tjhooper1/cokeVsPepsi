import { percentageMappings } from '../utils/barPercentageClasses';

type PollResultsType = {
	name: string;
	percentage: number;
	voteCount: number;
};

export default function PollResults({
	name,
	percentage,
	voteCount,
}: PollResultsType) {
	const barWidth: string = percentageMappings[percentage];
	const barColor = name === 'Coke' ? 'bg-red-700' : 'bg-blue-700';

	return (
		<div className="m-auto mt-6 mb-9 flex w-10/12 items-center justify-between">
			<div className=" h-6 w-3/4 rounded-xl border-none bg-gray-300">
				<div className={`h-6 ${barWidth} rounded-xl ${barColor}`} />
				<div className="flex justify-center gap-3">
					<p className=" text-2xl text-white">{voteCount} votes</p>
					<p className=" self-center text-lg text-white">
						{percentage}%
					</p>
				</div>
			</div>
			<h1 className="text-center text-2xl font-bold text-white">
				{name}
			</h1>
		</div>
	);
}
