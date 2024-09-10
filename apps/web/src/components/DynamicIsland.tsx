import type { FC } from "react";

export const DynamicIsland: FC = () => {
	return (
		<div className="flex w-full h-24 fixed justify-center items-center">
			<div className="flex w-48 h-12 bg-black rounded-full hover:w-192">
				<div />
			</div>
		</div>
	);
};
