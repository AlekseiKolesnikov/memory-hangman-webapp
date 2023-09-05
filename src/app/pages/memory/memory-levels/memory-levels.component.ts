import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MemoryService} from "../../../services/memory.service/api/memory.service";

@Component({
  selector: 'app-memory-levels',
  templateUrl: './memory-levels.component.html',
  styleUrls: ['./memory-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryLevelsComponent implements OnInit {
  public levelsArray: number[] = [1,2,3,4,5,6,7,8,9]
  public picAmountArray: number[] = [4, 6, 9, 12, 16, 20, 25, 30, 36]
  randomPicture: any;
  constructor(
    private memoryService: MemoryService
  ) {
  }

  ngOnInit() {
    this.memoryService.getPicture()
      .subscribe((data) => {
        this.randomPicture = URL.createObjectURL(data)
      })
    console.log(this.randomPicture)
  }
}
