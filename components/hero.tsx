import ContactButton from "../components/contactButton";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full bg-white text-black h-full">
            <div className="mx-auto flex flex-col items-center justify-between gap-10 px-6 py-10 md:flex-row md:items-center md:px-12">
                <div className="max-w-md space-y-4 text-left"> {/* text on left*/}
                    <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-6xl">
                        Hi, I'm Faaiz. <br />A software and cloud developer <span className="text-nowrap">based in Vancouver, BC.</span>
                    </h1>
                    <p className="text-base text-gray-600">
                        I work create projects with a focus on impact and efficiency. My experience ranges from building hackathon-winning AI and hardware projects that solve real-world problems, to optimizing high-scale cloud infrastructure.
                    </p>
                    <div className="pt-4">
                        <ContactButton word="Connect" />
                    </div>
                </div>

                <div className="flex justify-center md:justify-end"> {/* image on right*/}
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src="/faaiz.jpg"
                            alt="Image of Faaiz"
                            height={600}
                            width={450}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );// return
}