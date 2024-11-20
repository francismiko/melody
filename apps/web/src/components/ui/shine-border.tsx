"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

type TColorProp = string | string[];

interface ShineBorderProps {
	borderRadius?: number;
	borderWidth?: number;
	duration?: number;
	color?: TColorProp;
	className?: string;
	children: ReactNode;
}

export function ShineBorder({
	borderRadius = 8,
	borderWidth = 1,
	duration = 14,
	color = "#000000",
	className,
	children,
}: ShineBorderProps) {
	return (
		<div
			style={
				{
					"--border-radius": `${borderRadius}px`,
				} as CSSProperties
			}
			className={cn(
				"relative grid w-fit p-[1px] place-items-center rounded-[--border-radius] bg-white text-black dark:bg-black dark:text-white",
				className,
			)}
		>
			<div
				style={
					{
						"--border-width": `${borderWidth}px`,
						"--border-radius": `${borderRadius}px`,
						"--duration": `${duration}s`,
						"--mask-linear-gradient":
							"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
						"--background-radial-gradient": `radial-gradient(transparent,${Array.isArray(color) ? color.join(",") : color},transparent)`,
					} as CSSProperties
				}
				className={`pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:200%_200%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`}
			/>
			{children}
		</div>
	);
}

export default ShineBorder;
