export type TerminalLine = {
  readonly type: "prompt" | "output" | "blank"
  readonly text: string
}

export const HERO_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'fuel near "SE1 9SG" --fuel E10 --sort price --limit 3' },
  { type: "blank", text: "" },
  { type: "output", text: "Nearest E10 stations within 5mi of SE1 9SG" },
  { type: "blank", text: "" },
  { type: "output", text: "  Tesco Waterloo Express   134.9p   0.8mi   ● fresh" },
  { type: "output", text: "  Sainsbury's Waterloo     135.9p   1.1mi   ● fresh" },
  { type: "output", text: "  BP Waterloo              142.9p   0.4mi   ◐ aging" },
  { type: "blank", text: "" },
  { type: "output", text: "  ⚠ Most prices are stale or unknown. Data may be delayed." },
]

export const NEAR_SORT_DISTANCE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'fuel near "51.501,-0.141" --fuel B7_STANDARD --radius 8mi' },
  { type: "blank", text: "" },
  { type: "output", text: "Nearest B7_STANDARD stations within 8mi of 51.501,-0.141" },
  { type: "blank", text: "" },
  { type: "output", text: "  Tesco Waterloo Express   140.9p   0.8mi   ● fresh" },
  { type: "output", text: "  Shell Waterloo           143.9p   1.0mi   ● fresh" },
  { type: "output", text: "  Sainsbury's Waterloo     141.9p   1.1mi   ● fresh" },
  { type: "output", text: "  BP Waterloo              144.9p   1.2mi   ◐ aging" },
  { type: "output", text: "  Esso Southwark           146.9p   1.8mi   ◐ aging" },
]

export const STATION_DETAIL: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'fuel station "tesco watford"' },
  { type: "blank", text: "" },
  { type: "output", text: "Tesco Watford Extra" },
  { type: "output", text: "  24h Colne Valley Rd, Watford WD23 9QJ" },
  { type: "blank", text: "" },
  { type: "output", text: "  E10  134.9p  ● fresh (12 min ago)" },
  { type: "output", text: "  E5   139.9p  ● fresh (12 min ago)" },
  { type: "output", text: "  B7   140.9p  ● fresh (12 min ago)" },
  { type: "blank", text: "" },
  { type: "output", text: "  Amenities: Car wash, ATM, Pay at pump, Shop" },
  { type: "output", text: "  Open: 24 hours" },
]

export const PIPED_JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'fuel near "SE1 9SG" --fuel E10 | jq .data.quality' },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "advisories": [],' },
  { type: "output", text: '  "excludedLikelyTestStations": 0,' },
  { type: "output", text: '  "freshnessCounts": {' },
  { type: "output", text: '    "fresh": 3,' },
  { type: "output", text: '    "aging": 2,' },
  { type: "output", text: '    "stale": 0,' },
  { type: "output", text: '    "unknown": 0' },
  { type: "output", text: "  }" },
  { type: "output", text: "}" },
]

export const AGENT_JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'fuel near "SE1 9SG" --fuel E10 --json' },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "ok": true,' },
  { type: "output", text: '  "schemaVersion": "1",' },
  { type: "output", text: '  "command": "near",' },
  { type: "output", text: '  "requestedAt": "2026-04-09T13:45:15.016Z",' },
  { type: "output", text: '  "data": {' },
  { type: "output", text: '    "input": { "fuelType": "E10", "radiusMiles": 5 },' },
  { type: "output", text: '    "quality": { "freshnessCounts": { ... } },' },
  { type: "output", text: '    "stations": [' },
  { type: "output", text: '      { "tradingName": "Tesco Waterloo Express",' },
  { type: "output", text: '        "selectedPricePencePerLitre": 134.9,' },
  { type: "output", text: '        "distanceMiles": 0.8 }' },
  { type: "output", text: "    ]" },
  { type: "output", text: "  }" },
  { type: "output", text: "}" },
]

export const JSON_ERROR_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: "fuel near --fuel E10 --radius notanumber" },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "ok": false,' },
  { type: "output", text: '  "schemaVersion": "1",' },
  { type: "output", text: '  "command": "near",' },
  { type: "output", text: '  "error": {' },
  { type: "output", text: '    "code": "INVALID_INPUT",' },
  { type: "output", text: '    "message": "Expected a number.",' },
  { type: "output", text: '    "retryable": false' },
  { type: "output", text: "  }" },
  { type: "output", text: "}" },
]
