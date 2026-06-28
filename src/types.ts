export type PageView = 'home' | 'about' | 'services' | 'reviews' | 'contact';

export interface NavItem {
  label: string;
  view: PageView;
}
