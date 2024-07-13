import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';



bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withFetch()),
    ]
  }
    );
