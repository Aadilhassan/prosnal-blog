import { useLoaderData, json, Link } from "remix";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader = () => {
  let data = {
    skills: [
      {
        name: "Javascript",
        url: "https://javascript.com",

      },
      {
        name: "REMIX JS Framework",
        url: "https://remix.run",
      },
      {
        name: "Express.js",
        url: "https://express.js.org",
      },
      {
        name: "React js",
        url: "https://reactjs.org",
      },
      
      {
       name: "Node JS",
        url: "https://nodejs.org",

      }
    ],
    projects: [
        {
        url: "https://youtube-api-dl.onrender.com",
        name: "Youtube video Downloader"
      },
       {
        url: "https://zreels-3-1719pna6c-aadilhassan.vercel.app",
        name: "Movie streaming webapp"
      }, 
      {
        url: "https://lead-cash.live/",
        name: "affiliate marketing platform"
      }, 
      {
        url: "https://youtube-api-dl.onrender.com",
        name: "Youtube video Downloader"
      },
      {
        url: "https://rapidapi.com/aahanalhassan/api/real-time-climate-change-news/",
        name: "Climate Change news API"
      },
    
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Aadil Hassan web developer",
    description: "Aadil Hassan portfolio website , Aadil Hassan is a very pasionate Ranchi city ,India based Web Devloper who always tries to become more stronger than yesterday ",
    keywords: "Aadil Hassan, web devlopment,Aadil Hassan prosnal blog, Ranchi,Aadil Hassan India, Aadil Hassan Website",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();

  return (
    <div className="remix__page">
      <main>
        <h1><span style={{color: "#3DEFE9"}}
        >Aadil</span> <span style={{color: " #F44250"}}>Hassan</span> </h1>
        <h2><span style={{color: "#FECC1B"}}>Hello world this is Aadil Hassan of Ranchi city</span></h2>
        <p>I'am stoked that you're here. </p>
        
        <p>
          Feel free to take a look around my website. I have made a lot of wonderful projects with some of the best technoligies in  this world.
          I never stop learning because i think that world is moving very fast so you have to shift as fast as you can.
          currently i am learning nodejs and i am really enjoying it.
        </p>
        <p>
          Check out all the Projects that i have made and also in which i am working on.
        </p>
      </main>
      <aside>
        <h2><span style={{color: "#6BD968"}}
        >My Projects</span></h2>
        <ul>
          {data.projects.map(project => (
            <li key={project.url} className="remix__page__resource">
              <a href={project.url} prefetch="intent">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
        <h2><span style={{color: "#D83BD2"}}>Favrouite Technologies</span></h2>
        <ul>
          {data.skills.map(skill => (
            <li key={skill.url} className="remix__page__resource">
            <a href={skill.url}> {skill.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
