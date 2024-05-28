import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clq7yqm9f9kwb01um0lix6ww0/master";

export const getCourseList=async(level)=>{
    const query=gql `
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          price
          level
          tags
          time
          author
          description {
            markdown
          }
          banner {
            url
          }
          chapter(last: 100) {
            content {
              heading
              description {
                markdown
                html
              }
              output{
                markdown
                html
              }
            }
            title
            id
          }
        }
      }      
    `

    const result = await request(MASTER_URL,query);
    return result;
}
export const enrollCourse=async(courseId,userEmail)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createUserConrolledCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`", course: {connect: {id: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserConrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  
  
  `
  const result = await request(MASTER_URL,mutationQuery);
  return result;
}
export const getUserEnrolledCourse=async(courseId,userEmail)=>{
  const query=gql `
  query GetUserEnrolledCourse {
    userConrolledCourses(where: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) {
      id
      courseId
      completedChapter {
        chapterid
      }
    }
  }
  
  `
  const result = await request(MASTER_URL,query);
  return result;
}

export const MarkChapterCompleted=async(chapterid,recordId)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    updateUserConrolledCourse(
      data: {completedChapter: {create: {data: {chapterid: "`+chapterid+`"}}}}
      where: {id: "`+chapterid+`"}
    ) {
      id
    }
    publishManyUserConrolledCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  
  `
  const result = await request(MASTER_URL,mutationQuery);
  return result;
}