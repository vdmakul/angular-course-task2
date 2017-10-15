type Env = {
  production: boolean,
  githubUrl: string
}

type GithubRepo = {
  name: string,
  full_name: string,
  owner_login: string,
  owner_avatar_url: string,
  html_url: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  watchers_count: number,
  score: number
}
