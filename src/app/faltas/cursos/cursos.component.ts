import { Component, OnInit, Input } from '@angular/core';

import {Curso} from './cursos.model'

@Component({
  selector: 'mt-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent implements OnInit {

  @Input() curso: Curso

  constructor() { }

  ngOnInit() {
  }

}
