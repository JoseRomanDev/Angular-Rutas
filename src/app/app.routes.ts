import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Users } from './features/users/pages/users/users';
import { About } from './features/about/pages/about/about';
import { Component } from '@angular/core';


export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'users',
        component: Users,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: '**',
        component: Home,
    },
];
