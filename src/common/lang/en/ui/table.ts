const table_en = {
  desc: 'A table displays rows of data',
  api: {
    tableDesc: {
      dataSource: 'Array of data records to be displayed in the table',
      columns: 'Configuration for table columns',
      hasRowSelection: 'Enables row selection',
      hasExpand: 'Enables expandable rows for nested tables',
      hasFilter: 'Enables the filter section',
      hasPagination: 'Enables pagination',
      loading: 'Loading state of the table',
      rowKey: 'Unique key for each row',
      color: 'Color theme of the table',
      rootClassName: 'Class name of the container',
      tableClassName: 'Class name of the table element',
      rootStyle: 'Inline styles for the container',
      tableStyle: 'Inline styles for the table element',
      paginationProps: 'Props passed to the pagination component',
      removeButtonTitle: 'Text or component for the "Remove selected rows" button',
      cancelButtonTitle: 'Text or component for the "Cancel remove" button',
      filter: 'Filter component for the table',
      filterProps: 'Props of filter component for the table',
      removeButtonProps: 'Props for the "Remove selected rows" button',
      cancelButtonProps: 'Props for the "Cancel remove" button',
      expandRowTable: 'Function that returns the expanded content (table or custom component)',
      onRowSelect: 'Triggered when table rows are selected',
      onChangePage: 'Triggered when the page is changed',
      onFilter: 'Triggered when filter values are applied',
      onCancelFilter: 'Triggered when filter values are reset'
    },
    tableFilterDesc: {
      color: 'Color theme of the table',
      filter: 'Filter component for the table',
      filterButtonTitle: 'Text or component for the "Filter rows" button',
      cancelFilterButtonTitle: 'Text or component for the "Cancel filter rows" button',
      filterButtonProps: 'Props for the "Filter rows" button',
      cancelFilterButtonProps: 'Props for the "Cancel filter rows" button',
      hasFilterButton: 'Shows or hides the filter button',
      hasCancelFilterButton: 'Shows or hides the cancel filter button',
      onFilter: 'Triggered when filter values are applied',
      onCancelFilter: 'Triggered when filter values are reset'
    },
    columnDesc: {
      id: 'Unique ID for each column',
      title: 'Header title of the column',
      dataIndex: 'Key of the data record to display in this column',
      component: 'Dynamic component to render in the column',
      render: 'HTML string rendered via v-html'
    },
    componentDesc: {
      node: 'Dynamic component to be rendered',
      slotContent: "Content passed into the component's slot",
      props: 'Props passed to the dynamic component'
    }
  }
}

export default table_en
