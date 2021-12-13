import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";

const GetPostsQuery = gql`
  {
    posts( orderBy: createdAt_DESC) {
    id
    slug
    title
    excerpt
    updatedBy {
      id
    }
       createdAt
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


            {data.posts.map(({ slug, title, excerpt,createdAt }) => (
                <p key={slug}>
                    <div>
                       <span> <h2>{title}</h2></span><span style={{float: "right"}}><b>Created at:</b><tt>{createdAt.slice(0, 10)}</tt></span>
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
