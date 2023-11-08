import NotionService from '@/lib/notionServer'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const notionService = new NotionService()
    const dbId = process.env.DB_ID
    const projectsData = await notionService.queryDB(dbId);
    // 对象转换 需要在最外层加上括号
    const data = projectsData.map(item => ({
      ...item,
      media: item['Files & media']?.files[0]?.file?.url
    }));
    res.status(200).json({ status: 'success', message: 'Subscription successful!', data })
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' })
  }
}
