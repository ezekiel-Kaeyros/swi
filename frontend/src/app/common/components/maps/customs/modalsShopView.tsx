import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export type InfoWindowProps = google.maps.InfoWindowOptions & {
  onCloseClick?: () => void;
  anchor?: google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null;
};
type ExtendsTypesForWindowPopup = HTMLAttributes<HTMLDivElement> &
  InfoWindowProps;

interface customTypeForModalView extends ExtendsTypesForWindowPopup {
  children: ReactNode;
}

export const PopupView: FC<customTypeForModalView> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};
export default PopupView;
