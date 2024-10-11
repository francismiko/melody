import { useHover } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import type { FC } from "react";

const _duration_ = 0.5;

export const DynamicIsland: FC = () => {
	const [hoverRef, isHovered] = useHover();

	return (
		<div className="flex w-full fixed justify-center top-4 z-99999">
			<motion.div
				ref={hoverRef}
				initial={{ width: "10rem", height: "2.4rem" }}
				whileHover={{ width: "36rem", height: "3.2rem" }}
				whileTap={{ scale: 1.2 }}
				transition={{ duration: _duration_ }}
				className="flex relative overflow-hidden bg-black rounded-full before:absolute before:content-[''] before:-inset-0 hover:before:-inset-16"
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
	const sideBarAnimation = (direction: "left" | "right") => ({
		initial: {
			opacity: 0,
			scale: 0.4,
			x: (direction === "left" ? -1 : 1) * 200,
		},
		exit: {
			opacity: 0,
			scale: 0.4,
			x: (direction === "left" ? -1 : 1) * 100,
		},
		animate: { opacity: 1, scale: 1, x: 0 },
		transition: { duration: _duration_ },
	});

	const middleBarAnimation = {
		initial: { opacity: 0, scale: 1, y: -50 },
		exit: { opacity: 0, scale: 1, y: 50 },
		animate: { opacity: 1, scale: 1, y: 0 },
		transition: { duration: _duration_ },
	};
	const LeftBar: FC = () => (
		<motion.div
			{...sideBarAnimation("left")}
			className="text-white flex flex-1 flex-row items-center gap-4"
		>
			{[...Array(2)].map((_, i) => (
				<div key={i} className="w-8">
					选项
				</div>
			))}
		</motion.div>
	);

	const RightBar: FC = () => (
		<motion.div
			{...sideBarAnimation("right")}
			className="text-white flex flex-1 flex-row-reverse items-center gap-4"
		>
			{[...Array(2)].map((_, i) => (
				<div key={i} className="w-8">
					选项
				</div>
			))}
		</motion.div>
	);

	const MiddleBar: FC = () => (
		<motion.div
			{...middleBarAnimation}
			className="text-white flex flex-1 justify-center items-center gap-4"
		>
			{[...Array(3)].map((_, i) => (
				<div key={i} className="w-8">
					选项
				</div>
			))}
		</motion.div>
	);

	return (
		<div className="flex absolute w-full h-full place-content-between">
			<LeftBar />
			<MiddleBar />
			<RightBar />
		</div>
	);
};

const InactivedBar: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			exit={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: _duration_ }}
			className="flex absolute w-full h-full"
		>
			<div className="text-white flex flex-1 justify-center items-center">
				<div>信息展示</div>
			</div>
		</motion.div>
	);
};
