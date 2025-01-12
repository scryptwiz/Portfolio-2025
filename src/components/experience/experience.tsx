import FadeInAnimation from "../common/FadeInAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import React from "react";

type ExperienceItem = {
	jobTitle: string;
	duration: string;
	desc: string[];
	languages?: string[];
};

const experienceItems: Record<string, ExperienceItem> = {
	Digit: {
		jobTitle: "Fullstack Engineer (Part-time)",
		duration: "JAN 2023 - PRESENT",
		languages: ["React.js", "Next.js", "React Native", "Tailwind CSS", "TypeScript", "Docker", "CentOS", "SQL", "Nest.js", "JIRA (Agile Workflow)", "React Native", "AnyDesk", "API Development", "API Documentation", "Ant Design", "Email Newsletter Design", "User Experience Design (UED)", "User Interface Design", "Linux Server", "Networking"],
		desc: [
			"Collaborated within a cross-functional team of 3 backend developers, 3 frontend developers, and a project manager to deliver customized software solutions for diverse clients.",
			"Managed and mentored an intern, ensuring successful integration and productivity within the team.",
			"Developed mobile applications for an e-commerce platform using React Native, delivering a responsive design and seamless functionality across devices.",
			"Developed and maintained a robust Hospital Management System (HMS) with a local server setup, server monitoring, and efficient operation using CentOS, Docker, SQL, NestJS, and Angular.",
			"Implemented DevOps practices by setting up and monitoring servers using AnyDesk, optimizing infrastructure with Docker containers, and managing deployments for seamless client operations.",
			"Built and deployed frontend interfaces for a ticket management system and driver license management system using Angular, and an e-commerce system using React.",
			"Specialized in backend server architecture and infrastructure, optimizing reliability and scalability for high-traffic client applications.",
			"Designed and documented APIs, ensuring robust integration and clear guidance for development teams and external partners."
		]
	},
	Bellfast: {
		jobTitle: "Backend Engineer",
		duration: "JUL 2024 - NOV 2024",
		languages: ["Node.js", "Nest.js", "SQL", "TypeScript", "Paystack"],
		desc: [
			"Designed and implemented a backend system from scratch, delivering a robust and efficient solution that significantly improved operational performance.",
			"Developed a 70% lighter version of the previous backend structure, reducing system resource usage and improving processing efficiency.",
			"Achieved a 90% reduction in operational costs through optimized architecture and resource-efficient design.",
			"Delivered a fully functional backend to production within 4 months, streamlining the company's deployment timeline and supporting live operations.",
		]
	},
	Konnect: {
		jobTitle: "Frontend Engineer (Full Time)",
		duration: "JAN 2023 - NOV 2024",
		languages: ["React.js", "Vite", "Tailwind CSS", "Ant Design", "Axios", "Redux"],
		desc: [
			"Developed a feature-rich e-commerce web application, including a wallet system and a restaurant feature, as part of a collaborative team with 2 other frontend developers and 2 backend developers.",
			"Increased project speed by 30% through optimized workflows and efficient frontend development, earning positive feedback from the client.",
			"Built an admin system for monitoring transactions, providing robust oversight and management capabilities.",
			"Consumed APIs and integrated them seamlessly into the frontend."
		]
	},
	Ecla: {
		jobTitle: "Frontend Developer (Contract)",
		duration: "JUN 2022 - DEC 2022",
		languages: ["React.js", "Tailwind CSS"],
		desc: [
			"Collaborated with two Web3 developers to integrate decentralized functionalities into the platform, contributing to the design and development of three Web3-based projects.",
			"Led the frontend design of the platform using React.js and Tailwind CSS, ensuring a user-friendly and responsive interface.",
			"Worked closely with a project manager to prioritize and implement features while maintaining timelines in an agile environment.",
		]
	},
	"SQI College of ICT": {
		jobTitle: "Software Developer Intern ",
		duration: "OCT 2021 - FEB 2022",
		desc: [
			"Mentored and trained approximately 300 students in basic web development, specifically focusing on HTML and CSS, empowering them to transition from tech novices to capable developers with a solid understanding of web design principles.",
			"Developed and delivered engaging instructional materials, including tutorials, coding exercises, and live demonstrations, helping students build practical skills while fostering an interactive and supportive learning environment.",
			"Provided one-on-one assistance and group support, identifying students' learning needs and offering tailored guidance to ensure successful skill acquisition.",
			"Organized and led weekly coding workshops, where students could collaborate, share insights, and develop their projects, encouraging peer-to-peer learning and community-building.",
			"Received positive feedback from students for creating an encouraging atmosphere that helped them build confidence in their technical abilities and inspired them to pursue further learning in web development."
		]
	},
	Freelancer: {
		jobTitle: "UI/UX and Graphics Designer",
		duration: "FEB 2019 - FEB 2021",
		desc: [
			"Provided UI/UX and graphics design services to a diverse range of clients, delivering intuitive and visually appealing designs tailored to client requirements.",
			"Designed and prototyped user-friendly interfaces using tools like Figma and Adobe XD, ensuring seamless user experiences.",
			"Collaborated with developers to refine designs and implement feedback, resulting in high-quality deliverables.",
			"Created wireframes, user flows, and interactive prototypes, effectively communicating design concepts and user journeys.",
			"Produced high-quality graphics for marketing, branding, and digital campaigns, aligning with client goals and project objectives."
		]
	}
};

const Experience: React.FC = () => {
	return (
		<>
			<p className='tracking-wider text-sm mb-7 font-semibold'>/ Experience</p>
			<div className="flex gap-6">
				{/* ShadCN Tabs (Vertical) */}
				<Tabs defaultValue="Digit" orientation="vertical" className="flex flex-col md:flex-row">
					{/* Tabs List */}
					<TabsList className="flex flex-wrap md:gap-4 md:border-r-2 border-gray-200 pr-4 text-left w-full md:w-auto md:flex-col h-full mb-5 md:mb-0">
						{Object.keys(experienceItems).map((key) => (
							<TabsTrigger
								key={key}
								value={key}
								className="text-left md:py-2 text-sm font-medium hover:text-active focus:outline-none ring-0 focus:border-active"
							>
								{key}
							</TabsTrigger>
						))}
					</TabsList>

					{/* Tabs Content */}
					{Object.keys(experienceItems).map((key) => (
						<TabsContent key={key} value={key} className="md:pl-4 pr-">
							<h3 className="text-lg font-semibold">
								{experienceItems[key].jobTitle} <span className="text-active">@{key}</span>
							</h3>
							<p className="mt-2 md:text-sm text-xs">
								{experienceItems[key].duration}
							</p>
							{experienceItems[key].languages && (
								<div className="mt-2">
									<p className="md:text-sm text-xs tracking-wider leading-loose">
										<span className="font-bold">Technologies: </span>
										{experienceItems[key].languages.join(' | ')}
									</p>
								</div>
							)}
							<ul className="mt-4 list-disc pl-5 space-y-2 job-description">
								{experienceItems[key].desc.map((item, idx) => (
									<FadeInAnimation key={idx} delay={`${idx + 1}00ms`}>
										<li className="md:text-sm text-xs leading-loose tracking-wider">
											{item}
										</li>
									</FadeInAnimation>
								))}
							</ul>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</>
	)
}

export default Experience
