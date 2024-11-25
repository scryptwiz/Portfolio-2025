import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
	title: string;
	description: string;
	Icon: LucideIcon;
}

const Card: FC<CardProps> = ({ title, description, Icon }) => {
	return (
		<div className="bg-primary p-8 rounded-xl">
			<div className="flex justify-between gap-3">
				<div>
					<h4 className="text-active text-2xl tracking-wider font-medium">{title}</h4>
					<p className="mt-2 tracking-wider text-sm">{description}</p>
				</div>
				<Icon className="text-active text-lg" />
			</div>
		</div>
	);
};

export default Card;