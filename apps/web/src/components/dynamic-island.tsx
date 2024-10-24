import { useHover } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import type { FC } from "react";
import { FaGithub, FaMoon, FaXTwitter } from "react-icons/fa6";
import { LuLanguages } from "react-icons/lu";

type NavBarItemsType = any;

type InfoBarItemsType = any;

const _duration_ = 0.5;

export const DynamicIsland: FC = () => {
	const [hoverRef, isHovered] = useHover();

	const navBarItems: NavBarItemsType = {
		left: [
			{
				key: "a",
				lable: "Francis's melody",
			},
		],
		right: [
			{
				key: "a",
				lable: "aaa",
			},
			{
				key: "b",
				lable: "bbb",
			},
		],
		middle: [
			{
				key: "a",
				lable: "主页",
			},
			{
				key: "b",
				lable: "博客",
			},
			{
				key: "b",
				lable: "项目",
			},
			{
				key: "b",
				lable: "赞助",
			},
		],
	};

	const infoBarItems: InfoBarItemsType = [
		{
			key: "aa",
			lable: "aaa",
		},
	];

	return (
		<div className="flex w-full fixed justify-center top-4 z-99999">
			<div
				ref={hoverRef}
				className="before:absolute before:inset-0 hover:before:-inset-4 before:content-['']"
			>
				<motion.div
					animate={{
						width: isHovered ? "40rem" : "10rem",
						height: isHovered ? "3.2rem" : "2.4rem",
					}}
					whileTap={{ scale: 1.1 }}
					transition={{ duration: _duration_, ease: "easeOut" }}
					className="flex relative overflow-hidden bg-black select-none rounded-full "
				>
					<AnimatePresence>
						{isHovered ? (
							<NavBar key="navigation" items={navBarItems} />
						) : (
							<InfoBar key="information" items={infoBarItems} />
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	);
};

const NavBar: FC<{ items: NavBarItemsType }> = ({ items }) => {
	const sideBarAnimation = (direction: "left" | "right") => ({
		initial: {
			opacity: 0,
			scale: 0.4,
			x: (direction === "left" ? -1 : 1) * 300,
		},
		exit: {
			opacity: 0,
			scale: 0.4,
			x: (direction === "left" ? -1 : 1) * 200,
		},
		animate: { opacity: 1, scale: 1, x: 0 },
		transition: { duration: _duration_, ease: "easeOut" },
	});

	const middleBarAnimation = {
		initial: { opacity: 0, scale: 1, y: -50 },
		exit: { opacity: 0, scale: 1, y: 50 },
		animate: { opacity: 1, scale: 1, y: 0 },
		transition: { duration: _duration_, ease: "easeOut" },
	};

	const LeftBar: FC = () => {
		return (
			<motion.div
				{...sideBarAnimation("left")}
				className="text-white flex w-1/4 flex-row items-center gap-4 pl-4 text-nowrap"
			>
				{items.left.map((item) => (
					<span key={item.key}>{item.lable}</span>
				))}
			</motion.div>
		);
	};

	const RightBar: FC = () => (
		<motion.div
			{...sideBarAnimation("right")}
			className="text-white flex w-1/4 flex-row-reverse items-center gap-4 pr-4 text-lg text-nowrap"
		>
			<FaMoon />
			<LuLanguages />
			<FaGithub />
			<FaXTwitter />
		</motion.div>
	);

	const MiddleBar: FC = () => (
		<motion.div
			{...middleBarAnimation}
			className="text-white absolute flex grow w-full h-full px-1/4 justify-center items-center gap-4 text-nowrap"
		>
			{items.middle.map((item) => (
				<span key={item.key} className="min-w-8">
					{item.lable}
				</span>
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

const InfoBar: FC<{ items: InfoBarItemsType }> = ({ items }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			exit={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: _duration_ }}
			className="flex absolute w-full h-full"
		>
			<div className="text-white flex flex-1 justify-center items-center">
				<span>信息展示</span>
			</div>
		</motion.div>
	);
};
