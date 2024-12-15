import React from "react";
import FadeInAnimation from "../common/FadeInAnimation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {Button} from "../ui/button";
import {Link} from "lucide-react";

// Define a TypeScript type for project data
interface Project {
    title: string;
    description: string;
    techStack: string;
    image: string;
    images: string[];
    altText: string;
    redirectUrl: string;
}

const Carousel_Project: React.FC = () => {
    const projectsData: Project[] = [
        {
            title: "XORA",
            description: "XORA Website Clone",
            techStack: "React.Js | TailwindCSS | SASS",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/xora_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/xora_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/xora_2.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/xora_3.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/xora_4.png",
            ],
            altText: "XORA Project",
            redirectUrl: "https://xora-clone-123.netlify.app/",
        },
        {
            title: "Konnect Web App",
            description: "Fintech and an E-commerce web application. In addition to the platform I worked on the admin platform for tracking all transactions.",
            techStack: "React.Js | TailwindCSS | Redux | Material-UI | Ant Design",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/kon_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/kon_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/kon_2.png",
            ],
            altText: "Konnect Project",
            redirectUrl: "https://konnect.ws/",
        },
        {
            title: "ECLA",
            description: "ECLA Website",
            techStack: "React.Js | TailwindCSS",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ecla_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ecla_4.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ecla_2.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ecla_7.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ecla_9.png",
            ],
            altText: "ECLA Project",
            redirectUrl: "https://eclanft.netlify.app/",
        },
        {
            title: "CyberQueens",
            description: "CyberQueens Website",
            techStack: "React | TailwindCSS | Contentful",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/queens_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/queens_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/queens_2.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/queens_3.png",
            ],
            altText: "CyberQueens Project",
            redirectUrl: "https://cyberqueennft.netlify.app/",
        },
        {
            title: "Pubbles",
            description: "Pubbles Website",
            techStack: "React | TailwindCSS | Contentful",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/pubbles_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/pubbles_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/pubbles_2.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/pubbles_4.png",
            ],
            altText: "Pubbles Project",
            redirectUrl: "https://pubblesnft.netlify.app/",
        },
        {
            title: "Apein",
            description: "Apein Website",
            techStack: "React | TailwindCSS",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ape_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ape_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ape_3.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/ape_4.png",
            ],
            altText: "Apein Project",
            redirectUrl: "https://apein.netlify.app/",
        },
        {
            title: "Twitter",
            description: "Twitter Clone",
            techStack: "React | TailwindCSS | Sanity.io",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/twitter_2.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/twitter_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/twitter_2.png",
            ],
            altText: "Twitter Clone",
            redirectUrl: "https://kelvtwitter.netlify.app",
        },
        {
            title: "Medium Clone",
            description: "Medium Clone",
            techStack: "Next.Js | TailwindCSS | Sanity.io",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/medium_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/medium_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/medium_2.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/medium_3.png",
            ],
            altText: "Medium Clone",
            redirectUrl: "https://kelvin-medium-blog.vercel.app/",
        },
        {
            title: "Scientific Calculator",
            description: "Scientific Calculator",
            techStack: "Javascript | CSS | HTML",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/calc_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/calc_3.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/calc_4.png",
            ],
            altText: "Scientific Calculator",
            redirectUrl: "https://kelv-calculator-scientific-version.vercel.app/",
        },
        {
            title: "Tic Tac Toe",
            description: "Tic Tac Toe",
            techStack: "JavaScript | CSS | HTML",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/tic_tac_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/tic_tac_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/tic_tac_4.png",
            ],
            altText: "Tic Tac Toe",
            redirectUrl: "https://tic-tac-toe-game-js-rust.vercel.app/",
        },
        {
            title: "Task Tracker",
            description: "Task Tracker",
            techStack: "React.Js | TailwindCSS",
            image: "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/todo_1.png",
            images: [
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/todo_1.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/todo_3.png",
                "https://jykkpkzafkialtkalzxs.supabase.co/storage/v1/object/public/images/todo_2.png",
            ],
            altText: "Task Tracker",
            redirectUrl: "https://to-do-tasktracker.netlify.app/",
        },
    ];


    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const plugin = React.useRef(
        Autoplay({delay: 2000, stopOnInteraction: false})
    );

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className="py-20">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-bold">Latest Works</h2>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, index) => (
                        <FadeInAnimation key={index} delay={`${index + 1}00ms`}>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div
                                        className="relative bg-primary p-5 rounded-xl shadow-lg group hover:bg-gray-700 transition cursor-pointer">
                                        {/* Project Image */}
                                        <img
                                            src={project.image}
                                            alt={project.altText}
                                            className="w-full h-48 object-cover rounded-xl"
                                        />

                                        {/* Project Info */}
                                        <div className="mt-4">
                                            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{project.techStack}</p>
                                        </div>

                                        {/* Overlay Description */}
                                        <div
                                            className="absolute inset-0 bg-black duration-700 bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition rounded-xl">
                                            <p className="text-white text-center text-lg mb-3">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </DialogTrigger>

                                {/* Dialog Content */}
                                <DialogContent
                                    className="bg-black rounded-xl border-primary border-2 p-7 lg:w-[80vw] lg:h-[85vh] lg:max-w-none lg:max-h-none">
                                    <DialogHeader>
                                        <DialogTitle>{project.title}</DialogTitle>
                                        <DialogDescription
                                            className="text-gray-400 font-semibold">{project.description}</DialogDescription>
                                    </DialogHeader>
                                    {/* Carousel */}
                                    <Carousel
                                        setApi={setApi}
                                        plugins={[plugin.current]}
                                        className="max-w-[80%] mx-auto mt-4"
                                        onMouseLeave={plugin.current.reset}
                                    >
                                        <CarouselContent>
                                            {project.images.map((image, i) => (
                                                <CarouselItem key={i}>
                                                    <img src={image} alt={`${project.title} Image ${i + 1}`}
                                                         className="w-full max-h-[60vh] lg:fit object-cover rounded-[7px]"/>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {/* Carousel Controls */}
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                    </Carousel>
                                    <div className="py-2 text-center text-sm text-muted-foreground">
                                        Slide {current} of {count}
                                    </div>

                                    {/* Redirect Button */}
                                    <DialogFooter>
                                        <div className="flex justify-end">
                                            <a href={project.redirectUrl} target="_blank" rel="noopener noreferrer"
                                               className="underline-none">
                                                <Button variant="secondary"
                                                        className='rounded-[7px] p-5'><Link/> Link</Button>
                                            </a>
                                        </div>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </FadeInAnimation>
                    ))}
                </div>

                {/* Footer */}
                <div className="text-center mt-12">
                    <a
                        href="/projects"
                        className="text-green-400 font-bold hover:underline text-lg"
                    >
                        ALL PROJECTS
                    </a>
                    <p className="text-gray-400 mt-2 text-sm">
                        * Some projects are not published due to NDA. Contact me for more.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Carousel_Project