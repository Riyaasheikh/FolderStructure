export const getNavConfig = (type) => {
  switch (type) {
    case 'group1':
      return {
        links: [
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
          { label: 'Work', href: '/work' },
        ],
        button: { label: 'Contact Now' },
      };
    case 'group2':
      return {
        links: [
          { label: 'Product', href: '/product' },
          { label: 'Solution', href: '/solutions' },
          { label: 'Resource', href: '/resources' },
          { label: 'Blog', href: '/blogs' },
        ],
        button: { label: 'Register Now' },
      };
    default:
      return {};
  }
}