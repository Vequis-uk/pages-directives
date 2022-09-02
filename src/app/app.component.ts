import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At The Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      title: 'Going For A Nice Drive',
      url: 'https://images.unsplash.com/photo-1662100112119-09f64f7c288e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Coding On A iPad, Phhhh - Ed Bassmaster',
      url: 'https://images.unsplash.com/photo-1661984271289-62fee1082679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'DeadMau6 Practicing',
      url: 'https://images.unsplash.com/photo-1661922031222-7f316ee30ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'At The Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      title: 'Going For A Nice Drive',
      url: 'https://images.unsplash.com/photo-1662100112119-09f64f7c288e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Coding On A iPad, Phhhh - Ed Bassmaster',
      url: 'https://images.unsplash.com/photo-1661984271289-62fee1082679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'DeadMau6 Practicing',
      url: 'https://images.unsplash.com/photo-1661922031222-7f316ee30ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'At The Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      title: 'Going For A Nice Drive',
      url: 'https://images.unsplash.com/photo-1662100112119-09f64f7c288e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Coding On A iPad, Phhhh - Ed Bassmaster',
      url: 'https://images.unsplash.com/photo-1661984271289-62fee1082679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'DeadMau6 Practicing',
      url: 'https://images.unsplash.com/photo-1661922031222-7f316ee30ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'At The Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      title: 'Going For A Nice Drive',
      url: 'https://images.unsplash.com/photo-1662100112119-09f64f7c288e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Coding On A iPad, Phhhh - Ed Bassmaster',
      url: 'https://images.unsplash.com/photo-1661984271289-62fee1082679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'DeadMau6 Practicing',
      url: 'https://images.unsplash.com/photo-1661922031222-7f316ee30ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'At The Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      title: 'Going For A Nice Drive',
      url: 'https://images.unsplash.com/photo-1662100112119-09f64f7c288e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'Coding On A iPad, Phhhh - Ed Bassmaster',
      url: 'https://images.unsplash.com/photo-1661984271289-62fee1082679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      title: 'DeadMau6 Practicing',
      url: 'https://images.unsplash.com/photo-1661922031222-7f316ee30ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }

}
