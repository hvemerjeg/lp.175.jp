import { NextPage } from 'next';
import Layout from '@/components/Layout';

const Index: NextPage = () => {
	return (
		<Layout title="175 | 投資アドバイザー">
			<div className="py-6 sm:py-8 lg:py-12">
				<div className="max-w-screen-xl px-4 md:px-8 mx-auto">
					<div className="mb-10 md:mb-16">
						<h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
							投資に必要な鮮度のいい情報を取り揃えています。
						</h2>

						<p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
							新しい情報は武器になる。WEBに存在するあらゆるリソースをリアルタイムで解析し最適化。
							<br />
							無数にある情報から有益な情報を選別し提供、そんな不可能を可能にするツールが今ここに。
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 md:divide-x gap-8 md:gap-0">
						<div className="flex flex-col items-center md:p-4">
							<div className="text-green-700 text-xl sm:text-2xl md:text-3xl font-bold">
								3000+
							</div>
							<div className="text-sm sm:text-base font-semibold">
								PRをチェックする上場企業
							</div>
						</div>

						<div className="flex flex-col items-center md:p-4">
							<div className="text-green-700 text-xl sm:text-2xl md:text-3xl font-bold">
								50+
							</div>
							<div className="text-sm sm:text-base font-semibold">
								取得するニュースサービス
							</div>
						</div>

						<div className="flex flex-col items-center md:p-4">
							<div className="text-green-700 text-xl sm:text-2xl md:text-3xl font-bold">
								10000+
							</div>
							<div className="text-sm sm:text-base font-semibold">
								監視するSNSのアカウント
							</div>
						</div>

						<div className="flex flex-col items-center md:p-4">
							<div className="text-green-700 text-xl sm:text-2xl md:text-3xl font-bold">
								∞
							</div>
							<div className="text-sm sm:text-base font-semibold">
								世の中に存在する情報
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
