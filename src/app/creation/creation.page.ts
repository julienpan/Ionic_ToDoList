import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {

  myTask:string;



  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit() {
  }

  addTask() {
    this.taskService.tache.push(this.myTask);
    this.myTask = "";
    console.log(this.taskService.tache);
  }

  onLogOut() {
    setTimeout(
      () => {
        this.router.navigate(['login']);
      }, 500
    );
  }


  checkListing() {
  

    setTimeout(
      () => {
        this.router.navigate(['listing']);
      }, 500
    );
  }
}
