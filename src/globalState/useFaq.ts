import { create } from "zustand";
import { FaqData } from "../types";

type FaqDatas = {
  faqData: FaqData[] | null;
  activeFaqFilter: string;
};
type Actions = {
  setFaqData: (faqData: FaqData[]) => void;
  setActiveFaqFlter: (faqFilter: string) => void;
};

const useFaq = create<FaqDatas & Actions>((set) => ({
  faqData: null,
  activeFaqFilter: "All",
  setFaqData: (faqData) => set(() => ({ faqData: faqData })),
  setActiveFaqFlter: (faqFilter) => set(() => ({ activeFaqFilter: faqFilter })),
}));

export default useFaq;
