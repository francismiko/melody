import { useTheme } from "@/providers";
import { useHover } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useMemo, useState, type FC } from "react";
import type { IconType } from "react-icons";
import { FaGithub, FaMoon, FaSun, FaXTwitter } from "react-icons/fa6";
import { LuLanguages } from "react-icons/lu";

type NavBarItemsType = {
	[K in "left" | "right" | "middle"]: {
		key: string;
		label?: string;
		icon?: IconType;
		onClick?: () => void;
	}[];
};

type InfoBarItemsType = {
	key: string;
	label?: string;
}[];

const _duration_ = 0.5;

export const DynamicIsland: FC = () => {
	const { theme, setTheme } = useTheme();
	const [hoverRef, isHovered] = useHover();

	const navBarItems: NavBarItemsType = useMemo(
		() => ({
			left: [
				{
					key: "logo",
					label: "Francis's melody",
				},
			],
			right: [
				{
					key: "theme",
					icon: theme === "light" || theme === "system" ? FaMoon : FaSun,
					onClick: () => {
						setTheme(
							theme === "light" || theme === "system" ? "dark" : "light",
						);
					},
				},
				{
					key: "language",
					icon: LuLanguages,
				},
				{
					key: "github",
					icon: FaGithub,
					onClick: () => {
						window.location.assign("https://github.com/francismiko");
					},
				},
				{
					key: "twitter",
					icon: FaXTwitter,
					onClick: () => {
						window.location.assign("https://x.com/Francismiko1");
					},
				},
			],
			middle: [
				{
					key: "home",
					label: "主页",
				},
				{
					key: "blog",
					label: "博客",
				},
				{
					key: "project",
					label: "项目",
				},
				{
					key: "sponsor",
					label: "赞助",
				},
			],
		}),
		[theme, setTheme],
	);

	const infoBarItems: InfoBarItemsType = useMemo(
		() => [{ key: "info", label: "info" }],
		[],
	);

	return (
		<div className="flex w-full fixed justify-center top-4 z-99999">
			<div
				ref={hoverRef}
				className="before:absolute before:-inset-0 hover:before:-inset-4 before:content-['']"
			>
				<motion.div
					initial={false}
					animate={{
						width: isHovered ? "40rem" : "10rem",
						height: isHovered ? "3.2rem" : "2.4rem",
					}}
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

const NavBar: FC<{ items: NavBarItemsType }> = memo(({ items }) => {
	const [isInit, setIsInit] = useState(false);

	const sideBarAnimation = (direction: "left" | "right") => ({
		initial: isInit
			? false
			: {
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
		initial: isInit ? false : { opacity: 0, scale: 1, y: -50 },
		exit: { opacity: 0, scale: 1, y: 50 },
		animate: { opacity: 1, scale: 1, y: 0 },
		transition: { duration: _duration_, ease: "easeOut" },
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsInit(true);
		}, _duration_ * 1000);
		return () => clearTimeout(timer);
	}, []);

	const LeftBar: FC = memo(() => (
		<motion.div
			{...sideBarAnimation("left")}
			className="text-white flex w-1/4 flex-row items-center gap-4 pl-4 text-nowrap"
		>
			{items.left.map((item) => (
				<span key={item.key}>{item.label}</span>
			))}
		</motion.div>
	));

	const RightBar: FC = memo(() => (
		<motion.div
			{...sideBarAnimation("right")}
			className="text-white flex w-1/4 flex-row-reverse items-center gap-2 pr-4 text-lg text-nowrap"
		>
			{items.right.map((item) => (
				<span key={item.key} onClick={item.onClick}>
					<div className="size-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:bg-neutral-700">
						{item.icon && <item.icon />}
					</div>
				</span>
			))}
		</motion.div>
	));

	const MiddleBar: FC = memo(() => (
		<motion.div
			{...middleBarAnimation}
			className="text-white absolute flex grow w-full h-full px-1/4 justify-center items-center gap-4 text-nowrap"
		>
			{items.middle.map((item) => (
				<span key={item.key} className="min-w-8">
					{item.label}
				</span>
			))}
		</motion.div>
	));

	return (
		<div className="flex absolute w-full h-full place-content-between">
			<LeftBar />
			<MiddleBar />
			<RightBar />
		</div>
	);
});

const InfoBar: FC<{ items: InfoBarItemsType }> = memo(({ items }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			exit={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: _duration_ }}
			className="flex absolute w-full h-full text-white flex-1 justify-center items-center"
		>
			{items.map((item) => (
				<span key={item.key}>{item.label}</span>
			))}
		</motion.div>
	);
});
