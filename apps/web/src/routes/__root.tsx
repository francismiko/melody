import { DynamicIsland, TanStackRouterDevtools } from "@/components";
import { ThemeProvider } from "@/provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<ThemeProvider defaultTheme="dark">
			<Outlet />
			<DynamicIsland />
			<TanStackRouterDevtools />
		</ThemeProvider>
	),
});
