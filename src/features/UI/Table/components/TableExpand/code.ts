export const tableExpandVueCode = `  
<script setup lang="ts">
import { Table, Image } from '@/components/UI'
import type { TableColumns } from '@/components/UI/Table/type'

interface TableData {
  id: string
  content: string
  productName: string
  child: TableData[]
}

const dataSource: TableData[] = [
  {
    id: '1',
    content: 'This is a comment 1',
    productName: 'Product 1',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      },
      {
        id: 'child-2',
        content: 'This is a child comment 2',
        productName: 'Product 2',
        child: []
      },
      {
        id: 'child-3',
        content: 'This is a child comment 3',
        productName: 'Product 3',
        child: []
      }
    ]
  },
  {
    id: '2',
    content: 'This is a comment 2',
    productName: 'Product 2',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      },
      {
        id: 'child-2',
        content: 'This is a child comment 2',
        productName: 'Product 2',
        child: []
      }
    ]
  },
  {
    id: '3',
    content: 'This is a comment 3',
    productName: 'Product 3',
    child: [
      {
        id: 'child-1',
        content: 'This is a child comment 1',
        productName: 'Product 1',
        child: []
      }
    ]
  }
]

const columns: TableColumns<TableData> = [
  {
    id: 'id',
    title: 'Image',
    dataIndex: 'id',
    component: () => ({
      node: Image,
      props: { imgWidth: 50, imgHeight: 50 }
    })
  },
  {
    id: 'content',
    title: 'Content',
    dataIndex: 'content'
  },
  {
    id: 'productName',
    title: 'Product name',
    dataIndex: 'productName'
  }
]
</script>

<template>
  <Table
    :dataSource="dataSource"
    :columns="columns"
  />
</template>
`

export const tableExpandReactCode = `
import { Image, Table } from "./components/UI";
import { Columns } from "./components/UI/Table/type";

interface TableData {
  id: string;
  content: string;
  productName: string;
  child: TableData[];
}

const App: React.FC = () => {
  const dataSource: TableData[] = [
    {
      id: "1",
      content: "This is a comment 1",
      productName: "Product 1",
      child: [
        {
          id: "child-1",
          content: "This is a child comment 1",
          productName: "Product 1",
          child: [],
        },
        {
          id: "child-2",
          content: "This is a child comment 2",
          productName: "Product 2",
          child: [],
        },
        {
          id: "child-3",
          content: "This is a child comment 3",
          productName: "Product 3",
          child: [],
        },
      ],
    },
    {
      id: "2",
      content: "This is a comment 2",
      productName: "Product 2",
      child: [],
    },
    {
      id: "3",
      content: "This is a comment 3",
      productName: "Product 3",
      child: [],
    },
  ];

  const columns: Columns<TableData> = [
    {
      id: "id",
      dataIndex: "id",
      title: "Image",
      render: () => <Image imgWidth={50} imgHeight={50} />,
    },
    {
      id: "content",
      dataIndex: "content",
      title: "Content",
    },
    {
      id: "productName",
      dataIndex: "productName",
      title: "Product",
    },
  ];

  const expandRowTable = (data: TableData) => {
    return <Table<TableData> dataSource={data.child} columns={columns} />;
  };

  return (
    <Table<TableData>
      hasRowExpand
      expandRowTable={expandRowTable}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default App;
`