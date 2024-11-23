import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

type BlogMetadataType = {
	title: string;
	author: string;
	description: string;
	date: string;
	background: string;
};

const Index: FC = () => {
	const blogMetadata: BlogMetadataType = [
		{
			title: "Title",
			author: "Author",
			description: "Description",
			date: "Date",
			background: "Background",
		},
	];

	return (
		<div className="flex flex-col items-center pt-24 pb-8">
			<div className="w-7xl min-h-[80vh] bg-[#ffffff]/70 backdrop-blur-sm rounded-2xl shadow-natural-1 dark:bg-[#e0c2ff33] dark:shadow-custom-dark" />
			<DotPattern
				className={cn(
					"[mask-image:radial-gradient(100vmin_circle_at_center,white,transparent)] fixed z-[-1]",
				)}
			/>
		</div>
	);
};

export const Route = createFileRoute("/blog/")({
	component: Index,
});
