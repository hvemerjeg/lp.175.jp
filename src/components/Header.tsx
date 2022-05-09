import { ReactNode, VFC } from 'react';
import ThemeMenu from '@/components/ThemeMenu';

export type HeaderProps = {
	children: ReactNode;
};

const Header: VFC<HeaderProps> = ({ children }) => {
	return (
		<div class="pb-6 sm:pb-8 lg:pb-12">
			<header class="border-b mb-8">
				<div class="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
					<a
						href="/"
						class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
						aria-label="logo"
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							class="w-6 h-auto text-green-600"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M4 28h28v4h-32v-32h4zM9 26c-1.657 0-3-1.343-3-3s1.343-3 3-3c0.088 0 0.176 0.005 0.262 0.012l3.225-5.375c-0.307-0.471-0.487-1.033-0.487-1.638 0-1.657 1.343-3 3-3s3 1.343 3 3c0 0.604-0.179 1.167-0.487 1.638l3.225 5.375c0.086-0.007 0.174-0.012 0.262-0.012 0.067 0 0.133 0.003 0.198 0.007l5.324-9.316c-0.329-0.482-0.522-1.064-0.522-1.691 0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3-0.067 0-0.133-0.003-0.198-0.007l-5.324 9.316c0.329 0.481 0.522 1.064 0.522 1.691 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.604 0.179-1.167 0.487-1.638l-3.225-5.375c-0.086 0.007-0.174 0.012-0.262 0.012s-0.176-0.005-0.262-0.012l-3.225 5.375c0.307 0.471 0.487 1.033 0.487 1.637 0 1.657-1.343 3-3 3z"></path>
						</svg>
						175
					</a>

					<div class="flex border-l border-r divide-x">
						<a
							href="#"
							class="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center active:bg-gray-200 transition duration-100 gap-1.5"
						>
							<ThemeMenu />
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
