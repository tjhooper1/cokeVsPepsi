type PollResultsType = {
	name: string;
	percentage: number;
};

export default function PollResults({ name, percentage }: PollResultsType) {
	const color = name === 'Coke' ? 'red' : 'blue';
	const barWidth = 'w-[' + percentage.toString() + '%]';

	return (
		<div className="m-auto mt-6 mb-7 flex w-10/12 items-center justify-between">
			<div className=" h-6 w-3/4 rounded-xl border-none bg-gray-300">
				<div className={`h-6 ${barWidth} rounded-xl bg-${color}-700`} />
				<div className="flex justify-center gap-3">
					<p className="text-center  text-white">100 votes</p>
					<p className="text-center text-white">40%</p>
				</div>
			</div>
			<h1 className="text-center text-2xl font-bold text-white">
				{name}
			</h1>
		</div>
	);
}
