const upload_en = {
  desc: 'Used to select and upload files or drag and drop files',
  api: {
    uploadDesc: {
      rootClassName: 'Class name of the container',
      controlClassName: 'Class name of the control',
      rootStyle: 'Inline styles for the container',
      controlStyle: 'Inline styles for the control',
      shape: 'Shape of the upload component',
      color: 'Color theme of the upload component',
      limit: 'Maximum file size allowed',
      fileAccepted: 'Accepted file types (e.g., .jpg, .png)',
      disabled: 'Disables the upload component',
      onUpload: 'Triggered when files are uploaded'
    },
    singleDesc: {
      loading: 'Loading state of the component',
      defaultImageUrl: 'Default image URL'
    },
    multiDesc: {
      defaultImages: 'List of default image URLs',
      maxUpload: 'Maximum number of files that can be uploaded',
      onRemoveDefaultImage: 'Triggered when a file from the default list is removed'
    },
    fileDesc: {
      multiple: 'Enables uploading multiple files'
    }
  }
}

export default upload_en
