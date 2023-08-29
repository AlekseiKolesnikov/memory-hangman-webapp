import {booleanAttribute, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManComponent {
  @Input({transform: booleanAttribute}) isHidden: boolean;
  @Input() bodyPartsClass: string;
  @Input() gallowsPartsClass: string;
  constructor() { }

  isVisible(part: string): any {

  }
}
