class FieldEntry {
  constructor(input, output, regex) {
    this.input = input;
    this.output = output;
    this.regex = regex;
  }

  validate() {
    return this.regex.test(this.input.value)
      ? this.makeValid()
      : this.makeInvalid();
  }

  makeInvalid() {
    this.input.className = 'not-valid';
  }

  makeValid() {
    this.input.className = '';
  }
}
