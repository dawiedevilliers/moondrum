import { GalleryImage } from "./gallery-image";

export class MoonDrumEvent {
    constructor(
        public name: string, 
        public coverImage: string,
        public galleryImage: GalleryImage[]) {

    }
}