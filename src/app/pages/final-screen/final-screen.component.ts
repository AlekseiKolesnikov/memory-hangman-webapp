import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-final-screen',
    templateUrl: './final-screen.component.html',
    styleUrls: ['./final-screen.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class FinalScreenComponent implements OnInit {
    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
        // @ts-ignore
        Telegram.WebApp.MainButton.show();
        // @ts-ignore
        Telegram.WebApp.MainButton.setText('Главное Меню')
        // @ts-ignore
        Telegram.WebApp.onEvent("mainButtonClicked", () => {
            this.router.navigate(['game-choice']);
            // @ts-ignore
            Telegram.WebApp.MainButton.hide();
        })
    }
}
