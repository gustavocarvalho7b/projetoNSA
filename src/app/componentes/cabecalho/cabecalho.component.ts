import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
competencias: string [] = ['Tremembé', 'Ibirité', 'Tatuapé', 'São José', 'Taubaté']
anos: number [] = [2020, 2021, 2022, 2023, 2024, 2025];
items = [
  { icon: 'pi pi-prime' },
  { label: 'Competencia', 
    icon: 'pi pi-calendar',
    items: this.anos.map(ano => ({
    label: ano.toString(),
    command: () => this.selecionarAno(ano)
    }))
  },
  { label: 'Entidade', 
    icon: 'pi pi-crown',
    items: this.competencias.map((competencias: string) => ({
    label: competencias,
    command: () => this.selecionarCompetencia(competencias)
    }))

  }
];
  selecionarAno: any;
  selecionarCompetencia: any;

}
