import {booleanAttribute, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManComponent implements OnInit {
  @Input({transform: booleanAttribute}) isHidden: boolean;
  @Input() bodyPartArray: string;
  @Input() gallowsPartArray: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this.isHidden)
    if (this.isHidden) {
      console.log(this.isHidden)
    }
  }
}
