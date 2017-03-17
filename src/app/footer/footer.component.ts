import { Component } from '@angular/core'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less']
})
export class FooterComponent{
    footerTxt : string = 'Copyright © Saurabh Shankariya 2017. Made in Hyderabad, India ';
}
