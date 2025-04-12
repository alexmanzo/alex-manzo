import Image from 'next/image';
import WorkExperience from './components/work-experience';
import { LinkedInLogoIcon, GitHubLogoIcon, ReaderIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

const headline = `Hi! I'm Alex.`;
const summary = `I'm the engineer people Slack when something's weird, broken, or doesn't
								make sense. I bridge design, product, and engineering to deliver clean, scalable
								solutions—whether it's performance, observability, or building tools that make
								devs' lives easier.`;

export default function Home() {
	return (
		<main>
			<div className="container mx-auto px-4 py-12 lg:py-20">
				<div className="flex flex-col lg:flex-row lg:justify-around items-center lg:items-start">
					<div className="lg:sticky top-12 lg:top-20">
						<div className="min-w-48 min-h-48">
							<Image
								src="/headshot.jpg"
								alt="Alex's Headshot"
								width={200}
								height={200}
								className="rounded-full w-48 h-48 object-cover shadow-lg"
							/>
						</div>
						<div className="inline-flex mt-8 justify-between w-full">
							<a
								href="https://www.linkedin.com/in/alexmanzodev/"
								target="_blank"
								rel="noopener noreferrer"
								title="LinkedIn"
							>
								<LinkedInLogoIcon className="text-cyan-11 hover:text-cyan-12 dark:text-cyan-7 dark:hover:text-cyan-8 transition-colors duration-100" width={25} height={25} />
								<span className="sr-only">LinkedIn</span>
							</a>
							<a
								href="https://www.github.com/alexmanzo/"
								target="_blank"
								rel="noopener noreferrer"
								title="GitHub"
							>
								<GitHubLogoIcon className="text-cyan-11 hover:text-cyan-12 dark:text-cyan-7 dark:hover:text-cyan-8 transition-colors duration-100" width={25} height={25} />
								<span className="sr-only">GitHub</span>
							</a>
							<a
								href="mailto:manzoalex17@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								title="Email me"
							>
								<EnvelopeClosedIcon className="text-cyan-11 hover:text-cyan-12 dark:text-cyan-7 dark:hover:text-cyan-8 transition-colors duration-100" width={25} height={25} />
								<span className="sr-only">Email me</span>
							</a>
							<a
								href="/Manzo-Alex-Resume-2025.pdf"
								target="_blank"
								rel="noopener noreferrer"
								title="Resume"
								download
							>
								<ReaderIcon className="text-cyan-11 hover:text-cyan-12 dark:text-cyan-7 dark:hover:text-cyan-8 transition-colors duration-100" width={25} height={25} />
								<span className="sr-only">Resume</span>
							</a>
						</div>
					</div>
					<div>
						<section className="mt-7 lg:mt-0">
							<h1 className="text-4xl font-medium font-serif">{headline}</h1>
							<p className="mt-4 text-lg lg:pr-24 text-left prose dark:text-slate-1"> {summary} </p>
						</section>
						<WorkExperience />
						<section className="mt-10 prose dark:text-slate-1">
							<h2 className="font-serif font-medium pb-2 border-b-4 border-cyan-11 dark:border-cyan-7 dark:text-slate-1">
								Skills
							</h2>
							<p>
								<strong className="dark:text-slate-1">Proficient:</strong> TypeScript, JavaScript, Vue, React, NodeJS, HTML, CSS,
								Playwright, Vite, Vitest, Tailwind, Sass
							</p>
							<p>
								<strong className="dark:text-slate-1">Familiar:</strong> AWS (Cloudfront, CloudPipeline, WAF), Svelte
							</p>
						</section>
						<section className="mt-10 prose dark:text-slate-1">
							<h2 className="font-serif font-medium pb-2 border-b-4 border-cyan-11 dark:border-cyan-7 dark:text-slate-1">
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
