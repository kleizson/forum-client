export interface CategoryInterface {
  [key: string]: {
    name: string;
    timestamp: number;
  };
}
export interface CategoryInterfaceParams {
  categories: CategoryInterface;
}
