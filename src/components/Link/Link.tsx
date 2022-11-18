import { ILink } from "./linkModel";

export const Link = (link: ILink) =>
    <a href="#!" className={`base-${link.type} ${link.classes}`}>
        {link.linkName}
    </a>