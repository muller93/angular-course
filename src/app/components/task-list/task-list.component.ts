import { Component, OnInit } from '@angular/core';
import { ITaskInterface } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public task: string[] = ['Egy', 'Kettő', 'Három', '4', '5'];
  public newTask: ITaskInterface;
  constructor() { }


  ngOnInit() {
  }

  public addValue() {
    this.newTask.name = 'Első feladat';
  }

}
