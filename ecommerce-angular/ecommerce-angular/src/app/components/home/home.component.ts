import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  categories = [
    { name: 'Notebooks', icon: 'laptop', color: '#6366f1' },
    { name: 'Periféricos', icon: 'mouse', color: '#8b5cf6' },
    { name: 'Monitores', icon: 'monitor', color: '#ec4899' },
    { name: 'Armazenamento', icon: 'storage', color: '#10b981' }
  ];

  banners = [
    {
      title: 'Ofertas Imperdíveis',
      subtitle: 'Até 50% de desconto em notebooks',
      image: 'https://via.placeholder.com/1200x400/6366f1/ffffff?text=Ofertas+Imperdíveis'
    },
    {
      title: 'Novos Lançamentos',
      subtitle: 'Conheça os produtos mais recentes',
      image: 'https://via.placeholder.com/1200x400/8b5cf6/ffffff?text=Novos+Lançamentos'
    },
    {
      title: 'Frete Grátis',
      subtitle: 'Em compras acima de R$ 299',
      image: 'https://via.placeholder.com/1200x400/ec4899/ffffff?text=Frete+Grátis'
    }
  ];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts(): void {
    this.productService.getFeaturedProducts().subscribe(products => {
      this.featuredProducts = products;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.snackBar.open(`${product.name} adicionado ao carrinho!`, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}
