import ContactButton from "../components/contactButton";
import Image from "next/image";
import Navbar from "../components/nav";

export default function Hero() {
    return (
        <section className="w-full bg-white text-black h-full">
            <div className="mx-auto flex flex-col items-center justify-between gap-10 px-6 py-10 md:flex-row md:items-center md:px-12">
                <div className="max-w-md space-y-4 text-left"> {/* text on left*/}
                    <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-4xl md:text-7xl lg:text-nowrap">
                        Hi, I'm Faaiz. <br />A software and cloud <br />developer based in <br />Vancouver, BC.
                    </h1>
                    <p className="text-base text-gray-600 lg:text-lg max-w-fit">
                        I’m a software and cloud developer focused on scalable applications, cloud infrastructure, and real-world problem solving.
                    </p>
                    <div className="pt-4">
                        <ContactButton word="Connect" />
                    </div>
                </div>

                <div className="flex justify-center md:justify-end"> {/* image on right*/}
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src="public/faaiz.JPG"
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