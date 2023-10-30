import { Client } from '@notionhq/client'

const auth = process.env.NOTION_DB_TOKEN || 'secret_ALxT9DrGl9OGF0VjD66sBHpjVjn9e3V9hlcvHmHHXsS';

export default class NotionService {
  constructor() {
    this.client = new Client({ auth });
  }

  async queryDB(databaseId) {
    const response = await this.client.databases.query({
      database_id: databaseId
    });
    return response.results.map((item) =>
      NotionService.transformer(item)
    );
  }

  static transformer(page) {
    const data = {
      id: page.id
    };

    for (const key in page.properties) {
      if (
        !page.properties[key] ||
        !page.properties[key][page.properties[key].type]
      ) {
        continue;
      }
      switch (page.properties[key].type) {
        case 'date':
          data[key] = page.properties[key].date.start;
          break;
        case 'relation':
          if (page.properties[key].relation[0]) { data[key] = page.properties[key].relation[0]?.id; }
          break;

        case 'number':
          data[key] = page.properties[key].number;
          break;

        case 'select':
          if (page.properties[key].select) { data[key] = page.properties[key].select?.name; }
          break;

        case 'title':
        case 'rich_text':
          if (page.properties[key][page.properties[key].type][0]) {
            data[key] = page.properties[key][page.properties[key].type]
              .map((item) => item.text.content)
              .join('');
          }
          break;

        default:
          data[key] = page.properties[key] || null;
          break;
      }
    }

    return data;
  }
}
