import api from "utils/api";
import { ApiEndpoints } from "utils/endpoints";

export async function fetchOrganizations(
  value = "",
  setLoading = () => {},
  setData = () => {}
) {
  setLoading(true);
  setData(null);
  try {
    const response = await api.get(ApiEndpoints.GET_ORG(value));
    setData(response);
  } catch (error) {
    api.handleApiError(error);
  }
  setLoading(false);
}
