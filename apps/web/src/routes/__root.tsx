import { TanStackRouterDevtools } from "@/components";
import { DynamicIsland } from "@/components/DynamicIsland";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<DynamicIsland />
			<TanStackRouterDevtools />
		</>
	),
});
