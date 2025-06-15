import { Component } from '@angular/core';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrl: './menulateral.component.scss'
})
export class MenulateralComponent {

  files: string[] = ['Musicas', 'Filmes', 'Series']
selectedFile: string = 'teste';
}
