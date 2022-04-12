import { gql } from "@apollo/client"
export const CREATE_POST = gql`
mutation createPost(
$title:String,
$description:String
){
createPost(post:{title:$title , description:$$description}){
id
}
}
`
