import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Link from "next/link";
import TechStack from "../components/TechStack";
const Introductions: React.FC = () => {
    return (
        <section className="flex justify-center  intro lg:items-center flex-col h-screen  bg-blue" id="head">
            <div className="lg:w-2/3  ">
                <Heading type='h1'>Hi! <span className="block" >My name is Richmond!</span></Heading>
                <p className="max-w-[650px] dark:text-white  my-10 font500 text-[16px] lg:text-base text-body">
                    I'm a software developer! I can help you build a product, feature or
                    website. Look through some of my work and experience! If you like what
                    you see and have a project you need coded, don't hesitate to contact
                    me.
                </p>

                <div className="gap-5 flex">
                    <Button>Read more about me</Button>
                    <Button>Skip to projects</Button>
                </div>
            </div>

            <Link className="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10 cursor-pointer rounded-md transition-colors hover:text-primary-300 focus-visible:text-primary-300" href="/#featured">
                <Image
                    className="animate-bounce"
                    src={'/svg/arrowDown.svg'}
                    width={50}
                    height={60}
                    alt="Arrow down"
                />

            </Link>
        </section>
    );
}

export default Introductions;


