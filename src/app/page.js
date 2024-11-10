'use client';
import { useState, useEffect } from 'react';

const Page = () => {
	const [redheight, setRedheight] = useState(50);
	const [blueheight, setBlueheight] = useState(50);
	const [isGameOver, setisGameOver] = useState(false);
	const [countdown, setCountdown] = useState(null); // State for countdown

	useEffect(() => {
		if (redheight === 100 || blueheight === 100) {
			setisGameOver(true);
		}
	}, [redheight, blueheight]);

	const makeblue1VHhigh = () => {
		if (!isGameOver) {
			setBlueheight((prev) => Math.min(prev + 1, 100));
			setRedheight((prev) => Math.max(prev - 1, 0));
		}
	};

	const makered1VHhigh = () => {
		if (!isGameOver) {
			setRedheight((prev) => Math.min(prev + 1, 100));
			setBlueheight((prev) => Math.max(prev - 1, 0));
		}
	};

	const handleReset = () => {
		setCountdown(3); // Start countdown from 3
	};

	// Countdown effect
	useEffect(() => {
		if (countdown === null) return;

		if (countdown > 0) {
			const timer = setTimeout(() => {
				setCountdown((prev) => prev - 1);
			}, 1000); // Decrease countdown every second
			return () => clearTimeout(timer);
		} else if (countdown === 0) {
			// When countdown reaches 0, reset game state
			setBlueheight(50);
			setRedheight(50);
			setisGameOver(false);
			setCountdown(null);
		}
	}, [countdown]);

	return (
		<div className='h-[100vh] relative'>
			<div
				onClick={makered1VHhigh}
				style={{ height: `${redheight}vh` }}
				className='bg-red-500 cursor-pointer'></div>

			{isGameOver && (
				<div className='absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 select-none flex flex-col items-center justify-center'>
					{countdown !== null ? (
						<h2 className='text-5xl text-white font-extrabold text-center'>
							Game Starts in
						</h2>
					) : (
						<>
							<h2 className='text-5xl text-white font-extrabold text-center'>
								Game Over
							</h2>
						</>
					)}
					{countdown !== null ? (
						<h3 className='text-5xl text-white mt-4 text-center'>
							{countdown}
						</h3>
					) : (
						<button
							onClick={handleReset}
							className='bg-white px-4 py-1 mt-4 rounded-full'>
							Reset
						</button>
					)}
				</div>
			)}

			<div
				onClick={makeblue1VHhigh}
				style={{ height: `${blueheight}vh` }}
				className='bg-blue-500 cursor-pointer'></div>
		</div>
	);
};

export default Page;
