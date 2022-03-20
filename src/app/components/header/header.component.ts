import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { StickService } from '../../services/stick-service.service';
// JSON Menu
import * as data from '../../../assets/json/menu.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Variáveis da página
  isMenuOpen: boolean = false;
  isSubMenuOpen: boolean = false;
  menus: any;

  constructor(private router: Router,
              public stickService: StickService) { }

  ngOnInit(): void {
    this.menus = (data as any).default;
  }

  cliqueMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openPage(route: any) {
    this.router.navigate([route]);
  }

}
