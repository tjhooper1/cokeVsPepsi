type TitleProps = {
	title: string;
	size?: 'small' | 'medium' | 'large';
};

export default function Title({ title, size }: TitleProps) {
	const textSize =
		size === 'large'
			? 'text-4xl'
			: size === 'medium'
			? 'text-2xl'
			: 'text-xl';

	return <h1 className={`font-bold ${textSize} text-grey`}>{title}</h1>;
}
