"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCategory } from "@/lib/actions";
import { CreateCategoryState } from "@/types/category.model";
import { LucideLoader2 } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

const CreateCategoryDialog = () => {
  const initialState: CreateCategoryState = {};
  const [state, formAction, pending] = useActionState(
    createCategory,
    initialState,
  );

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (state.message === "Success") {
      toast.success("Category created successfully!");

      if (closeButtonRef.current) closeButtonRef.current.click();
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Create category</DialogTitle>
            <DialogDescription>
              Enter category name. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="my-5 grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="e.g. Promise" />
              {state.errors?.name && (
                <ul>
                  {state.errors.name.map((error, index) => (
                    <li className="text-sm text-red-500" key={index}>
                      {error}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button ref={closeButtonRef} variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              {pending ? (
                <LucideLoader2 className="size-4 animate-spin" />
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;
