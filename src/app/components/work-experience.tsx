import Job from "./job";

const experience: Array<Job> = [
	{
		title: 'Senior Software Engineer',
		company: 'Fundrise',
		startDate: '2022',
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
	{
		title: 'UX Engineer',
		company: 'Unqork',
		startDate: '2021',
		endDate: '2022',
		description:
			'Enhanced frontend architecture and developer experience by refactoring a monorepo’s Webpack pipeline for faster, more reliable builds. Introduced a customizable default CSS theme using Tailwind and custom properties, along with a dynamic UI for live theming. Improvements streamlined development, reduced CI issues, and modernized the design system foundation.',
	},
	{
		title: 'Full stack Developer',
		company: 'Savas Labs',
		startDate: '2019',
		endDate: '2021',
		description:
			'Built custom Drupal themes from Figma designs for global health orgs, syncing external data into Drupal content types. Shaped playful user experiences for Savas Labs and Labs microsite in line with their brand identity. Created impactful side projects, including a gender-inclusive UX quiz and a 2020-themed lorem ipsum generator built in only a few days.',
	},
	{
		title: 'Web Developer',
		company: 'NETE',
		startDate: '2018',
		endDate: '2019',
		description:
			'Worked closely with designers, developers, and content teams to maintain and enhance NIEHS websites. Provided QA for new team members and supported large projects with HTML, CSS, and JavaScript updates. Collaborated on multimedia efforts, creating graphics and video assets with Adobe tools to support cohesive, high-impact digital content.',
	},
];

export default function WorkExperience() {
	return (
		<section className="mt-10 prose dark:text-slate-1">
			<h2 className="font-serif font-medium pb-2 border-b-4 border-cyan-11 dark:border-cyan-7">Experience</h2>
			{experience.map((job, index) => (
        <Job key={index} {...job}/>
			))}
		</section>
	);
}
