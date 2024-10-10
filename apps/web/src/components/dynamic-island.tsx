import { useHover } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import type { FC } from "react";

export const DynamicIsland: FC = () => {
	const [hoverRef, isHovered] = useHover();

	return (
		<div className="flex w-full fixed justify-center top-8 z-99999">
			<motion.div
				ref={hoverRef}
				initial={{ width: "10rem", height: "2.4rem" }}
				whileHover={{ width: "36rem", height: "3rem" }}
				whileTap={{ scale: 1.2 }}
				transition={{ duration: 0.4 }}
				className="flex relative bg-black rounded-full before:absolute before:content-[''] before:inset-0 hover:before:-inset-16"
			>
				<AnimatePresence>
					{isHovered ? (
						<ActivedBar key="active" />
					) : (
						<InactivedBar key="inactive" />
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

const ActivedBar: FC = () => {
	return (
		<div className="flex absolute w-full h-full place-content-between">
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				exit={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4 }}
				className="text-white flex flex-1 flex-row items-center"
			>
				<div>LOGO</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -40 }}
				exit={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="text-white flex flex-1 justify-center items-center"
			>
				<div>选项</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -40 }}
				exit={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="text-white flex flex-1 flex-row-reverse items-center"
			>
				<div>设置</div>
			</motion.div>
		</div>
	);
};

const InactivedBar: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -40 }}
			exit={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			className="flex absolute w-full h-full"
		>
			<div className="text-white flex flex-1 justify-center items-center transition-all">
				<div>信息展示</div>
			</div>
		</motion.div>
	);
};
