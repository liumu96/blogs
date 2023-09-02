import Link from "next/link";
import React from "react";
import Label from "@/components/ui/Label";

interface CategoryItem {
  title: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

const CategoryLabel = ({
  categories,
  nomargin = false,
}: {
  categories: Array<CategoryItem>;
  nomargin: Boolean;
}) => {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => {
          return (
            <Link href="/" key={index}>
              <Label nomargin={nomargin}>{category.title}</Label>
            </Link>
          );
        })}
    </div>
  );
};

export default CategoryLabel;
