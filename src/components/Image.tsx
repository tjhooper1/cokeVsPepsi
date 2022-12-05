type ImageContainerProps = {
	src: string;
	alt: string;
};

export default function ImageContainer({ src }: ImageContainerProps) {
	return (
		<div>
			<img className="w h-auto  w-96 object-contain" src={src} />
		</div>
	);
}
