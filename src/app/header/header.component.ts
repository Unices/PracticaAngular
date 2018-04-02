import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autenticacionservice: AutenticacionService,
    private router: Router,
    private activatedrouter: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
    return this.autenticacionservice.isAuthenticated();
  }

  onLogout() {
    this.autenticacionservice.logout();
    this.router.navigate(['/inicio']);
  }
}
