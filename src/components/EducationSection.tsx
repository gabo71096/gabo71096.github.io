import { education } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import TimelineItem from "./TimelineItem";

export default function EducationSection() {
	return (
		<section
			id="education"
			className="from-muted/10 to-background bg-gradient-to-b py-12"
		>
			<div className="container mx-auto max-w-4xl px-6 md:px-4">
				<MotionWrapper>
					<h2 className="mb-8 text-center text-2xl font-bold md:text-left">
						🎓 Education
					</h2>
				</MotionWrapper>

				<div className="mb-8">
					{education.map((edu, index) => (
						<TimelineItem
							key={edu.institution}
							title={`🎓 ${edu.degree}`}
							subtitle={`🏛️ ${edu.institution}`}
							gpa={edu.gpa}
							date={`📅 ${edu.period}`}
							isLast={index === education.length - 1}
							index={index}
						>
							<p className="text-muted-foreground mb-3 text-sm">
								📍 {edu.location}
							</p>
						</TimelineItem>
					))}
				</div>
			</div>
		</section>
	);
}
