import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { InMemoryDataService }  from './services/in-memory-data.service'


import '../assets/styles';

@NgModule({
    declarations: [
        AppComponent,
        NewTaskFormComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.        
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false}
        )
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}