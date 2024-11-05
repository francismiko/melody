import { cn } from "@/lib/utils";
import { useHover } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

interface UnderlineLinkProps {
	children: React.ReactNode;
	underlineColor?: string;
	className?: string;
}

export const UnderlineLink = ({
	children,
	underlineColor = "#ffffff",
	className,
}: UnderlineLinkProps) => {
	const [hoverRef, isHovered] = useHover();

	return (
		<span ref={hoverRef} className="relative inline-block">
			{children}
			<motion.span
				style={{ "--underline-color": underlineColor } as CSSProperties}
				initial={{ scaleX: 0, transformOrigin: "left" }}
				animate={{
					scaleX: isHovered ? 1 : 0,
					transformOrigin: isHovered ? "left" : "right",
					opacity: isHovered ? 1 : 0.5,
				}}
				transition={{ duration: 0.25, ease: "easeInOut" }}
				className={cn(
					"absolute bottom-0 left-0 right-0 rounded-full h-[1.5px] bg-[--underline-color] underline",
					className,
				)}
			/>
		</span>
	);
};

export default UnderlineLink;
