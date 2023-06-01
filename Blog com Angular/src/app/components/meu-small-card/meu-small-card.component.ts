import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meu-small-card',
  templateUrl: './meu-small-card.component.html',
  styleUrls: ['./meu-small-card.component.css']
})
export class MeuSmallCardComponent {

  @Input()
  cardFoto:string = ""
  @Input()
  cardTitulo:string = ""
  @Input()
  cardDescricao:string = ""
  @Input()
  Id:string = "0"

}
