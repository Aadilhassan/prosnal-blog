import { useLoaderData, json, Link } from "remix";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader = () => {
  let data = {
    skills: [
      {
        name: "Node JS",
        url: "https://remix.run/docs"
      },
      {
        name: "REMIX JS Framework",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Express.js",
        url: "https://discord.gg/VBePs6d"
      },
      {
        name: "Discord Bots",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    projects: [
      {
        to: "demos/actions",
        name: "Climate Chage news API"
      },
      {
        to: "demos/about",
        name: "Discord AI Bot( JOEY BOT )"
      },
      // {
      //   to: "demos/params",
      //   name: "URL Params and Error Boundaries"
      // }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to MY world of Make believes.</h2>
        <p>I'am stoked that you're here. </p>
        <p>
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you’re used to. When you're
          ready to dive deeper, we've got plenty of resources to get you
          up-and-running quickly.
        </p>
        <p>
          Check out all the demos in this starter, and then just delete the{" "}
          <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
          folders when you're ready to turn this into your next project.
        </p>
      </main>
      <aside>
        <h2>My Projects</h2>
        <ul>
          {data.projects.map(project => (
            <li key={project.to} className="remix__page__resource">
              <Link to={project.to} prefetch="intent">
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2>Favrouite Technologies</h2>
        <ul>
          {data.skills.map(skill => (
            <li key={skill.url} className="remix__page__resource">
              <a href={skill.url}>{skill.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
