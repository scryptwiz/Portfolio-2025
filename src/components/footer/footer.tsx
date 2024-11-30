import { Github, Mail, Twitter } from "lucide-react"
import { Button } from "../ui/button"

const Footer = () => {
	return (
		<footer className="text-gray-400 py-6">
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				{/* Left Section: Name and Copyright */}
				<div className="text-center md:text-left mb-4 md:mb-0">
					<h2 className="text-lg font-bold text-white">
						Kelvin <span className="text-gray-400">Ajayi</span>
					</h2>
					<p className="text-sm">&copy; 2024. All Rights Reserved</p>
				</div>

				{/* Right Section: Social Icons */}
				<div className="flex space-x-6">
					{/* Twitter Button */}
					<a
						href="https://x.com/KelvinAjayi8"
						target="_blank"
						rel="noopener noreferrer"
						className="no-underline"
					>
						<Button variant="ghost">
							<Twitter className="mr-2" color="white" />
							Twitter
						</Button>
					</a>

					{/* GitHub Button */}
					<a
						href="https://github.com/scryptwiz"
						target="_blank"
						rel="noopener noreferrer"
						className="no-underline"
					>
						<Button variant="ghost">
							<Github className="mr-2" color="white" />
							Github
						</Button>
					</a>

					{/* Email Button */}
					<a
						href="mailto:kelvide7@gmail.com"
						className="no-underline"
					>
						<Button variant="ghost" size="icon">
							<Mail color="#64f4ac" />
						</Button>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer