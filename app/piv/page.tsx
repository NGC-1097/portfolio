import Layout from "@/app/components/Layout";

export default function DevelopmentAndVision() {
  return (
    <Layout>
    <div className="min-h-screen bg-neutral-100">
      {/* Professional Identity Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-800">My Professional Identity</h2>
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col lg:flex-row">
              {/* Left Column - Profile */}
              <div className="lg:w-1/4 bg-neutral-900 text-white p-8">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-6">
                    <img src="/piv/me.jpeg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 text-center">Future Product Designer</h3>
                  <p className="text-blue-400 mb-6 text-center">Technology meets aesthetics</p>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="lg:w-3/4 p-8">
                <div className="prose max-w-none">
                  <p className="mb-4 text-lg font-medium text-neutral-800">
                    I am a designer who bridges the gap between technological functionality and aesthetic beauty.
                  </p>
                  
                  <p className="mb-4 text-neutral-600">
                    What motivates me to pursue this endeavor is my insatiable aim to discover new ways to create products. From an early age, I was fascinated by technology, which has definitely shaped my entire life. What truly sparked something remarkable in me was discovering Apple's approach to design. I still remember the mesmerizing design of the original iPhone in 2007—the harmonious combination of elements and seamless technology integration awakened my passion for design.
                  </p>
                  
                  <p className="mb-6 text-neutral-600">
                    As an emerging product designer with a strong foundation in electronics and coding, I approach design challenges by first understanding user needs, then applying my technical knowledge to create solutions that are both aesthetically pleasing and functionally advanced. I identify primarily as a technical product designer with a focus on networking technology, aiming to increase global connectivity through thoughtfully designed devices.
                  </p>
                  
                  <p className="mb-6 text-neutral-600">
                    My design methodology combines the aesthetics of simplicity inspired by Jony Ive and Dieter Rams' philosophy of "Less, but better" ("Weniger, aber besser") with evidence-based user research. When approaching a design challenge, I begin by researching user needs, then ideate through sketching and CAD modeling, before prototyping functional solutions that integrate both form and technology. I excel at translating technical capabilities into intuitive user experiences, and I have particular strengths in understanding electronic systems, 3D modeling, and anticipating how technology will evolve.
                  </p>
                  
                  <p className="mb-6 text-neutral-600">
                    I value collaboration and believe diverse perspectives lead to stronger designs. In team settings, I naturally gravitate toward the technical implementation aspects, but I'm developing skills to contribute effectively to user research and concept development as well. I'm constantly seeking to expand my expertise in human-centered design methodologies while building upon my technical foundation.
                  </p>
                  
                  <p className="mb-6 text-neutral-600">
                    What sets me apart is my ability to bridge the gap between advanced technology and accessible design—creating products that feel futuristic yet remain intuitive to use. I approach challenges with flexibility, viewing constraints as opportunities to find creative technical solutions rather than limitations.
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
    </section>
      
      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-800">My Vision</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>
          
          <div className="bg-neutral-50 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-6">
                <div className="relative h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                  <div className="ml-6">
                    <img 
                      src="/piv/vision.jpg" 
                      alt="Design vision illustration" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Blending premium designs with functional technology</h3>
                
                <div className="prose max-w-none text-neutral-600">
                  <p className="mb-4">
                    As a designer I want to create products that blend both the premium aspect and the useful aspect of design into one. 
                    Since I like electronics, my objective is to combine both fields into powerful designs that change the landscape of 
                    networking. As such, the world nowadays relies more and more on data, thus I want to empower the world to have access 
                    to fast networking and access to the internet.
                  </p>
                  
                  <p className="mb-6">
                    Why I would want to do that? The answer is simple, nowadays with the creation of what we call internet, 
                    many people are capable of inventions that no-one could even fathom to imagine. There's also a very big reason, 
                    since the creation of internet only 66% of the population have access to this wonderful tool.
                  </p>
                  
                  <p className="mb-6">
                    I imagine a world where everybody has access to an infinite pool of information and is capable to drive 
                    humanity to new horizons. The more brains that are thinking, the better this world would be. To achieve this, 
                    I wish to create beautiful products that encompass my vision of industrial design oriented products and my love 
                    for electronics into one, thus I want to be a product designer primarily but also an electrical engineer at the same time. 
                    Combining both areas of expertise will make the products even better, and useful.
                  </p>
                  
                  <p className="mb-8">
                    As important as it might be, creating products that are futuristic in nature but people are able to use them 
                    could also propel humanity into a more sci-fi world in which products, appliances, and everyday utilities 
                    look more like the sci-fi movies we are seeing today.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                    <h4 className="text-lg font-medium text-blue-900 mb-4">Competencies Being Developed</h4>
                    <ul className="space-y-2 pl-0">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-neutral-700">Dual expertise in electrical engineering and product design</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-neutral-700">User-centered research methodology for technology products</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-neutral-700">Advanced prototyping techniques for electronic products</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-neutral-700">Strategic thinking about global connectivity solutions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-neutral-700">Emerging network technology analysis and implementation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    
      {/* Simple Call To Action 
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Let's connect!</h3>
          <p className="text-blue-100 mb-8">I'm open to collaboration opportunities and project discussions</p>
          <a href="/contact" className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors">Contact Me</a>
        </div>
      </section>
      */}
    </Layout>
  );
}