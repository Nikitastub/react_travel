import { ILink } from "./linkModel";

export const Link = (link: ILink) =>
    <a href="#" className={`base-link ${link.classes}`}>
        {link.linkName}
    </a>