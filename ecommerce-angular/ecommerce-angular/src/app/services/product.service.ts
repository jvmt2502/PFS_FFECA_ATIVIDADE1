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
      name: 'Notebook Dell Inspiron 15 3000',
      description: 'Intel Core i7-1165G7, 16GB DDR4, SSD 512GB NVMe, Tela 15.6" Full HD, Windows 11',
      price: 4599.00,
      image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Notebook+Dell',
      category: 'Notebooks',
      inStock: true,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Mouse Gamer Logitech G502 HERO',
      description: 'Sensor HERO 25K, 25.600 DPI, 11 botões programáveis, RGB LIGHTSYNC, Cabo USB',
      price: 289.90,
      image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Mouse+Logitech',
      category: 'Periféricos',
      inStock: true,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Teclado Mecânico Redragon Kumara K552',
      description: 'Switch Outemu Blue, Iluminação RGB, Layout ABNT2, Estrutura em Metal, Anti-Ghosting',
      price: 349.90,
      image: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Teclado+Redragon',
      category: 'Periféricos',
      inStock: true,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Monitor Gamer LG UltraGear 27" 144Hz',
      description: 'IPS Full HD, 1ms MBR, 144Hz, FreeSync Premium, HDR10, HDMI/DisplayPort',
      price: 1299.00,
      image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Monitor+LG',
      category: 'Monitores',
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Headset Gamer HyperX Cloud II',
      description: 'Som Surround 7.1, Driver 53mm, Microfone com cancelamento de ruído, Conector USB',
      price: 449.90,
      image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=HyperX+Cloud',
      category: 'Periféricos',
      inStock: true,
      rating: 4.9
    },
    {
      id: 6,
      name: 'SSD Kingston NV2 1TB NVMe',
      description: 'M.2 2280 NVMe PCIe 4.0, Velocidade leitura 3500MB/s, Gravação 2100MB/s',
      price: 549.00,
      image: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=SSD+Kingston',
      category: 'Armazenamento',
      inStock: true,
      rating: 4.8
    },
    {
      id: 7,
      name: 'Webcam Logitech C920 Pro HD',
      description: 'Full HD 1080p 30fps, Microfone estéreo, Correção automática de luz, Compatível Windows/Mac',
      price: 399.00,
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Webcam+C920',
      category: 'Periféricos',
      inStock: true,
      rating: 4.5
    },
    {
      id: 8,
      name: 'Cadeira Gamer DT3sports Elise',
      description: 'Reclinável até 180°, Apoio lombar, Braços 3D ajustáveis, Suporta até 120kg, Rodas PU',
      price: 1199.00,
      image: 'https://via.placeholder.com/300x200/a855f7/ffffff?text=Cadeira+DT3',
      category: 'Mobiliário',
      inStock: true,
      rating: 4.4
    },
    {
      id: 9,
      name: 'Notebook Lenovo IdeaPad Gaming 3i',
      description: 'Intel Core i5-11300H, 8GB DDR4, SSD 256GB, GeForce GTX 1650, Tela 15.6" Full HD 120Hz',
      price: 3899.00,
      image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Lenovo+Gaming',
      category: 'Notebooks',
      inStock: true,
      rating: 4.6
    },
    {
      id: 10,
      name: 'Processador AMD Ryzen 5 5600G',
      description: '6-Core, 12-Threads, 3.9GHz (4.4GHz Max Boost), Radeon Graphics integrada, Socket AM4',
      price: 899.00,
      image: 'https://via.placeholder.com/300x200/dc2626/ffffff?text=Ryzen+5',
      category: 'Componentes',
      inStock: true,
      rating: 4.7
    },
    {
      id: 11,
      name: 'Placa de Vídeo RTX 3060 12GB',
      description: 'NVIDIA GeForce RTX 3060, 12GB GDDR6, Ray Tracing, DLSS, 192-bit, PCI Express 4.0',
      price: 2499.00,
      image: 'https://via.placeholder.com/300x200/22c55e/ffffff?text=RTX+3060',
      category: 'Componentes',
      inStock: true,
      rating: 4.9
    },
    {
      id: 12,
      name: 'Memória RAM Kingston Fury 16GB',
      description: 'DDR4 3200MHz, Kit 2x8GB, CL16, Beast Black, Dissipador de calor, Intel/AMD',
      price: 349.00,
      image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=RAM+16GB',
      category: 'Componentes',
      inStock: true,
      rating: 4.8
    },
    {
      id: 13,
      name: 'HD Externo Seagate 2TB',
      description: 'Portátil USB 3.0, 2TB, 5400 RPM, Plug and Play, Compatível Windows/Mac/PS4/Xbox',
      price: 459.00,
      image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=HD+2TB',
      category: 'Armazenamento',
      inStock: true,
      rating: 4.5
    },
    {
      id: 14,
      name: 'Fonte Corsair CV650 650W',
      description: '650W, 80 Plus Bronze, PFC Ativo, Bivolt Automático, Conectores PCIe, Cabo destacável',
      price: 449.00,
      image: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=Fonte+650W',
      category: 'Componentes',
      inStock: true,
      rating: 4.6
    },
    {
      id: 15,
      name: 'Gabinete Gamer Rise Mode Galaxy Glass',
      description: 'Mid Tower, Lateral vidro temperado, USB 3.0, Suporte ATX/Micro-ATX, 4 Coolers RGB inclusos',
      price: 379.00,
      image: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Gabinete+RGB',
      category: 'Componentes',
      inStock: true,
      rating: 4.4
    },
    {
      id: 16,
      name: 'Mousepad Gamer Havit HV-MP830',
      description: 'Extended 800x300mm, Base antiderrapante, Superfície speed, Costura reforçada',
      price: 59.90,
      image: 'https://via.placeholder.com/300x200/a855f7/ffffff?text=Mousepad',
      category: 'Periféricos',
      inStock: true,
      rating: 4.6
    },
    {
      id: 17,
      name: 'Monitor Samsung 24" Curvo 75Hz',
      description: 'LED VA Full HD, Curvatura 1800R, 75Hz, FreeSync, HDMI/VGA, Eye Saver Mode',
      price: 899.00,
      image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Monitor+24',
      category: 'Monitores',
      inStock: true,
      rating: 4.5
    },
    {
      id: 18,
      name: 'Impressora HP DeskJet Ink Advantage',
      description: 'Multifuncional Jato de Tinta, Wi-Fi, USB, Scanner, Copiadora, Bivolt',
      price: 549.00,
      image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Impressora+HP',
      category: 'Impressoras',
      inStock: true,
      rating: 4.3
    },
    {
      id: 19,
      name: 'Tablet Samsung Galaxy Tab A8',
      description: '10.5" Full HD, 64GB, 4GB RAM, Android 11, Wi-Fi, Processador Octa-Core',
      price: 1299.00,
      image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Tablet+A8',
      category: 'Tablets',
      inStock: true,
      rating: 4.6
    },
    {
      id: 20,
      name: 'Roteador TP-Link Archer C6 AC1200',
      description: 'Dual Band, 4 Antenas, MU-MIMO, 1200Mbps, Controle via App, IPv6',
      price: 229.00,
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Roteador',
      category: 'Redes',
      inStock: true,
      rating: 4.7
    },
    {
      id: 21,
      name: 'Notebook Acer Aspire 5',
      description: 'Intel Core i5-1135G7, 8GB DDR4, SSD 256GB, Tela 15.6" Full HD IPS, Windows 11',
      price: 3299.00,
      image: 'https://via.placeholder.com/300x200/22c55e/ffffff?text=Acer+Aspire',
      category: 'Notebooks',
      inStock: false,
      rating: 4.4
    },
    {
      id: 22,
      name: 'Caixa de Som Bluetooth JBL Flip 5',
      description: '20W RMS, IPX7 à prova d\'água, Bateria 12h, USB-C, PartyBoost, Bluetooth 5.1',
      price: 599.00,
      image: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=JBL+Flip5',
      category: 'Áudio',
      inStock: true,
      rating: 4.8
    },
    {
      id: 23,
      name: 'Microfone Condensador Blue Yeti',
      description: 'USB, Padrões de captação múltiplos, Ganho ajustável, Monitoramento sem latência',
      price: 1199.00,
      image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Blue+Yeti',
      category: 'Áudio',
      inStock: true,
      rating: 4.9
    },
    {
      id: 24,
      name: 'Suporte Articulado para Monitor',
      description: 'Suporta 13" a 27", VESA 75x75 e 100x100, Rotação 360°, Inclinação ±90°, Até 8kg',
      price: 149.00,
      image: 'https://via.placeholder.com/300x200/a855f7/ffffff?text=Suporte+Monitor',
      category: 'Acessórios',
      inStock: true,
      rating: 4.5
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
