import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig, Router} from '@angular/router'
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <jumbotron></jumbotron>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent]
})

@RouterConfig([
    {path: '/', component: HomeComponent},
    {path: '/about', component: AboutComponent}
])

export class AppComponent { 
    constructor(private router: Router) {

    }
}
