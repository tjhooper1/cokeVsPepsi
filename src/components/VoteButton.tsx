type VoteButtonType = {
	buttonText: string;
    color: string;
    for: string
};

export default function VoteButton({ buttonText, color }: VoteButtonType) {
	return (
		<button className={`h-14 w-1/2 rounded-xl bg-${color}-400 font-bold text-white hover:bg-red-300 active:bg-red-400 sm:h-12 sm:w-1/4 sm:text-2xl`}>
			{buttonText}
		</button>
	);
}
