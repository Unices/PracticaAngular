import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {

  provURL = 'https://comprasapp-12b64.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-12b64.firebaseio.com/proveedores';

  constructor(private http: Http) { }

  postProveedor(proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.provURL, newpres, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }


  getProveedores() {
    return this.http.get(this.provURL).map(res => res.json());
  }

  getProveedor(id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.get(url).map(res => res.json());
  }

  putProveedor(Proveedor: any, id$: string) {
    const newpre = JSON.stringify(Proveedor);
    const headers = new Headers({
      'Content-type': 'application/jason'
    });

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put(url, newpre, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  delProveedor(id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete(url).map(res => res.json());
  }

  getProveedoresSearch(busqueda: string) {
    const url = `${this.provURL}?orderBy="nombre"&startAt="${busqueda}"&endAt="${busqueda}\uf8ff"`
    return this.http.get(url).map(res => res.json());
  }
}
