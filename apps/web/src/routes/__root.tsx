import { DynamicIsland, TanStackRouterDevtools } from "@/components";
import { ThemeProvider } from "@/providers";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<ThemeProvider defaultTheme="light">
			<Outlet />
			<DynamicIsland />
			<TanStackRouterDevtools />
		</ThemeProvider>
	),
});
