export type SidebarMenuProps = {
  icon?: any;
  title: string | undefined;
  url?: string;
  sidebarToggle: boolean;
  submenus?: Array<{
    subTitle: string;
    url: string;
  }>;
};
