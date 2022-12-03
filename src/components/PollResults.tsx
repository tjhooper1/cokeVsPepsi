// poll container

type PollResultsType = {
	name: string;
};

export default function PollResults({ name }: PollResultsType) {
	return (
		<div className="m-auto mt-6 flex w-10/12 items-center justify-between">
			<div className=" h-3 w-3/4 rounded-xl bg-gray-200" />
			<h1 className="text-center text-2xl font-bold text-white">
				{name}
			</h1>
		</div>
	);
}
