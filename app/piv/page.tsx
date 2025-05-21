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
                    What motivates me to pursue this journey is my insatiable aim to discover new ways to create products. From an early age, I was fascinated by technology, which has definitely shaped my entire life. What truly sparked something remarkable in me was discovering Apple's approach to design. I still remember the mesmerizing design of the original iPhone in 2007, the harmonious combination of elements and seamless technology integration awakened my passion for design.
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
                    However, I am also aware of areas where I can improve. Time management is a huge a challenge for me, and I sometimes find myself hyper-focused on the technical aspects of a project, potentially overlooking design considerations. I've also noticed that my interest can dissapear when a topic doesn't immediately spark my curiosity, leading to occasional procrastination. Addressing these weaknesses is a considerable priority for me, and I'm actively working on strategies to enhance my time management, maintain a broader design perspective, and stay engaged across diverse projects even if these are boring or lack any interesting aproach to them.
                  </p>

                  <p className="mb-6 text-neutral-600">
                    Specifically, to improve my time management, I've started implementing techniques like the Pomodoro method, but I find that active recall works best for me, Im also using digital task management tools like Trello to break down large projects into smaller, manageable tasks, this I also took into practice to use it also for my own personal tasks. I'm also scheduling dedicated time for user research and concept development to ensure a balanced approach to design. To combat procrastination, I'm focusing on finding the inherent interest in every project, even if it's initially challenging, and setting daily goals to maintain momentum.
                  </p>

                  <p className="mb-6 text-neutral-600">
                    Looking forward, I am excited to explore the intersection of AI and networking technology, as I believe this will revolutionize how we connect and interact with the digital world. What truly triggers my passion is the potential to create products that not only solve practical problems but also inspire awe and wonder. I am driven by the idea of designing intuitive, futuristic devices that make cutting-edge technology accessible to everyone.
                  </p>

                  <p className="mb-6 text-neutral-600">
                    What I genuinely enjoy doing is diving deep into the technical aspects of a project, experimenting with new materials and technologies, and then translating those findings into elegant, user-friendly designs as an example this portofolio website made by me. I find immense satisfaction in the process of bringing complex technical concepts to life through simple, intuitive interfaces.
                  </p>
                  
                  <p className="mb-6 text-neutral-600">
                    What sets me apart is my ability to bridge the gap between advanced technology and accessible design, creating products that feel futuristic yet remain intuitive to use. I approach challenges with flexibility, viewing constraints as opportunities to find creative technical solutions rather than limitations although this sometime might be challenging.
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
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Blending Premium Designs with Functional Technology for a Connected Future</h3>

                <div className="prose max-w-none text-neutral-600">
                    <p className="mb-4">
                        As a designer and engineer, my vision is to create products that seamlessly integrate premium aesthetics with cutting-edge functionality, particularly in the realm of networking technology. With the world's increasing reliance on data, I aim to develop solutions that democratize access to fast, reliable internet, empowering individuals and communities globally.
                    </p>

                    <p className="mb-6">
                        My motivation stems from the belief that universal internet access is a catalyst for innovation and progress. Currently, only 66% of the world's population has access to this transformative tool, limiting the potential for global collaboration and knowledge sharing.
                    </p>

                    <p className="mb-6">
                        I envision a future where everyone has access to an infinite pool of information, driving humanity towards new frontiers. To achieve this, I strive to design intuitive, technologically advanced products that bridge the gap between industrial design and electrical engineering. By combining these disciplines, I can create solutions that are not only beautiful but also profoundly useful.
                    </p>

                    <p className="mb-8">
                        This vision extends beyond mere connectivity. I imagine a "connected ecosystem" where technology fosters collaboration and community, rather than isolation. In this future, everyday utilities and appliances seamlessly integrate with advanced networks, creating intuitive and user-friendly experiences. For example, imagine smart home systems that dynamically adjust to user needs, or interactive public spaces that facilitate real-time collaboration. By focusing on user-centered design, I aim to ensure that these technologies enhance human interaction and connection, rather than detract from it.
                    </p>

                    <p className="mb-10">
                      How each expertise areas empowers my future vision as a designer:
                    </p>

                    <ul className="space-y-6 pl-6 text-neutral-600 mb-12">
                    {[
                      {
                        title: "User & Society",
                        content: "I will conduct regular ethnographic interviews and Wizard of Oz tests, leveraging Human-Centered Design methodologies to gather deep user insights ethically, respecting their privacy and confidentiality. These insights will directly inform and validate my product concepts, ensuring they truly resonate with user needs."
                      },
                      {
                        title: "Math, Data and Computing",
                        content: "I will use data analysis skills, such as data cleaning, aggregation, and visualization with Python tools like pandas and SeaBorn to interpret user feedback effectively. By clearly visualizing user data, I can rapidly identify important trends, user preferences, and outliners in the form of problems, this will lead into forming targeted design improvements."
                      },
                      {
                        title: "Technology and Realization",
                        content: "With my relative understanding at this point in time of physics and material science, I will meticulously choose durable materials that give the user a premium feeling and are long lasting. Leveraging iterative prototyping with advanced PCB design and efficient coding I can rapidly evolve designs towards their optimal performance in terms of hardware/software and outstanding user experience."
                      },
                      {
                        title: "Creativity and Aesthetics",
                        content: "Applying quick, experimental prototyping approaches like the Magic Machine Workshop that we had in CBL2 will help create intuitive and aesthetically refined products using act before though approach. Embracing iterative, low-fidelity methods initially will allow flexibility and innovation, ultimately evolving into simple, user-centered designs inspired by Dieter Rams minimalistic approach."
                      },
                      {
                        title: "Business and Entrepreneurship",
                        content: "By founding a my startup by June 2025, I will gain direct, practical experience in entrepreneurship, marketing, and product scaling. Utilizing insights from personal growth and entrepreneurial literature Iw ill translate innovative concepts into viable products and effectively be a successful “business entrepreneur”."
                      }
                    ].map((item, index) => (
                      <li key={index} className="relative pl-6 before:absolute before:top-2 before:left-0 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
                        <h4 className="font-medium text-neutral-800 mb-2">{item.title}</h4>
                        <p className="text-sm leading-relaxed">{item.content}</p>
                      </li>
                    ))}
                  </ul>
                    <p className="mb-14">
                      Together, these interconnected expertise areas form the essential foundation for my future career as a product design, a future I want to aspire to become, capable of delivering transformative products that democratize access to technology globally.
                    </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}