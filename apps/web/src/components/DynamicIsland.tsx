import type { FC } from "react";

export const DynamicIsland: FC = () => {
	return (
		<div className="flex w-full fixed justify-center mt-8">
			<div className="flex w-48 h-8 relative bg-black rounded-full transition-all duration-400 delay-0 ease-in-out hover:w-192 hover:h-14 hover:delay-300 before:absolute before:content-[''] before:-inset-4 hover:before:-inset-8">
				<div />
			</div>
		</div>
	);
};
