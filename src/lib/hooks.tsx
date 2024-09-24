import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

type useSectionInViewProps = {
  sectionName: SectionName;
};

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, lastClickTime } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClickTime, sectionName]);
  return {
    ref,
  };
}