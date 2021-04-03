import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  update = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 1000
      );
    }
  )

  public menuPages = [
    {
      title: 'Creation de tâches',
      url: '/creation'
    },
    {
      title: 'Listing des tâches',
      url: '/listing'
    },
    {
      title: 'Deconnexion',
      url: '/login'
    }

  ]

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


}
