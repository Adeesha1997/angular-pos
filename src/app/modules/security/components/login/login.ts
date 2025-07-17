import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../shared/service/auth';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: Auth,private title:Title) {}

  ngOnInit():void{
    this.title.setTitle('Secirity | Login');
    if(this.authService.isExistsToken('my-Token')){
       this.router.navigateByUrl('/console').then();
    }
  }

  login(): void {
    if (this.email === 'A@gmail.com' && this.password === '1234') {
      this.authService.createToken(this.email);
      this.router.navigateByUrl('/console').then();
    } else {
      alert('Wrong Password !');
    }
  }
}
