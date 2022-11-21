import { ISectionTitle } from "./sectionTitleModel";

export const SectionTitle = (title: ISectionTitle) =>
    <h2 className="section-title">
        {title.text}
    </h2>