export default function Job({company, title, startDate, endDate, bullets, description}: Job) {
	return (
		<div key={company} className="mt-8">
			<div className="flex justify-between text-xl font-medium not-prose">
				<h3>
					{title} &ndash; {company}
				</h3>
				<p>
					{startDate} - {endDate}
				</p>
			</div>
			{bullets && (
				<ul>
					{bullets.map((bullet, index) => (
						<li key={index} className="ml-3">
							{bullet}
						</li>
					))}
				</ul>
			)}
			{description && <p>{description}</p>}
		</div>
	);
}
