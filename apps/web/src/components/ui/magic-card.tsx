"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
	useCallback,
	useEffect,
	type HTMLAttributes,
	type MouseEvent,
} from "react";

export interface MagicCardProps extends HTMLAttributes<HTMLDivElement> {
	gradientSize?: number;
	gradientColor?: string;
	gradientOpacity?: number;
}

export function MagicCard({
	children,
	className,
	gradientSize = 200,
	gradientColor = "#262626",
	gradientOpacity = 0.8,
}: MagicCardProps) {
	const mouseX = useMotionValue(-gradientSize);
	const mouseY = useMotionValue(-gradientSize);

	const handleMouseMove = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			const { left, top } = e.currentTarget.getBoundingClientRect();
			mouseX.set(e.clientX - left);
			mouseY.set(e.clientY - top);
		},
		[mouseX, mouseY],
	);

	const handleMouseLeave = useCallback(() => {
		mouseX.set(-gradientSize);
		mouseY.set(-gradientSize);
	}, [mouseX, mouseY, gradientSize]);

	useEffect(() => {
		mouseX.set(-gradientSize);
		mouseY.set(-gradientSize);
	}, [mouseX, mouseY, gradientSize]);

	return (
		<div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={cn(
				"group relative flex size-full overflow-hidden rounded-xl",
				className,
			)}
		>
			<div className="relative">{children}</div>
			<motion.div
				className="absolute transition-opacity duration-300 opacity-0 pointer-events-none -inset-px rounded-xl group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
					opacity: gradientOpacity,
				}}
			/>
		</div>
	);
}

export default MagicCard;
