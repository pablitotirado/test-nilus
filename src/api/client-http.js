export default class Http {
  baseURL = "https://swapi.dev/api/";

  async get(url) {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  }

  async getItems(url) {
    const urlTemp = url ? url : `${this.baseURL}people`;
    const response = await this.get(urlTemp);
    return response;
  }
}
