import { Router } from '@angular/router';
import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  
  myTask: string;

  taskName: any = "";
  taskList = [];



  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit() {
  }

  onLogOut() {
    setTimeout(
      () => {
        this.router.navigate(['login']);
      }, 500
    );
  }

  retour() {
    this.router.navigate(['creation']);
  }

  getTask() {
    this.taskList = this.taskService.tache;
    
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}

