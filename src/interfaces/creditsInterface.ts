export interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'CostumeMakeUp',
  Creator = 'Creator',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Lightiing = 'Lightiing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'VisualEffects',
  Writing = 'Writing',
}
