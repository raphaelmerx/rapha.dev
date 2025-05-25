export interface Publication {
  date: string
  authors: string
  title: string
  venue: string
  link: string
  award?: string
}

export const publications: Publication[] = [
  {
    date: '07/2025',
    authors: 'R Merx, H Suominen, L Hong, N Thieberger, T Cohn, E Vylomova',
    title: 'Tulun: Transparent and Adaptable Low-resource Machine Translation',
    venue: 'ACL System Demonstration',
    link: 'arxiv',
  },
  {
    date: '07/2025',
    authors: 'N Baes, R Merx, N Haslam, E Vylomova, H Dubossarsky',
    title:
      'A General Framework to Evaluate Methods for Assessing Dimensions of Lexical Semantic Change Using LLM-Generated Synthetic Data',
    venue: 'ACL Findings',
    link: 'https://arxiv.org/abs/2503.08042',
  },
  {
    date: '05/2025',
    authors: 'R Merx, A J G Correia, H Suominen, E Vylomova',
    title:
      'Low-resource Machine Translation: what for? who for? An observational study on a dedicated Tetun language translation service.',
    venue:
      'Eighth Workshop on Technologies for Machine Translation of Low-Resource Languages (LoResMT 2025) @ NAACL',
    link: 'https://aclanthology.org/2025.loresmt-1.7/',
    award: 'Nominated for Best Paper Award',
  },
  {
    date: '12/2024',
    authors: 'R Merx, E Vylomova, K Kurniawan',
    title:
      'Generating bilingual example sentences with large language models as lexicography assistants.',
    venue:
      '22nd Annual Workshop of the Australasian Language Technology Association (Association for Computational Linguistics, Canberra, Australia, 2024)',
    link: 'https://aclanthology.org/2024.alta-1.5/',
    award: 'Best Paper Award',
  },
  {
    date: '08/2024',
    authors: 'R Merx, C Phillips, H Suominen',
    title: 'Machine Translation Technology in Health: A Scoping Review',
    venue:
      'in Health. Innovation. Community: It Starts With Us 78–83 (IOS Press, 2024). doi:10.3233/SHTI240895',
    link: 'https://ebooks.iospress.nl/doi/10.3233/SHTI240895',
  },
  {
    date: '03/2024',
    authors: 'R Merx, A Mahmudi, K Langford, L A de Araujo, E Vylomova',
    title:
      'Low-Resource Machine Translation through Retrieval-Augmented LLM Prompting: A Study on the Mambai Language',
    venue:
      'in Proceedings of the 2nd Workshop on Resources and Technologies for Indigenous, Endangered and Lesser-resourced Languages in Eurasia (EURALI) @ LREC-COLING 2024 (eds. Ojha, A. Kr. et al.) 1–11 (ELRA and ICCL, Torino, Italia, 2024)',
    link: 'https://aclanthology.org/2024.eurali-1.1/',
  },
]
