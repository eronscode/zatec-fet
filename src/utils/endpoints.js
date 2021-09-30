export const ApiEndpoints = {
  GET_ORG: (org) => `search/users?q=${org}+type:org`,
  GET_ORG_REPOS: (org) => `users/${org}/repos`,
  SEARCH_ORGS_REPOS_BY_KEYWORD: (query="", org="", per_page=100) => `search/repositories?q=${query} in:name,description+org:${org}&per_page=${per_page}`,
};
