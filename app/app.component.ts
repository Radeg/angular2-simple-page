import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <jumbotron></jumbotron>
    <div class="container">
        <a [routerLink]="['.']">HOME</a>
        <a [routerLink]="['./about']">ABOUT</a>
    </div>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent, JumbotronComponent]
})

export class AppComponent { 
 
}
