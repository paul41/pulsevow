import prisma from "../../config/prisma.js";
export class CategoryRepository {
  /**
   * Get category name by ID
   */
  async findNameById(categoryId: string): Promise<string | null> {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      select: {
        name: true,
      },
    });

    return category?.name ?? null;
  }
}