import Vue from "vue";

declare global {
  interface Array<T> {
    extraMethod(array): string;
  }
}
