import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-busca.html',
  styleUrl: './barra-busca.css'
})
export class BarraBusca {
  constructor(private router: Router) {}

  buscar(termo: string): void {
    const termoFormatado = termo ? termo.trim() : '';
    this.router.navigate(['/vitrine'], { 
      queryParams: { busca: termoFormatado }
    });
  }
}