import { WebpageType } from '@prisma/client'
import { prisma } from '../prisma'

export async function queryWebpages() {
  const data = await prisma.webpage.findMany()
  return data
}

type CreateWebpageInput = {
  title: string
  author: string
  url: string
  date: Date
  type: WebpageType
  eventSlug: string
}

export async function createWebpage(data: CreateWebpageInput) {
  const webpage = await prisma.webpage.create({
    data: {
      title: data.title,
      author: data.author,
      url: data.url,
      date: data.date,
      type: data.type,
      event: {
        connect: {
          slug: data.eventSlug,
        },
      },
    },
  })
  return webpage
}
