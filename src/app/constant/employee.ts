import { employee } from '../shared/interface/employee.model';

export const employees: employee[] = [
  {
    id: '63a52757ecdaa6eb3e899e0f',
    image: '',
    username: 'GatesAlvarez',
    firstName: 'Dolly',
    lastName: 'King',
    email: 'dollyking@insurity.com',
    birthDate: new Date('1986-02-09'),
    tesSalary: convertFormatRp('927169458'),
    status: 'Permanent',
    group: 'SORH Information Technology',
    description:
      'Sunt labore ipsum nisi eiusmod deserunt fugiat mollit eiusmod sunt elit sint exercitation. Duis enim enim cupidatat commodo enim laborum adipisicing officia magna. Non anim exercitation commodo culpa culpa cupidatat ut laboris esse nostrud esse. Minim consectetur eu est eu proident et amet incididunt cillum cupidatat officia adipisicing adipisicing.\r\n',
  },
  {
    id: '63a52757e7d0b3dcb85b0eeb',
    image: '',
    username: 'GravesOsborn',
    firstName: 'Jolene',
    lastName: 'Williamson',
    email: 'jolenewilliamson@insurity.com',
    birthDate: new Date('1999-11-29'),
    tesSalary: convertFormatRp('822030543'),
    status: 'Permanent',
    group: 'IT Application Supports',
    description:
      'Occaecat dolor nulla est mollit fugiat amet ea magna reprehenderit mollit. Proident incididunt incididunt occaecat cillum. Voluptate cillum ut ad sit tempor nisi exercitation et tempor enim aute cillum esse. Ipsum ipsum excepteur veniam ipsum ullamco minim pariatur labore laboris.\r\n',
  },
  {
    id: '63a527570d821ac572f88ba8',
    image: '',
    username: 'PottsCampbell',
    firstName: 'Robbie',
    lastName: 'Nash',
    email: 'robbienash@insurity.com',
    birthDate: new Date('1992-09-16'),
    tesSalary: convertFormatRp('932803636'),
    status: 'Permanent',
    group: 'SORH Information Technology',
    description:
      'Commodo anim minim excepteur consectetur fugiat eu laborum pariatur do mollit. Sint labore exercitation adipisicing cupidatat ut do excepteur cillum voluptate. Labore et eu minim esse non tempor esse nulla aute ex aliqua. Ullamco enim aliquip veniam magna enim quis nostrud veniam ea sunt cillum. Sunt laboris deserunt sit aliquip aliquip amet ea sit esse dolore occaecat fugiat ipsum irure. Exercitation sint est labore qui nostrud sit sunt et adipisicing dolor officia consectetur minim fugiat. Elit labore sit aute Lorem dolor ex nulla.\r\n',
  },
  {
    id: '63a527577dca17de75a42a98',
    image: '',
    username: 'VirginiaMcintosh',
    firstName: 'Corina',
    lastName: 'Collins',
    email: 'corinacollins@insurity.com',
    birthDate: new Date('1981-03-03'),
    tesSalary: convertFormatRp('971847837'),
    status: 'Contract',
    group: 'IT Application Supports',
    description:
      'Minim exercitation aliqua tempor laboris magna eu. Dolor non veniam sint in duis excepteur in do velit culpa. Laborum labore aliquip magna sunt aute dolor et dolore ullamco esse. Excepteur enim quis dolore aliquip culpa est consequat. Occaecat anim ea reprehenderit minim aute dolore ipsum eiusmod sint ea pariatur voluptate anim deserunt. Cupidatat velit irure commodo pariatur aliqua id pariatur.\r\n',
  },
  {
    id: '63a5275741eb277bb7b25ade',
    image: '',
    username: 'GlassGlenn',
    firstName: 'Pickett',
    lastName: 'English',
    email: 'pickettenglish@insurity.com',
    birthDate: new Date('1982-02-09'),
    tesSalary: convertFormatRp('909200175'),
    status: 'Permanent',
    group: 'IT Application Development',
    description:
      'Ad velit veniam ea qui quis ullamco. Et ipsum magna adipisicing dolor nisi tempor culpa. Ipsum deserunt reprehenderit in est id sunt mollit qui incididunt adipisicing est duis. Nostrud dolor dolor tempor ullamco minim. Mollit qui commodo labore quis veniam anim officia sit incididunt dolore. Deserunt consequat Lorem amet commodo et incididunt nulla nostrud sunt adipisicing.\r\n',
  },
  {
    id: '63a527570f149b09f903545f',
    image: '',
    username: 'BradleyVasquez',
    firstName: 'Arline',
    lastName: 'Larson',
    email: 'arlinelarson@insurity.com',
    birthDate: new Date('2000-11-01'),
    tesSalary: convertFormatRp('898493929'),
    status: 'Permanent',
    group: 'SORH Information Technology',
    description:
      'Dolor duis magna magna culpa anim anim mollit do anim cupidatat. Ut irure esse id labore quis deserunt ad magna dolor duis. Id do pariatur irure incididunt voluptate cupidatat consectetur sit. Ea nisi cillum fugiat esse ad nisi ut mollit aute sunt.\r\n',
  },
];

export const formList: any = [
  {
    name: 'username',
    title: 'Username',
    type: 'text',
  },
  {
    name: 'email',
    title: 'Email',
    type: 'email',
  },
  {
    name: 'firstName',
    title: 'First Name',
    type: 'text',
  },
  {
    name: 'lastName',
    title: 'Last Name',
    type: 'text',
  },
];

export const EMPLO: string = 'listEmployee';

export function convertFormatRp(amount: string): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(Number(amount));
}

function newDate(date: string): Date {
  return new Date(date);
}
