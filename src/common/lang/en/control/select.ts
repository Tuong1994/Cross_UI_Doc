const select_en = {
  desc: 'A dropdown menu for displaying choices',
  api: {
    selectDesc: {
      rootClassName: 'Class name of the container',
      labelClassName: 'Class name of the label',
      inputClassName: 'Class name of the input control',
      rootStyle: 'Inline style for the container',
      labelStyle: 'Inline style for the label',
      inputStyle: 'Inline style for the input control',
      options: 'List of selectable options',
      defaultValue: 'Default selected value',
      name: 'Name of the control',
      placeholder: 'Placeholder text for the input control',
      sizes: 'Size of the select input',
      color: 'Color theme of the select input',
      shape: 'Shape of the select input',
      async: 'Enable asynchronous loading (for fetching options from an API)',
      loading: 'Enable loading state (recommended for async mode)',
      disabled: 'Disable the select input',
      total: 'Total number of options (used for pagination)',
      limit: 'Maximum number of options per page',
      required: 'Mark the field as required',
      optional: 'Mark the field as optional',
      hasClear: 'Enable a clear button to reset the input',
      hasSearch: 'Enable search functionality',
      rule: 'Validation rule(s) for the select input',
      onChangeSelect: 'Triggered when an option is selected',
      onChangeSearch: 'Triggered when the search input value changes',
      onChangePaging: 'Triggered when a pagination control is clicked'
    }
  }
}

export default select_en
