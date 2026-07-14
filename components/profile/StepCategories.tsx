"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

type ArtistCategory = {
  id: number;
  name: string;
};

type StepCategoriesProps = {
  categories: ArtistCategory[];
  selectedCategoryIds?: number[];
  setSelectedCategoryIds?: (value: number[]) => void;
  selectedCategories?: number[];
  setSelectedCategories?: (value: number[]) => void;
};

export default function StepCategories({
  categories,
  selectedCategoryIds,
  setSelectedCategoryIds,
  selectedCategories,
  setSelectedCategories,
}: StepCategoriesProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const selectedIds = selectedCategoryIds ?? selectedCategories ?? [];
  const setSelectedIds = setSelectedCategoryIds ?? setSelectedCategories;

  function toggleCategory(categoryId: number) {
    if (!setSelectedIds) return;

    if (selectedIds.includes(categoryId)) {
      setSelectedIds(selectedIds.filter((id) => id !== categoryId));
      return;
    }

    setSelectedIds([...selectedIds, categoryId]);
  }

  return (
    <div className="space-y-8">
      <p className="text-white/60">
        {translate(
          "profile.stepsUi.categories.hint",
          "En fazla uygun kategorileri seç"
        )}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const selected = selectedIds.includes(category.id);

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => toggleCategory(category.id)}
              className={`rounded-2xl border px-5 py-4 text-left text-sm font-bold transition ${
                selected
                  ? "border-[#f5b942] bg-[#f5b942] text-black"
                  : "border-white/10 bg-black/20 text-white/75 hover:border-[#f5b942]/50 hover:bg-white/5"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {selectedIds.length > 0 && (
        <div className="rounded-3xl border border-[#f5b942]/20 bg-[#f5b942]/10 p-5">
          <p className="text-sm font-bold text-[#f5b942]">
            {selectedIds.length} kategori seçildi
          </p>
        </div>
      )}
    </div>
  );
}
