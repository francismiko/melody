import { cn } from "@/libs/utils";
import { debounce } from "radash";
import { useCallback, useState, type FC } from "react";

export const DynamicIsland: FC = () => {
	const [isHover, setIsHover] = useState<boolean>(false);

	const debouncedHover = useCallback(
		debounce({ delay: 800 }, () => {
			setIsHover(true);
		}),
		[],
	);

	const handleMouseLeave = () => {};

	return (
		<div className="flex w-full fixed justify-center top-8 z-50">
			<div
				onMouseEnter={debouncedHover}
				onMouseLeave={handleMouseLeave}
				className="flex w-48 h-8 p-1 relative place-content-between bg-black rounded-full transition-all duration-300 delay-0 ease-in-out hover:w-192 hover:h-14 hover:delay-500 before:absolute before:content-[''] before:-inset-4 hover:before:-inset-8 hover:px-8 hover:py-2"
			>
				<div className={cn(!isHover && "hidden", "bg-white w-16 h-full")} />
				<div className={cn(!isHover && "hidden", "bg-white w-16 h-full")} />
				<div className={cn(!isHover && "hidden", "bg-white w-16 h-full")} />
			</div>
		</div>
	);
};
