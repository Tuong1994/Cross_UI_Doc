export type CatalogItem = {
  id: string
  title: string
}

export type CatalogItems = CatalogItem[]

export type Catalog = {
  id: string;
  groupTitle: string;
  items: CatalogItems
}
