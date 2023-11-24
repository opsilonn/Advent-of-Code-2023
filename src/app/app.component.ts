import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Exercise } from 'src/app/models/exercise';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public data: string[] = [];
  public exercises: Exercise[] = Exercise.getAll();
  public form: FormGroup = this.formBuilder.group({
    exercise: new FormControl(null)
  });
  public isExerciseResolved = false;
  public result = 0;
  public result2 = 0;
  public statement: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private fileService: FileService,
  ) {
  }

  ngOnInit(): void {
    this.form.get('exercise')!.valueChanges.subscribe(async (newExercise: Exercise) => {
      this.statement = await this.fileService.read(`statements/${newExercise.id}.txt`);
      this.data = await this.fileService.read(`data/${newExercise.id}.txt`);

      if (this.statement.length === 0 || this.data.length === 0) {
        return;
      }

      try {
        this.result = newExercise.strategy!.resolve(this.data);
      } catch (e: unknown) {
        this.result = 0;
      }
      try {
        this.result2 = newExercise.strategy!.resolve2(this.data);
      } catch (e: unknown) {
        this.result2 = 0;
      }

      this.isExerciseResolved = true;
    });
  }
}
