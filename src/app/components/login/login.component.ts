import { Component, OnInit } from "@angular/core";
import { SocialAuthService, SocialUser } from "angularx-social-login";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loading = false;
  constructor(private authService: SocialAuthService) {}
  ngOnInit() {
    console.log("ingresando", this.authService.authState);
    this.authService.authState.subscribe((user) => {
      console.log("LoginComponent -> ngOnInit -> user", user);
      this.user = user;
      this.loading = true;
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
