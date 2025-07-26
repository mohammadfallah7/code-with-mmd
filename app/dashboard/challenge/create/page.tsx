import { getCategories } from "@/lib/get-categories";
import CreateCategoryDialog from "./_components/create-category-dialog";
import CreateChallengeForm from "./_components/create-challenge-form";

const CreateChallengePage = async () => {
  const categories = await getCategories();

  return (
    <div className="space-y-4">
      <CreateCategoryDialog />
      <CreateChallengeForm categories={categories} />
    </div>
  );
};

export default CreateChallengePage;
