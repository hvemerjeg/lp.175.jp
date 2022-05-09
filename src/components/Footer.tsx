import { ReactNode, VFC } from 'react';

export type FooterProps = {
	children: ReactNode;
};

const Footer: VFC<FooterProps> = ({ children }) => {
	return (
		<div class="pt-4 sm:pt-10 lg:pt-12">
			<footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
				<div class="text-gray-400 text-sm text-center border-t py-8">
					© Copyright 2022 175. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default Footer;
