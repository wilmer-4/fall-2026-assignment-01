import fs from "fs"

export type CommentSummary = {
  postId: number,
  id: number,
  commenterEmail: string,
} // defined and export type commentSummary

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`) //fetch collection
  const data = await response.json() as {
    postId: number;
    id: number
    email: string
  }[]; // parse into array

  const comments: CommentSummary[] = data.map((comment) => ({
    postId: comment.postId,
    id: comment.id,
    commenterEmail: comment.email.trim(),
  })); //mapped

  const filterComment = comments.filter(
    (comment) => !comment.commenterEmail.endsWith('.org') //filter out the .orgs

  );
  const json = JSON.stringify(filterComment); //serialized
  await fs.promises.writeFile(outputPath, json) //Write resulting string to outpath
  return filterComment.length; //return number of count, which is how long the array is
}



