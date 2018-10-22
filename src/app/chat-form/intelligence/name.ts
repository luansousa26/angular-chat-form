import { EqualityVerification } from "./name-equality-verification";

export class Name {
  public static names = [
    { name: "luan", message: "Cool name guy, do you like Luan Santana?" },
    { name: "eric", message: "Wow your name can mean the  lonely king." },
    {
      name: "erik",
      message: "Wow your name can mean the king that rules forever."
    },
    {
      name: "helena",
      message: "wow your name can mean the sunshine. I really love this name."
    },
    {
      name: "jean",
      message: "wow your name can mean the blessed for god."
    },
    {
      name: "nice",
      message: "wow your name can mean the winner."
    },
    {
      name: "renan",
      message: "wow your name can mean the mysterious."
    },
    {
        name: "jessica",
        message: "wow your name can mean the observer."
      },
      {
        name: "lucas",
        message: "wow your name can mean the brighter."
      },
  ];

  public static verifyName(value: string): string {
    return EqualityVerification.verifyNameEquality(this.names, value);
  }
}
