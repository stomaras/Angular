export interface User{
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string | null;
  repos_url: string | null;
  events_url: string | null;
  received_events_url: string;
  type: string | null;
  site_admin: boolean | null;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number | null;
  public_gists: number | null;
  followers: number | null;
  following: number | null;
  created_at: string | null;
  updated_at: string | null;
}