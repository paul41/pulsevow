import prisma from "../../config/prisma.js";
import type { Source } from "@prisma/client";

export class SourceRepository {
    
  async findByActiveBatch(isActive: boolean, limit: number, offset: number): Promise<Source[]> {
    return prisma.source.findMany({
      where: {
        isActive,
      },
      take: limit,
      skip: offset,
    });
  }
}
