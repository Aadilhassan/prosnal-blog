import { useLoaderData, json,} from "remix";
import { GraphQLClient, gql } from "graphql-request";



const GetPostBySlug = gql`
  query PostPageQuery($slug: String!) {
    post(where: { slug: $slug }) {
         
  stage
  remoteId: id
  createdAt
  updatedAt
  publishedAt
  title
  slug
  date
  excerpt
  coverImage {
    ... on Asset {
      remoteTypeName: __typename
      remoteId: id
      locale
    }
  }
  content {
    ... on RichText {
      raw
      html
      markdown
      text
    }
  }
  tags
  author {
    ... on Author {
      remoteTypeName: __typename
      remoteId: id
    }
  }
  seo {
    ... on Seo {
      remoteTypeName: __typename
      remoteId: id
    }


  }}
  }
`;

export let loader = async ({ params }) => {
    const { slug } = params;

    const graphcms = new GraphQLClient(
        "https://api-ap-south-1.graphcms.com/v2/ckwztlzh20bi001xp1wboeil5/master"
    );

    const { post } = await graphcms.request(GetPostBySlug, {
        slug,
    });

    return json({ post });

};
export const meta = () => {
    let data = useLoaderData();
    return {
        title:`"${ data.post.title}" Hello`,
        description: "Welcome to my website aadilhassan.me in this website i talk mostly about web devlopment and software devlopment. I never stop learning becsause I am Aadil Hassan",
        keywords: "Aadil Hassan, web devlopment,Aadil Hassan prosnal blog, Ranchi,Aadil Hassan India, Aadil Hassan Website",
    };
};
export default function PostPage() {
    let data = useLoaderData();

    return (
        <>

            <div style={{ img:"maxWidth= 100vw"}}>
            <h1>{ data.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.post.content.html }} />
            {/*<html>{data.post.content.html}</html>*/}
            {/*<p>{data.post.Name}</p>*/}
            {/*<p>{data.post.price / 100}</p>*/}
            </div>
        </>
    );
}
