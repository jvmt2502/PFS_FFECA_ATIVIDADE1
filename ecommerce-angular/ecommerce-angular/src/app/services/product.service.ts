import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Notebook Dell Inspiron',
      description: 'Intel Core i7, 16GB RAM, 512GB SSD',
      price: 4599.00,
      image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Notebook+Dell',
      category: 'Notebooks',
      inStock: true,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Mouse Gamer RGB',
      description: 'Sensor óptico 16000 DPI, 7 botões programáveis',
      price: 189.90,
      image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Mouse+Gamer',
      category: 'Periféricos',
      inStock: true,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Teclado Mecânico',
      description: 'Switch Blue, RGB, Layout ABNT2',
      price: 349.90,
      image: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Teclado',
      category: 'Periféricos',
      inStock: true,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Monitor LG 27" 144Hz',
      description: 'Full HD, IPS, 1ms, FreeSync',
      price: 1299.00,
      image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Monitor+LG',
      category: 'Monitores',
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Headset HyperX Cloud',
      description: 'Som surround 7.1, Microfone removível',
      price: 449.90,
      image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Headset',
      category: 'Periféricos',
      inStock: true,
      rating: 4.9
    },
    {
      id: 6,
      name: 'SSD Kingston 1TB',
      description: 'NVMe M.2, Leitura 3500MB/s',
      price: 549.00,
      image: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=SSD+1TB',
      category: 'Armazenamento',
      inStock: true,
      rating: 4.8
    },
    {
      id: 7,
      name: 'Webcam Logitech C920',
      description: 'Full HD 1080p, Microfone estéreo',
      price: 399.00,
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Webcam',
      category: 'Periféricos',
      inStock: true,
      rating: 4.5
    },
    {
      id: 8,
      name: 'Cadeira Gamer DT3',
      description: 'Reclinável, Apoio lombar, Até 120kg',
      price: 1199.00,
      image: 'https://via.placeholder.com/300x200/a855f7/ffffff?text=Cadeira+Gamer',
      category: 'Mobiliário',
      inStock: true,
      rating: 4.4
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(p => p.category === category));
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.products.slice(0, 4));
  }
}
