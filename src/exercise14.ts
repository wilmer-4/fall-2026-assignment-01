export type PostItem = {
  id: number;
  title: string;
  body: string;
}; //define and export posItem

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const requests = postIds.map(async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    const data = await response.json() as PostItem;
    return data
  })
  const posts = await Promise.all(requests)

  return posts;
}
