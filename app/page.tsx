import Link from "next/link";
import Layout from "@/app/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section id="hero" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Hi, I'm <span className="text-blue-600">Robert Lazar</span>
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-5">
                Im an industrial desgin student at the Technische Universiteit Eindhoven, currently in my first year and this would be my small place to fill with my projects and learning goals.
              </p>
              <div className="mt-8">
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
                <img 
                  src="/home/profile.jpeg" 
                  alt="Robert Lazar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section for past/preset/future */}

      <section id="child-1" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/home/boombox.png" 
                    alt="Past Journey" 
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Past</h2>
                <p className="font-medium text-gray-600">
                Having previous experiences in both coding and electronics, I took a decision to try something different from my usual knowledge. Since I always designed elements for both myself and my friends in CAD modeling, I wanted to explore what Industrial Design could offer me. I had reviewed the curriculum prior to appliying for the bachelor and it aligned with my expectations of what I can imagine myself doing.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/home/present.jpeg" 
                    alt="Present Focus" 
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Present</h2>
                <p className="font-medium text-gray-600">
                  Currently im in my firt year of Industrial Design, im still honing my electronics and coding expertise while appliying to these, a different perspective. Subjects like Human-Centered Design have taught me how different a problem can be approach, even from a designers perspective. It also helped me realised how to put the user as a first, and since I want to pursue a product design endeavour in the future this has brough quite an invaluable experience to me. This way im able to understand the client/user needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/home/.jpg" 
                    alt="Future Vision" 
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Future</h2>
                <p className="font-medium text-gray-600">
                Looking ahead, I aim to complete my Industrial Design education while maintaining and expanding my technical capabilities in electronics and coding. I envision myself specializing in product design with a focus on networking technologies, creating devices that are both aesthetically pleasing and highly functional. My goal is to develop products that increase global access to the internet, helping to close the digital divide that currently limits 34% of the world's population from accessing this vital resource. By combining industrial design principles with technical knowledge, I hope to create intuitive, beautiful, and accessible technology that feels futuristic yet remains approachable for all users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </Layout>
  );
}