'use client';

import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Expertise_Areas() {
  const [activeTab, setActiveTab] = useState("business");

  const expertiseAreas = [
    {
      id: "business",
      title: "Business and Entrepreneurship",
      description: `Although Business and Entrepreneurship wasn't in the curriculum for my first year, I've actively pursued entrepreneurial endeavors both from a university perspective and as personal business initiatives.
      \n
      I co-started a project with a friend from Electrical Engineering where we, along with two other members, are participating in the TU/e contest with an idea to predict landslides using LiDAR technology. This experience has taught me about teamwork across disciplines and how to develop a business case for technical innovations, both as personal findings and also from the workshops that are offered, which I find increadibly valuable.
      \n
      Additionally, I'm working on a personal project that combines multiple disciplines into a single commercial product, integrating coding, design, electronics, and user behavior considerations. This project is one reason why I find the user-driven approach of Human-Centered Design so important on a personal level.
      \n
      As a designer, I'm already approaching challenges from both a designer's perspective in creating products (which aligns with my future career goals) and applying these techniques at a personal level in entrepreneurial contexts. Looking forward, I plan to further develop my business skills through seeking mentorship opportunities and potentially exploring business-focused electives in my future studies.`,
      images: [
        { src: "/expertise_areas/1/1.jpg", alt: "LiDAR sensor" },
        { src: "/expertise_areas/1/2.jpeg", alt: "Market plan workshop contest"  }
      ]
    },
    {
      id: "creativity",
      title: "Creativity and Aesthetics",
      description: `I approach design with simplicity as my guiding principle, heavily influenced by Dieter Rams' philosophy. This minimalist aesthetic isn't just about visual appeal, to me its about the harmony that it brings. When working on projects, like the boombox showcased on my homepage, I often envision the physical case and aesthetic elements far ahead of internal components or electronics, even the features of lighning features, feel of it when using the device or materials involved.
      \n
      Throughout my university courses, I've developed techniques to express this design language through various mediums. Sketching has become an essential tool for me to explore ideas quickly, while my work with digital design tools has allowed me to refine these concepts with precision. I've learned that good design doesn't draw attention to itself but rather to its purpose.
      \n
      I believe the best designs are those that feel intuitive and natural to users while maintaining visual appeal. This balance between functionality and aesthetics has guided my approach to various projects, where I strive to eliminate unnecessary elements until only what's essential remains.
      \n
      Looking forward, I aim to further develop my personal design language while exploring how simplicity can be maintained even in increasingly complex products. I want to challenge myself to create designs that are not only visually clean but also emotionally resonant and meaningful to users.`,
      images: [
        { src: "/expertise_areas/2/1.jpeg", alt: "Magic machine workshop" },
        { src: "/expertise_areas/2/2.jpeg", alt: "Enclouse P1 made out of carboard" },
        { src: "/expertise_areas/2/3.jpeg", alt: "Some sketches of mine"}
      ]
    },
    {
      id: "math",
      title: "Math, Data and Computing",
      description: `I see Mathematics and Physics as foundational pillars that strengthen my design approach by enabling precision and functional understanding. These disciplines have allowed me to create designs that are not only aesthetically pleasing but structurally sound and materially appropriate. The application of calculus and physics principles has been crucial in developing both low-fidelity prototypes and high-fidelity finished designs that can last.
      \n
      My background in Python gave me a solid starting point, but the Data Analysis course have opened up new possibilities for my design work. I've learned practical ways to filter and analyze data, then create meaningful visualizations using tools like pandas and seaborn. 
      \n
      These skills have helped me bring together technical analysis and visual design in my university projects and future career as a designer.`,
      images: [
        { src: "/expertise_areas/3/1.png", alt: "Data Anslisys Seaborn" },
        { src: "/expertise_areas/3/2.jpeg", alt: "Bridge developed in physics with paper" },
      ]
    },
    {
      id: "technology",
      title: "Technology and Realization",
      description: `When it comes to technology, this is what I'm truly passionate about. I will always go above and beyond on technological aspects of projects, whether working alone or in groups. From 3D CAD modeling to coding to electronic design and assembly, I consistently find ways to leverage technology to enhance my design work. I've even designed PCBs to minimize electronic components in my first P1 project.
      \n
      For that reason, I never hesitate to learn a new programming language, design tool, or technical skill that can benefit my projects. Creative Programming has been particularly influential, teaching me how to derive compelling design elements from code and mathematical functions while finding beauty in logic and patterns.
      \n
      These skills have helped me a lot in my own projects and when working with classmates in group assignments. I'm excited to keep learning new technical skills during my studies because I think being good with different technologies makes it easier to turn cool design ideas into reality.`,
      images: [
        { src: "/expertise_areas/4/1.png", alt: "3D view of PCB" },
        { src: "/expertise_areas/4/2.png", alt: "Schematic of main SoC" },
        { src: "/expertise_areas/4/3.jpg", alt: "Final prototype P1" }
      ]
    },
    {
      id: "society",
      title: "User and Society",
      description: `To me, User & Society aims to understand user needs to create better design solutions. Through my university studies, particularly in 'Human-Centered Design,' I've learned valuable approaches like the Wizard of Oz technique, which helps test concepts before full implementation. I've also gained appreciation for rapid prototyping with low-fidelity models to quickly gather user feedback.
      \n
      Conducting user studies has become a fundamental part of my design process. I've learned to consider not just the practical aspects of gathering data, but also the ethical implications regarding privacy and respecting user integrity. These considerations have made me more conscious of the responsibility designers have toward the people who use our products.
      \n
      This knowledge is especially valuable to me on a personal level since I aim to start my own startup in the future. Understanding users deeply and respecting societal implications will be crucial for building products that people actually want and need. Looking ahead, I plan to continue developing my user research skills by exploring more diverse user groups and contexts, creating a solid foundation for both my academic work and entrepreneurial ambitions.`,
      images: [
        { src: "/expertise_areas/5/1.png", alt: "Persona #1 made from users interviews" },
        { src: "/expertise_areas/5/2.png", alt: "Persona #2 made from users interviews" },
      ]
    }
  ];

  
    const revisedExpertiseAreas = [
      {
          id: "business",
          title: "Business and Entrepreneurship",
          description: `Although Business and Entrepreneurship wasn't in my first year's curriculum, I've been really drawn to the entrepreneurial side of things, both at the TU/e and on my own.

          For instance, I jumped into a project with a friend from Electrical Engineering for the TU/e contest. We're working with two others on using LiDAR to predict landslides. It's been a great learning experience on how to work with different disciplines and figuring out from the workshops how to build a business plan and how to approach the investors part.

          On the side, I'm also pouring energy into a personal project that I have been wanting to create for quite some years that mixes coding, design, electronics, and user behavior into one product idea. This really drives home why I find Human-Centered Design so important and that's also why I want better understand the user.

          So, I'm already trying to think like a designer who needs to make products people want, which is exactly what I want to do in the future. Looking ahead, I really want to get serious about validating my personal project idea, maybe by talking to the coaches who are already giving us tips during the TU/e contest. I have already had one coach that I felt in love with the feedback given, so when I have my business plan setup, I would try to approach him if he's willing to give any feedback back to me. Note to mention that I have already a partner with experience in the business aspect from another university for this project, which was quite some convincing.`,
          images: [
              { src: "/expertise_areas/1/1.jpg", alt: "LiDAR sensor concept" },
              { src: "/expertise_areas/1/2.jpeg", alt: "Market plan workshop at contest" }
          ]
      },
      {
          id: "creativity",
          title: "Creativity and Aesthetics",

          description: `My design approach is all about simplicity without leaving features out, heavily influenced by Dieter Rams. For me, minimalism isn't just looks; it's about the harmony it brings when someone looks at a product. When I'm working on something, like the boombox on my homepage, I often picture the physical case, the feel, the materials, even the lighting features, and how the casing will interact based on the song being played at the moment,way before getting deep into the electronics.

          Through my courses, I've picked up ways to express this. Sketching is essential for me to get ideas out quickly, and digital tools help me refine them. I've learned that good design feels natural and just works, needing a good plan to get there is what im working on getting both faster and with better quality.

          I truly believe the best designs balance function and visual appeal, feeling intuitive. I try to strip away the extra stuff until only the essentials remain. Going forward, I want to keep developing my own design language. I plan to put together a personal style and design guidelines for myself by the end of this year to solidify my approach. I also want to tackle a project by next summer that really challenges me to keep things simple even when the tech inside gets complicated.`,
          images: [
              { src: "/expertise_areas/2/1.jpeg", alt: "Magic machine workshop" },
              { src: "/expertise_areas/2/2.jpeg", alt: "Cardboard enclosure P1 prototype" },
              { src: "/expertise_areas/2/3.jpeg", alt: "Some of my design sketches"}
          ]
      },
      {
          id: "math",
          title: "Math, Data and Computing",
          description: `I see Math and Physics as the backbone that makes my designs strong and functional. Understanding these helps me make stuff that not only looks good but is built right and uses the right materials, whether it's a quick prototype or a finished design meant to last.

          My Python background gave me a head start, but the Data Analysis course really broadened my horizon. Learning how to properly filter, analyze, and then visualize data with tools like pandas and seaborn was a game-changer. It taught me how important it is to plan out how you'll handle data to get meaningful insights.

          These skills help me connect the technical side with the visual design side in my projects. Moving forward, I want to get better at using data to back up my design choices. For my next big project, I aim to use these analysis skills to really dig into user feedback and present the findings visually by next Demo day of P2. I'm also curious about machine learning, so I plan to take an online intro course by the end of the semester to see how it might apply better improving the products I design or help to desing.`,
          images: [
              { src: "/expertise_areas/3/1.png", alt: "Data Analysis graph using Seaborn" },
              { src: "/expertise_areas/3/2.jpeg", alt: "Paper bridge built for physics class" },
          ]
      },
      {
          id: "technology",
          title: "Technology and Realization",
          description: `Okay, when it comes to technology, this is what I'm truly passionate about. I always push myself on the tech aspects of projects, alone or in groups. From 3D CAD and coding to electronics design and soldering things together, I love using tech to make designs better. I even designed custom PCBs for my P1 project just to make the electronics cleaner and more compact to our case design.

          Because of this, I never hesitate to learn a new programming language, tool, or skill if it helps. Creative Programming was a new thing, it showed me how code and math can create cool design elements and how there's beauty in logic. Getting my P1 prototype working involved a lot of planning to make sure the tech parts fit together.

          These skills have helped me a lot in my own projects and in group projects. I'm definitely going to keep learning new tech skills. Specifically, I want to get really good at complex designs in Solidworks for my next portfolio piece by the end of this year at best. I also plan to build a prototype using an ESP32 or similar microcontroller, making it respond to sensors, and document it properly online by the end of this year. Being good with tech just makes it easier to turn cool ideas into reality. And imagination into something tangible.`,
          images: [
              { src: "/expertise_areas/4/1.png", alt: "3D view of my PCB design" },
              { src: "/expertise_areas/4/2.png", alt: "Schematic of the main chip section" },
              { src: "/expertise_areas/4/3.jpg", alt: "Final prototype for P1" }
          ]
      },
      {
        id: "society",
        title: "User and Society",
        description: `To me, User & Society is all about understanding people to make better designs. My studies, especially 'Human-Centered Design,' has taught me really useful ways to do this, like the Wizard of Oz technique to test ideas early, and how valuable quick, low-fi prototypes are for feedback.

        Doing user studies is now a core part of how I design. I learned you have to think carefully about how you run these studies, not just collecting data, but also being ethical about privacy and respecting people. It made me realize the responsibility we have as designers and the concerns people might have with their information.

        This is crucial to me personally, as I'm actively working on launching my own startup. The plan is to incorporate the company this June (2025) and dedicate the summer to heavy prototyping. To make sure we're building the right thing, I aim to run detailed usability tests with at least 10 potential users during this summer prototyping phase. The goal is then to release the first iteration or start building serious hype around Christmas 2025.
        Alongside this intense practical work, I also want to spend some time researching and writing a short piece by December about adapting user research for different cultural and socio-economic contexts, to keep broadening my perspective.`,
        images: [
             { src: "/expertise_areas/5/1.png", alt: "Persona #1 based on user interviews" },
             { src: "/expertise_areas/5/2.png", alt: "Persona #2 based on user interviews" },
        ]
      }
    ];

  const activeExpertise = revisedExpertiseAreas.find(area => area.id === activeTab);

  return (
    <Layout>
      <section id="expertise_areas" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Expertise Areas</h2>
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex flex-wrap -mb-px">
              {revisedExpertiseAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`mr-8 py-4 px-1 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === area.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {area.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          {activeExpertise && (
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{activeExpertise.title}</h3>
                <div className="prose prose-lg max-w-none">
                  {activeExpertise.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-600">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="space-y-6">
                  {activeExpertise.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative h-56 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <Image 
                          src={image.src} 
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <p className="text-gray-500 text-sm">[{image.alt}]</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}