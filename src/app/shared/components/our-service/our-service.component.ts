import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: '/our-service.component.html',
})
export class OutServiceComponent implements OnInit {
  @Input('listService') listService: any;
  ngOnInit(): void {}
}
