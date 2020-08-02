export default class Http {
  baseURL = "https://swapi.dev/api/";

  async get(url) {
    const request = await fetch(url);
    return await request.json();
  }

  async getItems(url) {
    const urlTemp = url ? url : `${this.baseURL}people`;
    return await this.get(urlTemp);
  }

  async getItemActive(url) {
    return await this.get(url);
  }
}
