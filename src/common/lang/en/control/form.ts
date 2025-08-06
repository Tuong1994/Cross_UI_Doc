const form_en = {
  desc: 'Form component with data domain management. Includes data entry, validation, and corresponding styles',
  api: {
    formDesc: {
      initialValues: 'Initial data values of the form',
      disabled: 'Whether the entire form is disabled',
      autoFocusValidation: 'Whether to auto-focus on the first invalid field when submitting',
      color: 'Color theme of the form',
      sizes: 'Size of the form (e.g., small, medium, large)',
      shape: 'Shape of form elements (e.g., rounded, square)',
      onFinish: 'Callback triggered when the form is successfully submitted with form values as parameter'
    },
    formItemDesc: {
      name: 'Name/key of the form field (used for value binding)',
      type: 'Type of control (applicable for fields like checkbox, radio)',
      rules: 'Validation rules for the field',
      disabled: 'Whether the individual field is disabled'
    }
  }
}

export default form_en
