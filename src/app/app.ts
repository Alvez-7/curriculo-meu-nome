import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('curriculo-meu-nome'); protected readonly nome = 'Murilo Alves Ferreira'; protected readonly cargo = 'Desenvolvedor Angular Júnior'; protected readonly habilidades = [
  'HTML',
  'Python',
  'Angular',
  'Git'
]; protected readonly sobreMim = `Sou desenvolvedor em formação, com interesse em desenvolvimento web e na construção de soluções digitais. Estou ampliando meus conhecimentos em HTML, Python, Angular, JavaScript e SCSS, buscando aprimorar minhas habilidades por meio da prática e de novos projetos. Tenho disposição para aprender, evoluir tecnicamente e contribuir com projetos que gerem valor.`;
}
