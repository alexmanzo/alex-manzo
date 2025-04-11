import Image from 'next/image';
import WorkExperience from './components/work-experience';

const headline = `Hi! I'm Alex.`;
const summary = `I'm the engineer people Slack when something's weird, broken, or doesn't
								make sense. I bridge design, product, and engineering to deliver clean, scalable
								solutions—whether it's performance, observability, or building tools that make
								devs' lives easier.`;

export default function Home() {
	return (
		<main>
			<div className="container mx-auto px-4 py-12 md:py-20 md:max-w-2/3">
				<div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20 items-center md:items-start">
					<div className="min-w-48 min-h-48 sticky top-12 md:top-20">
						<Image
							src="/headshot.jpg"
							alt="Alex's Headshot"
							width={200}
							height={200}
							className="rounded-full w-48 h-48 object-cover shadow-lg"
						/>
					</div>
					<div>
						<section>
							<h1 className="text-4xl font-medium font-serif">{headline}</h1>
							<p className="mt-4 text-lg md:pr-24 text-left"> {summary} </p>
						</section>
						<WorkExperience />
						<section className="mt-10 prose">
							<h2 className="font-serif font-medium pb-2 border-b-4 border-cyan-11 dark:border-cyan-7">
								Skills
							</h2>
							<p>
								<strong>Proficient:</strong> TypeScript, JavaScript, Vue, React, NodeJS, HTML, CSS,
								Playwright, Vite, Vitest, Tailwind, Sass
							</p>
							<p>
								<strong>Familiar:</strong> AWS (Cloudfront, CloudPipeline, WAF), Svelte
							</p>
						</section>
						<section className="mt-10 prose">
							<h2 className="font-serif font-medium pb-2 border-b-4 border-cyan-11 dark:border-cyan-7">
								Education
							</h2>
							<div className="not-prose">
								<div className="flex justify-between">
									<p>
										<strong>MA, Emerging Media</strong>
									</p>
									<p>2017</p>
								</div>
								<p>Loyola University Maryland</p>
							</div>
							<div className="not-prose mt-5">
								<div className="flex justify-between">
									<p>
										<strong>BA, Telecommunications</strong>
									</p>
									<p>2011</p>
								</div>
								<p>Ball State University</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
