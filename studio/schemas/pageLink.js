export default {
  name: 'pageLink',
  title: 'Page Links',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string'
    },
    {
      title: 'Link text',
      name: 'linkText',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    }
  ]
}