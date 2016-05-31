import { Component } from 'angular2/core';

@Component({ //component decorator defining selector and template
  selector: 'my-app',
  template: `
   <div class="container">
     <h1>Skeleton Angular2 App!</h1>
   </div>
  `
}) // this is the component's annotation

export class AppComponent {

}
