import { config, fields, collection, singleton } from '@keystatic/core';



export default config({
    storage: {
    kind: 'local',
  },

    singletons: {
        settings: singleton({
          label: 'Settings',
          path: 'src/content/settings',
          schema: {}
        }),
        contacts: singleton({
            label: 'Contacts',
            path: 'src/content/contacts',
            schema: {}
          }),
      },
      collections: {
        testimonials: collection({
            label: 'Testimonials',
            slugField: 'client',
            path: 'src/content/testimonials/**',
            schema: {
              client: fields.slug({ name: { label: 'Client' } }),
              avatar: fields.image({
                label: 'Avatar',
                description: 'The avatar for this user',
                directory: 'src/assets/avatars/',
                publicPath: '../../../assets/avatars'
                }),
              company: fields.conditional(
                fields.checkbox({ label: 'Add Company with Description', defaultValue: false }),
                {
                  true: fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description' }),
                  }),
                  false: fields.empty(),
                }
              ),
              quote: fields.text({ label: 'Quote', multiline: true }),
            }
          }),
        blog: collection({
          label: 'Blog Posts',
          slugField: 'title',
          path: 'src/content/posts/**',
          format: { contentField: 'body' },
          entryLayout: 'content',
          schema: {
            title: fields.slug({ name: { label: 'title' } }),
            excerpt: fields.text({ label: 'excerpt' }),
            author: fields.text({ label: 'author' }),
            quote: fields.text({
              label: 'Quote',
              multiline: true
            }),
            image: fields.image({
              label: 'image',
              directory: 'src/assets/blog',
              publicPath: '../../../assets/blog'
            }),
            imageAlt: fields.text({ label: 'ImageAlt' }),
            category: fields.select({
                label: 'category',
                description: "The categories role at the company",
                options: [
                  { label: 'Category', value: 'category' },
                  { label: 'Well servicing', value: 'Well servicing' },
                  { label: 'Well construction', value: 'well construction' },
                  { label: 'Pump repair', value: 'pump repair' },
                  { label: 'Autonomous sewerage', value: 'autonomous sewerage' },
                  { label: 'Обслуживание скважин', value: 'обслуживание скважин' },
                  { label: 'Обустройство скважин', value: 'обустройство скважин' }, 
                  { label: 'Ремонт насосов', value: 'ремонт насосов' },
                  { label: 'Автономная канализация', value: 'автономная канализация' },
                  { label: 'Обслуговування свердловин', value: 'обслуговування свердловин' },
                  { label: 'Облаштування свердловин', value: 'облаштування свердловин' },
                  { label: 'Ремонт насосів', value: 'ремонт насосів' },
                  { label: 'Автономна каналізація', value: 'автономна каналізація' },
                ],
                defaultValue: 'category'
              }),
            seo: fields.conditional(
                fields.checkbox({ 
                  label: 'Define custom SEO tags', 
                  defaultValue: false,
                }),
                {
                  false: fields.empty(),
                  true: fields.object({
                    title: fields.text({ label: 'Title' }),
                    description: fields.text({ label: 'Description' }),
                    url: fields.url({
                        label: 'URL',
                        description: 'The website URL'
                      }),
                  }),
                }
              ),
              tags: fields.array(
                fields.text({ label: 'Tag' }),
                {
                  label: 'Tag',
                  itemLabel: props => props.value
                }
              ),
              date: fields.date({
                label: 'Event date',
                description: 'The date of the event'
              }),
              categories: fields.multiselect({
                label: 'categories',
                options: [
                  { label: 'Repair', value: 'repair' },
                  { label: 'Maintenance', value: 'maintenance' },
                  { label: 'Installation', value: 'installation' },
                  { label: 'Arrangement', value: 'arrangement' },
                  { label: 'Construction', value: 'construction' },
                  { label: 'Починка', value: 'починка' },
                  { label: 'Обслуживание', value: 'обслуживание' },
                  { label: 'Обустройство', value: 'обустройство' },
                  { label: 'Установка', value: 'установка' },
                  { label: 'Строительство', value: 'строительство' },
                  { label: 'Ремонт', value: 'ремонт' },
                  { label: 'Обслуговування', value: 'Обслуговування' },
                  { label: 'Облаштування', value: 'облаштування' },
                  { label: 'Встановлення', value: 'встановлення' },
                  { label: 'Будівництво', value: 'будівництво' },
                  { label: 'Services', value: 'services' }, 
                  { label: 'Сервисы', value: 'сервисы' }, 
                  { label: 'Сервіси', value: 'сервіси' },  
                ],
                defaultValue: ['services'],
              }),
            body: fields.document({
                label: 'Body',
                formatting: {
                    alignment: true,
                    blockTypes: true,
                    headingLevels: true,
                    inlineMarks: {
                      code: true,
                      bold: true,
                      italic: true,
                      underline: true,
                      strikethrough: true,
                    },
                    listTypes: true,
                  },
                tables: true,
                dividers: true,
                links: true,
                images: {
                    directory: 'src/assets/images/posts',
                    publicPath: '../../../assets/images/posts/',
                },
            }),
           },
        }),
    
    services: collection({
        label: 'Services',
        slugField: 'title',
        path: 'src/content/services/**',
        format: { 
            data: 'json'
        },
        schema: {
          title: fields.slug({ name: { label: 'Title' } }),
          offers: fields.array(
            fields.relationship({
              label: 'Offers',
              description: 'A list of authors for this post',
              collection: 'offers'
            }),
            {
              label: 'Offers',
              itemLabel: props => props.value
            }),
            description: fields.text({
                label: 'Description',
                multiline: true
              }),
            heading: fields.text({
                label: 'Heading Text',
                multiline: true
            }),
          featuredMedia: fields.conditional(
              fields.select({
                label: 'Featured media',
                description: 'Optional image/video options for an optional hero media.',
                options: [
                  { label: 'No media', value: 'none' },
                  { label: 'Image', value: 'image' },
                  { label: 'Video', value: 'video' },
                ],
                defaultValue: 'none',
              }),
              {
                none: fields.empty(),
                image: fields.object({
                  asset: fields.image({
                    label: 'Image',
                    directory: 'src/assets/images/services',
                    publicPath: '../../assets/images/services/',
                    validation: { isRequired: true },
                  }),
                  alt: fields.text({ label: 'Alt', description: 'Image alt text.' }),
                }),
                video: fields.object({
                  url: fields.text({
                    label: 'A YouTube video URL.',
                    validation: { length: { min: 1 } },
                  }),
                  image: fields.object({
                    asset: fields.image({
                      label: 'Image',
                      description: 'Thumbnail image override for the video.',
                      directory:  'src/assets/images/services',
                      publicPath: '../../assets/images/services/',
                    }),
                    alt: fields.text({ label: 'Alt', description: 'Image alt text.' }),
                  }),
                }),
              }
            ),
          seo: fields.conditional(
              fields.checkbox({ 
                label: 'Define custom SEO tags', 
                defaultValue: false,
              }),
              {
                false: fields.empty(),
                true: fields.object({
                  title: fields.text({ label: 'Title' }),
                  description: fields.text({ label: 'Description' }),
                  url: fields.url({
                      label: 'URL',
                      description: 'The website URL'
                    }),
                }),
              }
            ),
            tags: fields.array(
              fields.text({ label: 'Tag' }),
              {
                label: 'Tag',
                itemLabel: props => props.value
              }
            ),
            videoFile: fields.pathReference({
              label: 'Video file',
              description: 'A reference to a video file in the `public` folder',
              pattern: 'src/assets/**/*',
            }),
         },
      }),

    offers: collection({
        label: 'Offers',
        slugField: 'title',
        path: 'src/content/offers/**',
        format: { 
            data: 'json'
        },
        schema: {
          title: fields.slug({ name: { label: 'Title' } }),
          services: fields.relationship({
            label: 'Service',
            description: 'This offer relate to this Service Category',
            collection: 'services'
          }),
          description: fields.text({
            label: 'Description',
            multiline: true
          }),
          heading: fields.text({
            label: 'Heading Text',
            multiline: true
          }),
          featuredMedia: fields.conditional(
              fields.select({
                label: 'Featured media',
                description: 'Optional image/video options for an optional hero media.',
                options: [
                  { label: 'No media', value: 'none' },
                  { label: 'Image', value: 'image' },
                  { label: 'Video', value: 'video' },
                ],
                defaultValue: 'none',
              }),
              {
                none: fields.empty(),
                image: fields.object({
                  asset: fields.image({
                    label: 'Image',
                    directory: 'src/assets/images/offers',
                    publicPath: '../../assets/images/offers/',
                    validation: { isRequired: true },
                  }),
                  alt: fields.text({ label: 'Alt', description: 'Image alt text.' }),
                }),
                video: fields.object({
                  url: fields.text({
                    label: 'A YouTube video URL.',
                    validation: { length: { min: 1 } },
                  }),
                  image: fields.object({
                    asset: fields.image({
                      label: 'Image',
                      description: 'Thumbnail image override for the video.',
                      directory:  'src/assets/images/offers',
                      publicPath: '../../assets/images/offers/',
                    }),
                    alt: fields.text({ label: 'Alt', description: 'Image alt text.' }),
                  }),
                }),
              }
            ),
          seo: fields.conditional(
              fields.checkbox({ 
                label: 'Define custom SEO tags', 
                defaultValue: false,
              }),
              {
                false: fields.empty(),
                true: fields.object({
                  title: fields.text({ label: 'Title' }),
                  description: fields.text({ label: 'Description' }),
                  url: fields.url({
                      label: 'URL',
                      description: 'The website URL'
                    }),
                }),
              }
            ),
            tags: fields.array(
              fields.text({ label: 'Tag' }),
              {
                label: 'Tag',
                itemLabel: props => props.value
              }
            ),
            videoFile: fields.pathReference({
              label: 'Video file',
              description: 'A reference to a video file in the `public` folder',
              pattern: 'src/assets/**/*',
            }),
         },
      })
    
    }
});
