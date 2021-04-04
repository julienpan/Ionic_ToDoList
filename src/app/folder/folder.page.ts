import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

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

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
