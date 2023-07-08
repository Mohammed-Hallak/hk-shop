import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/Categories";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

export default function CategoriesPreview() {
  let { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}
