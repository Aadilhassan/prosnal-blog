import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";

const GetPostsQuery = gql`
  {
    posts {
      slug
      title
  
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
        <ul>
            {data.posts.map(({ slug, title }) => (
                <h1 key={slug}>
                    <Link to={`/blogs/${slug}`} prefetch="intent">
                        <a>{title}</a>
                    </Link>
                </h1>
            ))}
        </ul>
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
