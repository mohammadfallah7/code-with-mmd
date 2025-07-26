"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createChallenge } from "@/lib/actions";
import { getCategories } from "@/lib/get-categories";
import { CreateChallengeState } from "@/types/challenge.model";
import { LucideLoader2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

type Categories = Awaited<ReturnType<typeof getCategories>>;

const CreateChallengeForm = ({ categories }: { categories: Categories }) => {
  const initialState: CreateChallengeState = {};
  const [state, formAction, pending] = useActionState(
    createChallenge,
    initialState,
  );

  useEffect(() => {
    if (state.message === "Success") {
      toast.success("Challenge created successfully!");
    } else if (state.message && !state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="my-5 grid gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="e.g. FizzBuzz" />
            {state.errors?.title && (
              <ul>
                {state.errors.title.map((error, index) => (
                  <li className="text-sm text-red-500" key={index}>
                    {error}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="category">Category</Label>
            <Select name="categoryId">
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state.errors?.categoryId && (
              <ul>
                {state.errors.categoryId.map((error, index) => (
                  <li className="text-sm text-red-500" key={index}>
                    {error}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            className="resize-none"
            placeholder="Challenge description here..."
          />
          {state.errors?.description && (
            <ul>
              {state.errors.description.map((error, index) => (
                <li className="text-sm text-red-500" key={index}>
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col items-start gap-3">
          <Label htmlFor="starter_code">Starter Code</Label>
          <Textarea
            id="starter_code"
            name="starterCode"
            className="resize-none"
            placeholder="Challenge starter code here..."
          />
          {state.errors?.starterCode && (
            <ul>
              {state.errors.starterCode.map((error, index) => (
                <li className="text-sm text-red-500" key={index}>
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button disabled={pending} type="submit">
          {pending ? (
            <LucideLoader2 className="size-4 animate-spin" />
          ) : (
            "Create"
          )}
        </Button>
      </div>
    </form>
  );
};

export default CreateChallengeForm;
