export type SiteConfig = {
  name: string
  author: string
  logo: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  links: {
    tel: string
  }
  ogImage: string
}
