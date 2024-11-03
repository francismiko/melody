import { DynamicIsland } from "@/components/dynamic-island";
import { TanStackRouterDevtools } from "@/components/tanstack-router-devtools";
import { ThemeProvider } from "@/providers";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<ThemeProvider defaultTheme="system">
			<Outlet />
			<DynamicIsland />
			<TanStackRouterDevtools position="bottom-right" />
		</ThemeProvider>
	),
	notFoundComponent: () => null,
});
