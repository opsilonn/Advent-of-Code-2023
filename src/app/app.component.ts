import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseHelper } from 'src/app/helpers/ExerciseHelper';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public data: string[] = [];
  public exercises: Exercise[] = [];
  public form: FormGroup = this.formBuilder.group({
    exercise: new FormControl(null),
    year: new FormControl(null)
  });
  public isExerciseResolved = false;
  public result = 0;
  public result2 = 0;
  public statement: string[] = [];
  public years: string[] = ['2023', '2024'];

  constructor(
    private formBuilder: FormBuilder,
    private fileService: FileService,
  ) {
  }

  ngOnInit(): void {
    this.form.get('year')!.valueChanges.subscribe(async (newYear: string) => this.onYearSelected(newYear));

    this.form.get('exercise')!.valueChanges.subscribe(async (newExercise: Exercise) => this.onExerciceSelected(newExercise));

    this.setLastAvailableYear();
  }

  /**
   * When a new year is selected, we update its list of available exercises
   * @param newYear newly selected year
   */
  private async onYearSelected(newYear: string): Promise<void> {
    this.exercises = ExerciseHelper.getAll(newYear);
  }

  /**
   * When an exercise is selected, then fetch its data, and if any are found, tries to resolve its 2 questions
   * @param newExercise Newly selected exercise
   * @returns 
   */
  private async onExerciceSelected(newExercise: Exercise): Promise<void> {
    var selectedYear: string = this.form.get('year')?.value;
    this.statement = await this.fileService.read(`${selectedYear}/statements/${newExercise.id}.txt`);
    this.data = await this.fileService.read(`${selectedYear}/data/${newExercise.id}.txt`);

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
  }

  /**
   * Sets the year as the last available one
   * IE : if the years 2021, 2022, and 2024 are set, then 2024 is selected)
   */
  private setLastAvailableYear(): void {
    var lastAvailableYear: string = this.years[this.years.length - 1];
    this.form.get('year')?.setValue(lastAvailableYear);
  }
}
