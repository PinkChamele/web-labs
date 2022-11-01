class Form {
  constructor(form, submitButton, fieldEntries) {
    this.form = form;
    this.submitButton = submitButton;
    this.fieldEntries = fieldEntries;

    for (const entry of this.fieldEntries) {
      entry.input.addEventListener('keyup', () => {
        entry.validate();
        this.isValid();
      })
    }

    this.onSubmit(this.fillInfo(this));
  }

  isValid() {
    const isValid = !document.querySelectorAll('.not-valid').length;

    isValid ? this.enableButton() : this.disableButton();

    return isValid;
  }

  fillInfo(form) {
    return (event) => {
      event.preventDefault();

      for (const { input, output } of form.fieldEntries) {
        output.textContent = input.value;
      }
    };
  };

  onSubmit(callback) {
    this.form.addEventListener('submit', callback);
  }

  disableButton() {
    this.submitButton.disabled = true;
    this.submitButton.value = 'Some fields are invalid';
    this.submitButton.className = 'disabled submit-button';
  }

  enableButton() {
    this.submitButton.disabled = false;
    this.submitButton.value = 'Save';
    this.submitButton.className = 'submit-button';
  }
}
