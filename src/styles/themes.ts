import { Colors } from './variables'

export interface Theme {
  background: string
  backgroundSecondary: string

  text: string
  textSecondary: string

  accent: string
}

export const LightTheme: Theme = {
  background: Colors.BackgroundPrimary,
  backgroundSecondary: Colors.BackgroundSecondary,
  text: Colors.TextPrimary,
  textSecondary: Colors.TextSecondary,
  accent: Colors.Accent
}