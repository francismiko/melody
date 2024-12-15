import { createFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

import { SpotLightItem, Spotlight } from "@/components/ui/spotlight-layout";

const Index: FC = () => {
	const boxes = Array.from({ length: 100 }).map(() => ({
		id: "12",
		title: "Track Goals1",
		des: "Keeping track of your goals helps you stay organized, motivated, and focused. Regularly monitoring your progress ensures you stay on course.",
	}));

	return (
		<div className="relative px-4 lg:px-56">
			<Spotlight className="gap-16">
				{boxes?.map((box) => {
					return (
						<SpotLightItem key={box.id}>
							<div className="relative z-10 rounded-lg  bg-gradient-to-b from-[#0c0c0c] to-[#252525] w-full h-full mx-auto">
								<div className="relative grid w-full h-full max-h-full p-0 rounded-lg place-content-center 2xl:p-3">
									<div
										className={
											"absolute rounded-lg top-0 left-0 h-full w-full -z-10 bg-center bg-cover"
										}
									/>
									<h1 className="text-2xl font-semibold text-center xl:text-2xl lg:text-xl">
										{box?.title}
									</h1>
									<p className="text-xs text-center lg:text-base">{box?.des}</p>
								</div>
							</div>
						</SpotLightItem>
					);
				})}
			</Spotlight>
		</div>
	);
};

export const Route = createFileRoute("/project/")({
	component: Index,
});
