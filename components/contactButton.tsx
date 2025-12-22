type ContactButtonProps = {
  word: string;
};

export default function ContactButton({ word }: ContactButtonProps) {
    return (
		<button
			className="rounded-md inline-flex items-center justify-center bg-black px-10 py-3 text-sm font-medium text-white transition-all duration-200 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
		>
			<span>{word}</span>
		</button>
    );
}