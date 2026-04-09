import type { LucideIcon } from "lucide-react"
import {
  MapPin,
  Fuel,
  TrendingDown,
  Clock,
  Search,
  ShieldCheck,
} from "lucide-react"

type Command = {
  readonly name: string
  readonly fullCommand: string
  readonly description: string
  readonly icon: LucideIcon
  readonly example: string
}

export const COMMANDS: ReadonlyArray<Command> = [
  {
    name: "Nearby Stations",
    fullCommand: "fuel near <location> --fuel <type>",
    description: "Ranked stations by price, distance, or freshness",
    icon: MapPin,
    example: 'fuel near "SE1 9SG" --fuel E10',
  },
  {
    name: "Station Detail",
    fullCommand: "fuel station <query>",
    description: "Full station info with prices, opening times, amenities",
    icon: Search,
    example: 'fuel station "tesco watford"',
  },
  {
    name: "Sort & Filter",
    fullCommand: "fuel near ... --sort <mode> --radius <n>",
    description: "Sort by best, price, distance, or freshest; custom radius",
    icon: TrendingDown,
    example: 'fuel near "SE1 9SG" --fuel E10 --sort price --radius 8mi',
  },
  {
    name: "Freshness Tracking",
    fullCommand: "quality advisories on every response",
    description: "Fresh, aging, stale, unknown — know when prices were last updated",
    icon: Clock,
    example: "freshnessCounts and advisory warnings in data.quality",
  },
  {
    name: "Fuel Types",
    fullCommand: "E10, E5, B7_STANDARD, B7_PREMIUM, B10, HVO",
    description: "Petrol, diesel, premium, bio — pick the one you need",
    icon: Fuel,
    example: "fuel near ... --fuel B7_STANDARD",
  },
  {
    name: "Data Quality",
    fullCommand: "test station exclusion & quality flags",
    description: "Test/demo forecourts filtered out; stale price warnings built in",
    icon: ShieldCheck,
    example: "excludedLikelyTestStations in quality summary",
  },
] as const
