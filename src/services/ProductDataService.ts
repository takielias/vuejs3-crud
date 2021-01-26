import http from "./../utils/api";

class ProductDataService {
  getAll() {
    return http.get("/products");
  }

  get(id: string) {
    return http.get(`/products/${id}`);
  }

  create(data: any) {
    return http.post("/products", data);
  }

  update(id: string, data: any) {
    return http.put(`/products/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByTitle(title: string) {
    return http.get(`/products?title=${title}`);
  }
}

export default new ProductDataService();
