import axios from "axios";

export function getTemplate(params) {
  return axios({
    url: "/data/templateData",
    method: "get",
    params
  });
}
