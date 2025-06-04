import Image from "next/image";
import React from "react";

const OurClients = () => {
	return (
		<>
			<div className='h-52 w-full flex items-center justify-center overflow-hidden bg-background max-w-full flex-wrap'>
				<p className='font-sans text-3xl tracking-tighter bg-gradient-to-b from-gray-700 via-gray-500 to-gray-300 bg-clip-text text-transparent font-extrabold'>
					The Brands That Trust Us
				</p>
				<div className='w-full flex justify-center items-center gap-5 flex-wrap'>
					<Image
						src='/clients/4shan.png'
						alt='Our Clients'
						width={100}
						height={100}
						className='object-cover'
					/>
					<Image
						src='/clients/saint.png'
						alt='Our Clients'
						width={100}
						height={100}
						className='object-cover'
					/>
				</div>
			</div>
		</>
	);
};

export default OurClients;
