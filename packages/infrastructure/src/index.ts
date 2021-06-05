import { Test } from "@tsukiy0/library-monorepo-template-core";

export class DefaultTest implements Test {
  test = (): void => {
    console.log("test!");
  };
}
