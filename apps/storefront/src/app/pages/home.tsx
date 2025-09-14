// import AnimatedLogo from '@/components/SVG/Logo/AnimatedLogo';
// import PostListPage from './blog/page';
import './home.css';
import { metadata } from '../layout';

export default function Home() {
	return (
		<>
			<div id='hero'>
				{/* <AnimatedLogo
					animateOnce={true}
					initialInView={false}
					className={'m-auto animatedLogo'}
				/> */}
				<div className='max-w-[700px]'>
					<div>
						<big className='text-2xl' aria-hidden='true'>
							👋
						</big>
						<p className='inline'>Hi, I am</p>{' '}
						{/* changes for narrator - accessibility */}
					</div>
					<h1 className='p-0 mb-1 gradientText'>Anwesh Gangula</h1>
					<p className='mb-6'>{metadata.description}</p>
					<p>
						Welcome to my "Digital Garden". This is where I would like to share
						& showcase:
					</p>
					<ul>
						<li>🏗️ things i'm building</li>
						<li>🎋 what I'm currently learning</li>
						<li>🥰 and things that inspire me</li>
					</ul>
					{/* <p>
						Added D3 JS implementation in Nextjs - <Link href={"./d3_Next13"}>here</Link>
					</p> */}
				</div>
			</div>
			<section className='postList'>
				{/* <PostListPage /> */}
			</section>
		</>
	);
}
