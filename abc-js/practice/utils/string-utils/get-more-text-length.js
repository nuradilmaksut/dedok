import { len } from "./len.js";

export function getMoreTextLength (firstText, secondText) {
    if (len(firstText) > len(secondText)) return len(firstText);

    return len(secondText);
}