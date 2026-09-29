import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class CadastroComponent {
  cadastroSucesso: boolean = false;

  constructor(private router: Router) {}

  finalizarCadastro(): void {
    this.cadastroSucesso = true;
  }

  fecharEIrParaLogin(): void {
    this.cadastroSucesso = false;
    this.router.navigate(['/login']);
  }
}