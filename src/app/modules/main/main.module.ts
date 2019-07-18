import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ApplicationHeaderComponent } from 'src/app/components/application-header/application-header.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { RodapeComponent } from 'src/app/components/rodape/rodape.component';

@NgModule({
  declarations: [
    MainComponent,
    ApplicationHeaderComponent,
    TodoListComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
