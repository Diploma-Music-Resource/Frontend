import { makeAutoObservable } from "mobx";

export default class ScreenModeStore {
    dark: boolean = true

    constructor() {
      makeAutoObservable(this)
    }

    switchModeScreen() {
      this.dark = !this.dark
    }
}