import { MdLink } from 'react-icons/md'

export default {
  name: 'socialMediaLinks',
  title: 'Social Media Links',
  type: 'document',
  // You probably want to uncomment the next line once you've made a companyInfo document in the Studio. This will remove the companyInfo document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  icon: MdLink,
  fields: [
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string'
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string'
    },
    {
      name: 'behance',
      title: 'Behance',
      type: 'string'
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'string'
    },
    {
      name: 'dribbble',
      title: 'Dribbble',
      type: 'string'
    }
  ]
}
