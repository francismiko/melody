import { cn } from "@/libs/utils";
import { useRef, useState, type FC } from "react";

export const DynamicIsland: FC = () => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseEnter = () => {
		timerRef.current = setTimeout(() => {
			setIsHover(true);
		}, 700);
	};

	const handleMouseLeave = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
		}
		setIsHover(false);
	};

	return (
		<div className="flex w-full fixed justify-center top-8 z-50">
			<div
				onMouseEnter={handleMouseEnter}
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
