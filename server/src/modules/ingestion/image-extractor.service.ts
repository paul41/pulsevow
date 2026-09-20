export class ImageExtractorService {
  extract(raw: any): string | null {
    if (!raw) {
      return null;
    }

    // 1. media:thumbnail
    // BBC, Indian Express, IndiaTV, home, etc.
    const mediaThumbnail = raw["media:thumbnail"];

    const thumbnailUrl =
      mediaThumbnail?.$?.url ??
      mediaThumbnail?.url;

    if (thumbnailUrl) {
      return thumbnailUrl;
    }

    // 2. media:content
    // The Indian Express can return this as an object OR an array.
    const mediaContent = raw["media:content"];

    if (Array.isArray(mediaContent)) {
      const image = mediaContent.find(
        (item) =>
          item?.medium === "image" &&
          typeof item?.url === "string"
      );

      if (image?.url) {
        return image.url;
      }

      // Fallback if medium is not provided
      const firstUrl = mediaContent.find(
        (item) => typeof item?.url === "string"
      );

      if (firstUrl?.url) {
        return firstUrl.url;
      }
    }

    if (typeof mediaContent?.url === "string") {
      return mediaContent.url;
    }

    // 3. enclosure
    // Scroll.in, Times of India, etc.
    if (typeof raw.enclosure?.url === "string") {
      return raw.enclosure.url;
    }

    // 4. NDTV
    if (typeof raw.StoryImage === "string") {
      return raw.StoryImage;
    }

    // 5. NDTV full image
    // Important: NDTV uses lowercase `fullimage`
    if (typeof raw.fullimage === "string") {
      return raw.fullimage;
    }

    // Some feeds may use fullImage
    if (typeof raw.fullImage === "string") {
      return raw.fullImage;
    }

    // 6. Generic image object
    if (typeof raw.image?.url === "string") {
      return raw.image.url;
    }

    // 7. media:group -> media:content
    const groupedContent =
      raw["media:group"]?.["media:content"];

    if (Array.isArray(groupedContent)) {
      const image = groupedContent.find(
        (item) =>
          item?.medium === "image" &&
          typeof item?.url === "string"
      );

      if (image?.url) {
        return image.url;
      }

      const firstUrl = groupedContent.find(
        (item) => typeof item?.url === "string"
      );

      if (firstUrl?.url) {
        return firstUrl.url;
      }
    }

    if (typeof groupedContent?.url === "string") {
      return groupedContent.url;
    }

    // 8. Some publishers such as Moneycontrol image in description.
    const descriptionImage = this.extractImageFromDescription(
      raw.description
    );

    if (descriptionImage) {
      return descriptionImage;
    }

    // No image found
    return null;
  }

  private extractImageFromDescription(
    description?: string
  ): string | null {
    if (!description || typeof description !== "string") {
      return null;
    }

    const match = description.match(
      /<img[^>]+src=["']([^"']+)["']/i
    );

    return match?.[1] ?? null;
  }
}