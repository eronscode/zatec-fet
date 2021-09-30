import api from "utils/api";
import { ApiEndpoints } from "utils/endpoints";

export async function filterOrgRepos(
  value = {},
  setLoading = () => {},
  setData = () => {}
) {
  const { query, org } = value;
  setLoading(true);
  setData(null);
  try {
    console.log({ value });
    const response = await api.get(
      ApiEndpoints.SEARCH_ORGS_REPOS_BY_KEYWORD(query, org)
    );
    setData(response);
  } catch (error) {
    console.log(error);
  }
  setLoading(false);
}
