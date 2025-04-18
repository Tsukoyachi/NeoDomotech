import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-home",
  imports: [CommonModule, RouterModule, MatButton],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
}
