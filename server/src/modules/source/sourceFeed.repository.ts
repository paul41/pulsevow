import prisma from "../../config/prisma.js";
import type { SourceFeed } from "@prisma/client";

export class SourceFeedRepository {
    
  async findBySourceId(sourceId: string): Promise<SourceFeed[]> {
    return prisma.sourceFeed.findMany({
      where: {
        sourceId,
      },
    });
  }
}
