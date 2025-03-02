const table_en = {
  desc: 'A table displays rows of data',
  api: {
    tableDesc: {
      dataSource: 'Data record array to be displayed',
      columns: 'Columns of table',
      hasRowSelection: 'Enabled row selection',
      hasExpand: 'Enabled expand for nested table',
      hasFilter: 'Enabled filter section',
      hasPagination: 'Enabled for paging',
      loading: 'Loading status of table',
      rowKey: 'Row unique key',
      color: 'Color of table',
      rootClassName: 'Class of container',
      tableClassName: 'Class of table',
      rootStyle: 'Inline style of container',
      tableStyle: 'Inline style of table',
      paginationProps: 'Props of pagination',
      onRowSelect: 'Select table rows',
      onChangePage: 'Trigger when change page',
      onFilter: 'Save filter values',
      onCancelFilter: 'Reset filter values'
    },
    columnDesc: {
      id: 'Unique Id for each column',
      title: 'Title for each column',
      dataIndex: 'Display field of the data record',
      component: 'Display dynamic component of column',
      render: 'Display HTML of column using v-html'
    },
    componentDesc: {
      node: 'Display dynamic component',
      slotContent: 'Display content within dynamic component',
      props: 'Props of dynamic component'
    }
  }
}

export default table_en
