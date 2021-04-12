import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-found',
  templateUrl: './page-found.component.html',
  styleUrls: ['./page-found.component.css']
})
export class PageFoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLoadPageFound1() {
    this.router.navigate(['/page-found1']);
  }

}
