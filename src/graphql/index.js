import { GraphQLClient, gql } from "graphql-request"


export const graphcms = new GraphQLClient(import.meta.env.VITE_API_GRAPHCMS_ENDPOINT)

const category = `
    id,
    name,
    slug,
    color { hex }
`

const post = `
    id,
    title,
    slug,
    coverImage { url },
    content { html },
    excerpt,
    author { photo {url} },
    createdAt,
    updatedAt
`

export const QUERY_SLUG_CATEGORIES = gql`
    {
        categories(){
            name,
            slug
        }
    }
`

export const QUERY_POSTS = gql `
query getPosts($limit: Int!, $skip: Int!){
        posts(orderBy: updatedAt_DESC, first: $limit, skip: $skip){
            ${post}
            category(){
                ${category}
            }
        }

        countConnection: postsConnection(stage: PUBLISHED){
            aggregate {
                count
            }
        }
    }
`


export const QUERY_POSTS_BY_CATEGORY = gql `
    query getPostsByCategory($slug: String!, $limit: Int!, $skip: Int!){
        posts(
            orderBy: updatedAt_DESC,
            first: $limit, skip: $skip
            where: {category: {slug: $slug}}
            ){
            ${post}
            category(){
                ${category}
            }
        }

        countConnection: postsConnection(
            stage: PUBLISHED,
            where: {category: {slug: $slug}}
            ){
            aggregate {
                count
            }
        }
    }
`
export const QUERY_SEARCH_POSTS = gql `
    query getSearchPosts($slug: String!, $limit: Int!, $skip: Int!){
        posts(
            orderBy: updatedAt_DESC,
            first: $limit, skip: $skip
            where: {_search: $slug, AND : {slug_contains: $slug}}
            ){
            ${post}
            category(){
                ${category}
            }
        }

        countConnection: postsConnection(
            stage: PUBLISHED,
            where: {_search: $slug, AND : {slug_contains: $slug}}
            ){
            aggregate {
                count
            }
        }
    }
`

export const QUERY_ONE_POST = gql `
    query getOnePost($slug: String!){
        posts(where: {slug: $slug}){
            ${post}
            category(){
                ${category}
            }
        }
    }
`





