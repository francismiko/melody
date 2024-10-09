import { lazy } from "react";

export const TanStackRouterDevtools =
	process.env.NODE_ENV === "production"
		? () => null
		: lazy(() =>
				import("@tanstack/router-devtools").then(
					({ TanStackRouterDevtools }) => ({
						default: TanStackRouterDevtools,
					}),
				),
			);
