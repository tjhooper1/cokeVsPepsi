type VoteButtonType = {
	buttonText: string;
	color: string;
	for: string;
};

export default function VoteButton({ buttonText, color }: VoteButtonType) {
	console.log(color);
	const buttonColorClass = color === 'red' ? 'bg-red-500' : 'bg-blue-500';
	const buttonHoverColorClass =
		color === 'red' ? 'hover:bg-red-300' : 'hover:bg-blue-300';
	const buttonActiveColorClass =
		color === 'red' ? 'active:bg-red-400' : 'active:bg-blue-400';
	return (
		<button
			className={`h-14 w-1/2 rounded-xl ${buttonColorClass} font-bold text-white ${buttonHoverColorClass} ${buttonActiveColorClass} sm:h-12 sm:w-1/4 sm:text-2xl`}
		>
			{buttonText}
		</button>
	);
}
