import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public menuPages = [
    {
      title: 'Creation de tâches',
      url: '/creation',
      icon: 'create'
    },
    {
      title: 'Listing des tâches',
      url: '/listing',
      icon: 'download'
    },
    {
      title: 'Deconnexion',
      url: '/login',
      icon:'log-out'
    }
  ]

  constructor() {}
}
