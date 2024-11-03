import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

const Index: FC = () => {
	return (
		<>
			<DotPattern
				className={cn(
					"[mask-image:radial-gradient(100vmin_circle_at_center,white,transparent)]",
				)}
			/>
		</>
	);
};

export const Route = createFileRoute("/")({
	component: Index,
});
