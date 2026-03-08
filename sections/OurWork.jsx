import "@/styles/OurWork.css";
import Image from 'next/image';

export default function OurWork() {

  const projects = [
    {
      id:1,
      name:"Fintech Dashboard",
      image:"/images/mobile1.jpg",
      tags:["Fintech","Dashboard","Analytics"]
    },
    {
      id:2,
      name:"Ecommerce Platform",
      image:"/images/mobile2.jpg",
      tags:["Ecommerce","Web App","UI/UX"]
    },
    {
      id:3,
      name:"Healthcare Portal",
      image:"/images/mobile3.jpg",
      tags:["Healthcare","Portal","Security"]
    },
    {
      id:4,
      name:"AI SaaS Platform",
      image:"/images/mobile4.jpg",
      tags:["AI","SaaS","Automation"]
    },
    {
      id:5,
      name:"Real Estate App",
      image:"/images/mobile5.jpg",
      tags:["Real Estate","Marketplace"]
    },
    {
      id:6,
      name:"Logistics Dashboard",
      image:"/images/mobile6.jpg",
      tags:["Logistics","Tracking","Analytics"]
    }
  ];

  return (

    <section className="work-section">

      <div className="work-header">

        <div className="work-header-top">

          <div className="work-text">

            <h2>How we have helped other businesses</h2>

            <p>
              We partner with companies across industries to design,
              build and scale digital products that create real impact.
            </p>

          </div>

          <a href="/projects" className="work-btn">
            View All Projects
          </a>

        </div>

      </div>

      <div className="projects-grid">

        {projects.map((project)=>(
          <div key={project.id} className="project-card">

            <div className="project-image">
              <Image src={project.image} alt={project.name} width={150} height={150}/>
            </div>

            <div className="project-info">

              <div className="project-text">

                <h3>{project.name}</h3>

                <div className="project-tags">
                  {project.tags.map((tag,index)=>(
                    <span key={index}>{tag}</span>
                  ))}
                </div>

              </div>

              <a href={`/projects/${project.id}`} className="project-arrow">
                →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>

  );
}