import {Component, OnDestroy, OnInit} from '@angular/core';
import {RandomPicFilter} from "../../../services/memory.service/random-pic-filter";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {PictureDataset} from "../../../data/memory/picture-dataset/picture-dataset";

@Component({
  selector: 'app-memory-playground',
  templateUrl: './memory-playground.component.html',
  styleUrls: ['./memory-playground.component.scss']
})
export class MemoryPlaygroundComponent implements OnInit, OnDestroy {
  randomEmoji: PictureDataset[]
  picAmount: number

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private randomPicFilter: RandomPicFilter
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.picAmount = params['id'];
    })

    this.randomPicFilter.getPic((data) => {
      this.randomEmoji = data
    }, this.picAmount)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.randomPicFilter.destroySubscription()
  }

  filterUCode(code: string): number {
    let codeStr ='0x'
    console.log(code)
    let cod = codeStr.concat(code.substring(2))
    console.log(cod)
    return +cod
  }

  protected readonly String = String;
}
