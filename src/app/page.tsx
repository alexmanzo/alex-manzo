import Image from 'next/image';

const headline = `Hi! I'm Alex.`;
const summary = `I'm the engineer people Slack when something's weird, broken, or doesn't
								make sense. I bridge design, product, and engineering to deliver clean, scalable
								solutions—whether it's performance, observability, or building tools that make
								devs' lives easier.`;

const experience = [
	{
		title: 'Senior Software Engineer',
		company: 'Fundrise',
		startDate: '2021',
		endDate: 'Present',
		bullets: [
			'Drove implementation of Datadog RUM, enabling observability into our web application for the first time, allowing us to identify bugs & UX issues more quickly.',
			'Redesigned Sentry triage workflow by adding structured context, source maps, and integration with other tools — turning noisy error data into actionable insights.',
			'Established and managed a triage rotation among web engineers, mentoring team members in debugging best practices and creating scalable processes for addressing production issues.',
			'Architected a unified cross-platform analytics system spanning Web, iOS, and Android; standardized event naming and property usage to ensure consistency and reliability across all platforms.',
			'Engineered a robust authentication and authorization framework supporting multiple token scopes and seamless user session handling.',
			'Proposed and implemented secure mobile webview support, enabling mobile teams to reuse authenticated web views in lieu of duplicating development across dozens of native screens.',
		],
	},
];

export default function Home() {
	return (
		<main>
			<div className="container mx-auto px-4 py-12 md:py-20 md:max-w-2/3">
				<div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20 items-center md:items-start">
					<div className="min-w-48 min-h-48">
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
						<section className="mt-10 prose">
							<h2 className="font-serif font-medium pb-2 border-b-4 border-cyan-11 dark:border-cyan-7">
								Experience
							</h2>
							{experience.map((job) => (
								<div key={job.company} className="mt-8">
									<div className="flex justify-between text-xl font-medium not-prose">
										<h3>
											{job.title} &ndash; {job.company}
										</h3>
                    <p>{job.startDate} - {job.endDate}</p>
									</div>
                  {job.bullets && (
                    <ul>
                      {job.bullets.map((bullet, index) => (
                        <li key={index} className="ml-3">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
								</div>
							))}
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
