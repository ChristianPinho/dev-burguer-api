import Sequelize, { Model } from "sequelize";

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "categories",
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/category-file/${this.path}`;
          },
        },
      },
    );

    return this;
  }
}

export default Category;
