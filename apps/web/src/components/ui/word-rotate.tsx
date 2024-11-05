"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
	words: string[];
	duration?: number;
	framerProps?: HTMLMotionProps<"span">;
	className?: string;
}

export function WordRotate({
	words,
	duration = 2500,
	framerProps = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
		transition: { duration: 0.25, ease: "easeOut" },
	},
	className,
}: WordRotateProps) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration);

		return () => clearInterval(interval);
	}, [words, duration]);

	return (
		<AnimatePresence mode="popLayout">
			<motion.span
				key={words[index]}
				className={cn(className)}
				{...framerProps}
			>
				{words[index]}
			</motion.span>
		</AnimatePresence>
	);
}

export default WordRotate;
