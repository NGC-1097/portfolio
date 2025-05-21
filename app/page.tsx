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
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Past</h2>
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
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Present</h2>
                <p className="font-medium text-gray-600">
                  Currently im in my firt year of Industrial Design, im still honing my electronics and coding expertise while appliying to these, a different perspective. Subjects like Human-Centered Design have taught me how different a problem can be approach, even from a designers perspective. It also helped me realised how to put the user as a first, and since I want to pursue a product design endeavour in the future this has brough quite an invaluable experience to me. This way im able to understand the client/user needs.
                </p>
              </div>
            </div>

            {/* Enhanced Future Section with PDP Integration */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-1">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                  <span className="text-gray-900 mr-2">Future</span> 
                  <span className="h-px flex-grow bg-gray-200 ml-4"></span>
                </h2>
                
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <p className="font-medium text-gray-700 mb-6">
                      Looking ahead, I aim to complete my Industrial Design education while maintaining and expanding my technical capabilities in electronics and coding. I envision myself specializing in product design with a focus on networking technologies, creating devices that are both aesthetically pleasing and highly functional.
                    </p>
                    
                    {/*
                    <div className="relative h-56 w-full rounded-lg overflow-hidden mb-6 shadow-md">
                      <Image 
                        src="/home/future-vision.jpg" 
                        alt="Future Vision" 
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    */}

                    <p className="font-low text-gray-700">
                      My goal is to develop products that increase global access to the internet, helping to close the digital divide that currently limits 34% of the world's population from accessing this vital resource. By combining industrial design principles with technical knowledge, I hope to create intuitive, beautiful, and accessible technology that feels futuristic yet remains approachable for all users.
                    </p>
                  </div>
                  
                  <div className="lg:w-1/2 bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Professional Development Plan</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Current strengths:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Intermediate ability in industrial drawings and technical documentation.</li>
                        <li>Strong aptitude for interface design mainly UI and CAD modeling.</li>
                        <li>Experience in software and electronic design.</li>
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Areas for improvement:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Mechanical design principles for prototyping based on an approach of mathematics and physics.</li>
                        <li>Prototype iterations and refinement while also documenting the process RTDP.</li>
                        <li>Integration of user ideas with prototype feasibility, assesing if one's ideas can be made real.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key goals:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <p className="text-gray-700">Advance mechanical design skills specially using Solidworks.</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <p className="text-gray-700">Improve coding capabilities in other languages such as Rust.</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <p className="text-gray-700">Develop aesthetic and physical designs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </Layout>
  );
}