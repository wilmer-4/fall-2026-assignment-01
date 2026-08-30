export type RemoteUser = {
    id: number
    name: string
    email: string

  }

export async function fetchUserEmails(): Promise<string[]> {

  const response = await fetch('https://jsonplaceholder.typicode.com/users'); //???
  const data: RemoteUser[] = await response.json();

  const emails = data.map(user => user.email)
  return emails;
}
