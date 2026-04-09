import { useState, useEffect } from "react"

const NPM_REGISTRY_URL =
  "https://registry.npmjs.org/@shan8851/fuel-cli/latest"

export const useNpmVersion = (): string | null => {
  const [version, setVersion] = useState<string | null>(null)

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(NPM_REGISTRY_URL)
        const data: unknown = await response.json()
        if (
          typeof data === "object" &&
          data !== null &&
          "version" in data &&
          typeof (data as { version: unknown }).version === "string"
        ) {
          setVersion((data as { version: string }).version)
        }
      } catch {
        // silently fail — badge just won't show
      }
    }
    fetchVersion()
  }, [])

  return version
}
