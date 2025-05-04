export interface WorkExperience {
  date: string
  position: string
  company: string
  location: string
  description: string
  link?: string
}

export const workExperience: WorkExperience[] = [
  {
    date: '07/2022 - present',
    position: 'Product & Technical Lead, Bilum platform',
    company: 'Catalpa International',
    location: 'Papua New Guinea',
    description:
      'Leading product development for a governance platform used across the Government of Papua New Guinea to report on government expenditures.',
    link: 'https://catalpa.io/projects/district-information-management-system/',
  },
  {
    date: '07/2020 - 07/2022',
    position: 'Head of Governance and Transparency',
    company: 'Catalpa International',
    location: 'Indonesia',
    description:
      'Managed a portfolio of 4 programs across 3 different countries worth US$2.2m a year in donor funding.',
  },
  {
    date: '07/2019 - 07/2020',
    position: 'Team Leader, Project Bank Portal',
    company: 'Catalpa International',
    location: 'Timor-Leste',
    description:
      'Led project management and technical implementation for the Project Bank portal, a transparency coordination portal for major investment projects in Myanmar.',
  },
  {
    date: '02/2018 - 07/2019',
    position: 'Technical Lead, Hamutuk Project',
    company: 'Catalpa International',
    location: 'Timor-Leste',
    description:
      'Led a team of engineers building a mobile application and web platform used by over 20 NGOs and Government Ministries in Timor-Leste.',
  },
  {
    date: '06/2016 - 02/2018',
    position: 'Software Developer',
    company: 'Catalpa International',
    location: 'Timor-Leste',
    description:
      'Back and front-end engineering for development projects in Timor-Leste and Myanmar.',
  },
  {
    date: '06/2014 - 06/2016',
    position: 'Software Engineer',
    company: 'Captricity',
    location: 'Oakland, USA',
    description:
      'Worked on all technical aspects of a platform used to extract handwritten information from images of paper forms at 99.9% accuracy.',
  },
]
