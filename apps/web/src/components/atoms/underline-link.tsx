import { cn } from "@/lib/utils";
import { useHover } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { memo, type FC } from "react";

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

		return (
			<span
				ref={hoverRef}
				onClick={onClick}
				className="relative inline-block cursor-pointer"
			>
				{children}
				<motion.span
					initial={{ transformOrigin: "left", scaleX: 0, opacity: 0.6 }}
					animate={{
						scaleX: isHovered ? 1 : 0,
						transformOrigin: isHovered ? "left" : "right",
						opacity: isHovered ? 1 : 0.6,
						backgroundColor: isHovered ? underlineColor : underlineInitColor,
					}}
					transition={{ delay: 0.04, duration: 0.25, ease: "easeInOut" }}
					className={cn(
						"absolute bottom-0 left-0 right-0 rounded h-[1px]",
						className,
					)}
				/>
			</span>
		);
	},
);

export default UnderlineLink;
