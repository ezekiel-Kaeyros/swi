import { RoadItemType } from "@/redux/features/types";

export type RouteCardProps = {
  id: string;
  routeName: string;
  salesName: string;
  numberOfPos: number;
  profilePicture: string;
  activitiesDuration: string;
  numberOfTasksCompleted: string; 
  roadItems?: RoadItemType[]; 
};
