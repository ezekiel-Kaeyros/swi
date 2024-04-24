export type SidebarMenuProps = {
  icon?: any;
  title: string | undefined;
  url?: string;
  sidebarToggleState: boolean;
  submenus?: Array<{
    subTitle: string;
    url: string;
  }>;
};
