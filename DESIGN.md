---
version: "alpha"
name: "Technical Field Notes"
description: "An editorial personal site for code, technical judgment, and long-form thinking."
colors:
  primary: "#20201D"
  secondary: "#6F6B62"
  accent: "#DF4E32"
  paper: "#F4EFE5"
  paper-soft: "#EBE4D7"
typography:
  display-xl:
    fontFamily: "Newsreader Variable, Noto Serif SC, Source Han Serif SC, Songti SC, serif"
    fontSize: 7.25rem
    fontWeight: 430
    lineHeight: 0.91
    letterSpacing: -0.06em
    fontFeature: "kern, liga"
  display-lg:
    fontFamily: "Newsreader Variable, Noto Serif SC, Source Han Serif SC, Songti SC, serif"
    fontSize: 5.5rem
    fontWeight: 440
    lineHeight: 0.94
    letterSpacing: -0.04em
    fontFeature: "kern, liga"
  body-lg:
    fontFamily: "Public Sans Variable, PingFang SC, Noto Sans CJK SC, Microsoft YaHei, sans-serif"
    fontSize: 1.375rem
    fontWeight: 390
    lineHeight: 1.68
    letterSpacing: -0.012em
  body-md:
    fontFamily: "Public Sans Variable, PingFang SC, Noto Sans CJK SC, Microsoft YaHei, sans-serif"
    fontSize: 1rem
    fontWeight: 390
    lineHeight: 1.58
    letterSpacing: -0.006em
  label-sm:
    fontFamily: "Space Grotesk Variable, PingFang SC, Noto Sans CJK SC, sans-serif"
    fontSize: 0.6875rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.15em
rounded:
  pill: 999px
  avatar: 999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
components:
  site-surface:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
  subtle-surface:
    backgroundColor: "{colors.paper-soft}"
    textColor: "{colors.primary}"
  wordmark:
    typography: "{typography.label-sm}"
    textColor: "{colors.primary}"
  hero-title:
    typography: "{typography.display-xl}"
    textColor: "{colors.primary}"
  section-title:
    typography: "{typography.display-lg}"
    textColor: "{colors.primary}"
  body-copy:
    typography: "{typography.body-md}"
    textColor: "{colors.primary}"
  label:
    typography: "{typography.label-sm}"
    textColor: "{colors.accent}"
---

## Overview

The site combines editorial scale with technical precision. It should feel like a field notebook with a strong typesetting system, not a generic software dashboard. Type roles are intentionally limited so new pages inherit a stable hierarchy.

## Colors

Warm paper and deep ink carry the reading experience. Red-orange is reserved for labels and interaction cues. Dark mode changes the palette, not the typographic hierarchy.

## Typography

Three type roles are authoritative:

- **Display — Newsreader Variable:** English display headings and editorial titles. Chinese glyphs fall back to Noto Serif SC, Source Han Serif SC, or the platform Songti. Use optical sizing and moderate weights; never simulate bold display text.
- **Body — Public Sans Variable:** paragraphs, navigation, descriptions, and controls. Chinese glyphs fall back to PingFang SC, Noto Sans CJK SC, or Microsoft YaHei.
- **Label — Space Grotesk Variable:** short metadata, section indices, dates, and uppercase technical labels. Do not use it for paragraphs.

Self-host the Latin variable fonts with the build. Do not depend on Google Fonts or another runtime font CDN. Chinese fonts remain system fallbacks to avoid shipping multi-megabyte CJK files.

Responsive display sizes may use `clamp()`, but their desktop endpoints, weights, line heights, and letter spacing must remain aligned with the tokens above. Chinese display text may use a line height of `1` and slightly less negative tracking when required for legibility.

## Layout

Typography follows the existing editorial grid. Large headings establish hierarchy; body copy stays narrow enough to read comfortably. Metadata remains visually secondary and uses tabular numbers where dates or indices align.

## Shapes

Pills are reserved for compact controls and language badges. The fox portrait is the only circular identity anchor.

## Components

All headings, labels, body copy, and controls must reference one of the three font roles. Code snippets are the sole exception and use the platform monospace stack.

## Do's and Don'ts

- Do keep English and Chinese hierarchy equivalent even when their glyph families differ.
- Do use variable weights instead of jumping from regular to bold.
- Do preserve generous line height for long-form text.
- Don't introduce a fourth decorative font.
- Don't use monospaced text merely to imply technical credibility.
- Don't fetch fonts from a runtime CDN.
