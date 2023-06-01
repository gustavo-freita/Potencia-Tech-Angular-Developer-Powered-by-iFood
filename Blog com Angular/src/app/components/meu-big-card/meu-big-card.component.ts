import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meu-big-card',
  templateUrl: './meu-big-card.component.html',
  styleUrls: ['./meu-big-card.component.css']
})
export class MeuBigCardComponent {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"
}
