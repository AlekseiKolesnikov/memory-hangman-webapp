import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LevelLengthSettings {
  constructor() { }

  getLengths(level: string): { minLength: number, maxLength: number } {
    let minLength: number;
    let maxLength: number;

    if (level === 'hard') {
      minLength = 8;
      maxLength = 9;
    } else if (level === 'medium') {
      minLength = 5;
      maxLength = 7;
    } else if (level === 'easy') {
      minLength = 0;
      maxLength = 4;
    } else {
      throw new Error('Invalid level');
    }

    return {
      minLength,
      maxLength
    };
  }
}

