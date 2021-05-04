import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { GpaDisplayComponent } from './components/gpa-display/gpa-display.component';
import { SemesterComponent } from './components/semester/semester.component';
import { NotableEventComponent } from './components/notable-event/notable-event.component';
import { EditableClassComponent } from './components/editable-class/editable-class.component';
import { StoreModule } from '@ngrx/store';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    GpaDisplayComponent,
    SemesterComponent,
    NotableEventComponent,
    EditableClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
