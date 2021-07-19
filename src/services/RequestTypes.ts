export interface Main {
  abilities?:              Ability[];
  baseExperience?:         number;
  forms?:                  Species[];
  gameIndices?:            GameIndex[];
  height?:                 number;
  heldItems?:              HeldItem[];
  id?:                     number;
  isDefault?:              boolean;
  locationAreaEncounters?: string;
  moves?:                  Move[];
  name?:                   string;
  order?:                  number;
  pastTypes?:              any[];
  species?:                Species;
  sprites?:                Sprites;
  stats?:                  Stat[];
  types?:                  Type[];
  weight?:                 number;
}

export interface Ability {
  ability?:  Species;
  isHidden?: boolean;
  slot?:     number;
}

export interface Species {
  name?: string;
  url?:  string;
}

export interface GameIndex {
  gameIndex?: number;
  version?:   Species;
}

export interface HeldItem {
  item?:           Species;
  versionDetails?: VersionDetail[];
}

export interface VersionDetail {
  rarity?:  number;
  version?: Species;
}

export interface Move {
  move?:                Species;
  versionGroupDetails?: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  levelLearnedAt?:  number;
  moveLearnMethod?: Species;
  versionGroup?:    Species;
}

export interface GenerationV {
  blackWhite?: Sprites;
}

export interface GenerationIv {
  diamondPearl?:        Sprites;
  heartgoldSoulsilver?: Sprites;
  platinum?:            Sprites;
}

export interface Versions {
  generationI?:    GenerationI;
  generationIi?:   GenerationIi;
  generationIii?:  GenerationIii;
  generationIv?:   GenerationIv;
  generationV?:    GenerationV;
  generationVi?:   { [key: string]: GenerationVi };
  generationVii?:  GenerationVii;
  generationViii?: GenerationViii;
}

export interface Sprites {
  backDefault?:      string;
  backFemale?:       null;
  backShiny?:        string;
  backShinyFemale?:  null;
  frontDefault?:     string;
  frontFemale?:      null;
  frontShiny?:       string;
  frontShinyFemale?: null;
  other?:            Other;
  versions?:         Versions;
  animated?:         Sprites;
}

export interface GenerationI {
  redBlue?: RedBlue;
  yellow?:  RedBlue;
}

export interface RedBlue {
  backDefault?:  string;
  backGray?:     string;
  frontDefault?: string;
  frontGray?:    string;
}

export interface GenerationIi {
  crystal?: Crystal;
  gold?:    Crystal;
  silver?:  Crystal;
}

export interface Crystal {
  backDefault?:  string;
  backShiny?:    string;
  frontDefault?: string;
  frontShiny?:   string;
}

export interface GenerationIii {
  emerald?:          Emerald;
  fireredLeafgreen?: Crystal;
  rubySapphire?:     Crystal;
}

export interface Emerald {
  frontDefault?: string;
  frontShiny?:   string;
}

export interface GenerationVi {
  frontDefault?:     string;
  frontFemale?:      null;
  frontShiny?:       string;
  frontShinyFemale?: null;
}

export interface GenerationVii {
  icons?:             DreamWorld;
  ultraSunUltraMoon?: GenerationVi;
}

export interface DreamWorld {
  frontDefault?: string;
  frontFemale?:  null;
}

export interface GenerationViii {
  icons?: DreamWorld;
}

export interface Other {
  dreamWorld?:      DreamWorld;
  officialArtwork?: OfficialArtwork;
}

export interface OfficialArtwork {
  frontDefault?: string;
}

export interface Stat {
  baseStat?: number;
  effort?:   number;
  stat?:     Species;
}

export interface Type {
  slot?: number;
  type?: Species;
}
