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
    { name: 'Componentes', icon: 'memory', color: '#10b981' },
    { name: 'Armazenamento', icon: 'storage', color: '#f59e0b' },
    { name: 'Áudio', icon: 'headset', color: '#06b6d4' },
    { name: 'Redes', icon: 'router', color: '#ef4444' },
    { name: 'Acessórios', icon: 'cable', color: '#a855f7' }
  ];

  banners = [
    {
      title: 'Mega Promoção de Notebooks',
      subtitle: 'Até 30% OFF em notebooks selecionados + Frete Grátis',
      image: 'https://via.placeholder.com/1200x400/6366f1/ffffff?text=Notebooks+em+Promoção'
    },
    {
      title: 'Monte seu PC Gamer',
      subtitle: 'Componentes de alta performance com os melhores preços',
      image: 'https://via.placeholder.com/1200x400/8b5cf6/ffffff?text=PC+Gamer'
    },
    {
      title: 'Periféricos Gamers',
      subtitle: 'Mouses, teclados e headsets com até 25% de desconto',
      image: 'https://via.placeholder.com/1200x400/ec4899/ffffff?text=Periféricos+Gamer'
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

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
