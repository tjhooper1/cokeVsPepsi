type ImageContainerProps = {
	src: string;
	alt: string;
};

export default function ImageContainer({ src, alt }: ImageContainerProps) {
	return (
		<div>
			<img
				className="w h-auto  w-96 object-contain"
				alt={alt}
				src={src}
			/>
		</div>
	);
}
