export class EqualityVerification {
  public static verifyNameEquality(array: any[], value: any): string {
    return array.find(cr => value.toLowerCase().includes(cr.name))
      ? array.find(cr => value.toLowerCase().includes(cr.name)).message
      : null;
  }
}
