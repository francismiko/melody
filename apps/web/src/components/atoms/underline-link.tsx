import { cn } from "@/lib/utils";
import { useHover } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { memo, useCallback, useMemo, type FC } from "react";

interface UnderlineLinkProps {
	children: React.ReactNode;
	underlineColor?: string;
	underlineInitColor?: string;
	className?: string;
	onClick?: () => void;
}

export const UnderlineLink: FC<UnderlineLinkProps> = memo(
	({
		children,
		underlineColor = "#ffffff",
		underlineInitColor = "#ffffff",
		className,
		onClick,
	}) => {
		const [hoverRef, isHovered] = useHover();

		const handleClick = useCallback(() => {
			onClick?.();
		}, [onClick]);

		const initial = useMemo(
			() => ({ transformOrigin: "left", scaleX: 0, opacity: 0.6 }),
			[],
		);

		const animate = useMemo(
			() => ({
				scaleX: isHovered ? 1 : 0,
				transformOrigin: isHovered ? "left" : "right",
				opacity: isHovered ? 1 : 0.6,
				backgroundColor: isHovered ? underlineColor : underlineInitColor,
			}),
			[isHovered, underlineColor, underlineInitColor],
		);

		const transition = useMemo(
			() => ({ delay: 0.04, duration: 0.25, ease: "easeInOut" }),
			[],
		);

		const computedClassName = useMemo(
			() => cn("absolute bottom-0 left-0 right-0 rounded h-[1px]", className),
			[className],
		);

		return (
			<span
				ref={hoverRef}
				onClick={handleClick}
				className="relative inline-block cursor-pointer"
			>
				{children}
				<motion.span
					initial={initial}
					animate={animate}
					transition={transition}
					className={computedClassName}
				/>
			</span>
		);
	},
);

export default UnderlineLink;
