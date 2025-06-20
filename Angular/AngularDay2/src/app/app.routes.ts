import { Routes } from '@angular/router';
import { Parent } from './component/parent/parent';
import { Child } from './component/child/child';
import {DirectiveComponent } from './component/directive/directive';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: Parent
    },
    {
        path: 'child',
        component: Child
    },
    {
        path: 'directive',
        component:DirectiveComponent
    },
    {
        path: '**',
        redirectTo: '/view'
    }
    
];
