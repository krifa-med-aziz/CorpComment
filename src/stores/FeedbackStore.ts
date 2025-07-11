import { create } from "zustand";
import type { TFeedbackItem } from "../lib/types";

type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  addItem: (text: string) => Promise<void>;
  selectCompany: (companyName: string) => void;
  fetchfedbackItems: () => Promise<void>;
};

export const useFeedbackItemsStore = create<Store>((set) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  addItem: async (text: string) => {
    const companyName =
      text
        .split(" ")
        .find((word) => word.includes("#"))!
        .substring(1) || "unknown";
    const newItem: TFeedbackItem = {
      id: new Date().getDate(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    );
  },
  selectCompany: (companyName: string) => {
    set(() => ({ selectedCompany: companyName }));
  },
  fetchfedbackItems: async () => {
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      set(() => ({ isLoading: false, feedbackItems: data.feedbacks }));
    } catch {
      set(() => ({ errorMessage: "Somethin went wrong!", isLoading: false }));
    }
  },
}));
