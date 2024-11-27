import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
  title = 'aplicacion-1';
  sumar(num1: number, num2: number): number {
    const result = num1 + num2;
    return result 
  }
  
  ngOnInit(): void {
    console.log("app.componet se inicio");
    let sumResult = this.sumar(21, 12);
    console.log(sumResult)
    let sumResult2 = this.sumar(55, 60);
    console.log(sumResult2)
    let multResult = this.multiplicar(125, 12);
    console.log("el resultado es: " + multResult)
  }
  multiplicar(num1: number, num2: number):number {
    const result = num1 * num2;
    return result
   }
   
  
}
