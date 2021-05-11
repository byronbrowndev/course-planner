import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { GpaDisplayComponent } from './components/gpa-display/gpa-display.component';
import { SemesterComponent } from './components/semester/semester.component';
import { NotableEventComponent } from './components/notable-event/notable-event.component';
import { CourseComponent } from './components/course/course.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    GpaDisplayComponent,
    SemesterComponent,
    NotableEventComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    // EffectsModule.forRoot([HomeRepairEffects]),
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
