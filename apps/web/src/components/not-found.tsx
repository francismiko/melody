import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import GradualSpacing from "./ui/gradual-spacing";

export const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
			<GradualSpacing
				className="font-display z-100 font-mono text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-6xl md:leading-[5rem]"
				text="404 Not Found"
			/>
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				repeatDelay={1}
				className={cn(
					"[mask-image:radial-gradient(100vmin_circle_at_center,white,transparent)]",
				)}
			/>
		</div>
	);
};

export default NotFound;
