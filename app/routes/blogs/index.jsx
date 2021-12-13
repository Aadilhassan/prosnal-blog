import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";

const GetPostsQuery = gql`
  {
    posts {
      slug
      title
      excerpt
    }
  }
`;

export let loader = async () => {
    const graphcms = new GraphQLClient(
        "https://api-ap-south-1.graphcms.com/v2/ckwztlzh20bi001xp1wboeil5/master"
    );

    const { posts } = await graphcms.request(GetPostsQuery);
    return json({ posts });
};




export default function Index() {
    let data = useLoaderData();

    return (
        <>


            {data.posts.map(({ slug, title, excerpt }) => (
                <p key={slug}>
                    <div>
                    <h2>{title}</h2>
                       <span>{excerpt}---</span>
                        <span> <Link to={`/blogs/${slug}`} prefetch="intent" >
                    Read More..
                    </Link></span></div>
                </p>
            ))}
       </>
    );
}
// export default function () {
//
//     return(
//         <>
//         <h1>Hello</h1>
//         </>
//     )
//     }
