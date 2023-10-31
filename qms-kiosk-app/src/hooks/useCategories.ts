import { CategoriesData, loadCategories } from "../common/api";
import { Progress, useProgress } from "../common/hooks";

/**
 * Hook to get the available categories
 * @returns Progress<CategoriesData>
 */
const useCategories = (): Progress<CategoriesData> => useProgress<CategoriesData>(loadCategories());

export default useCategories;
