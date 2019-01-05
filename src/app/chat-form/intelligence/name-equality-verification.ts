export class EqualityVerification {
  /*
  Verify typed user string include the array string,
  if not verify if array string include the typed string.
  */
  public static verifyNameEquality(array: any[], value: any): string {
    value = value.replace(/\s+/g, '');
    return array.find(cr => value.toLowerCase().includes(cr.name))
      ? array.find(cr => value.toLowerCase().includes(cr.name)).message
      : this.verifyNameInArray(array, value);
  }

  /*
  Verify if the array String includes the typed user string
  */
  public static verifyNameInArray(array: any[], value: any): string {
    return array.find(cr => cr.name.includes(value.toLowerCase()))
      ? array.find(cr => cr.name.includes(value.toLowerCase())).message
      : null;
  }
}
