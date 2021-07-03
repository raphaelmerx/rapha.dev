type headerNavLink = {
  href: string
  title: String
}

const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
] as headerNavLink[]

export default headerNavLinks
