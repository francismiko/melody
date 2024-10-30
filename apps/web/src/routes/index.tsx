import { createFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

const Index: FC = () => {
	return (
		<></>
	);
};

export const Route = createFileRoute("/")({
	component: Index,
});
