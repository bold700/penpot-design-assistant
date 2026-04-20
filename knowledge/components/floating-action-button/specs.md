<!-- Source: https://m3.material.io/components/floating-action-button/specs -->
<!-- Scraped: 2026-04-20T18:10:53.561Z -->

## Variants

- FAB
- Medium FAB
- Large FAB

### Baseline variants

The small FAB is still available, but no longer recommended. Jump to baseline specs
1. Small FAB
| Variant | M3 | M3 Expressive |
| FAB | Available | Available |
| Medium FAB | -- | Available |
| Large FAB | Available | Available |
| Small FAB | Available | Not recommended. Use a larger size. |

## Configurations

In the expressive update, the primary, secondary, and tertiary set colors were renamed to primary container, secondary container, and tertiary container to match the actual color roles used. New primary, secondary, and tertiary color styles were created to match the corresponding color roles. View details in the color styles section
| Category | Configuration | M3 | M3 Expressive |
| Color | Primary container, secondary container, tertiary container | Available as primary, secondary, tertiary | Available |
| Primary. secondary, tertiary | -- | Available |

## Tokens & specs

Use the table's menu to select a token set. FAB tokens are organized by size and color. Learn more about design tokens
Token
Value
FAB medium container height
md.comp.fab.medium.container.height
80dp
FAB medium container width
md.comp.fab.medium.container.width
80dp
FAB medium icon size
md.comp.fab.medium.icon.size
28dp
FAB medium container shape
md.comp.fab.medium.container.shape

## Anatomy

1. Container
2. Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens

### Color styles

FABs can use several combinations of color and on-color styles, such as primary and on-primary. The following color mappings provide the same legibility and functionality, so the color mapping you use depends on style alone.
- Primary container & On primary container (default)
- Secondary container & On secondary container
- Tertiary container & On tertiary container
- Primary & On primary
- Secondary & On secondary
- Tertiary & On tertiary

### Baseline color styles

Surface FAB color styles are still available, but no longer recommended.
- Surface FABs

## States

States are visual representations used to communicate the status of a component or interactive element.When using a non-default color mapping for FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for the primary color style should be md.sys.color.primary.
- Enabled
- Hovered (8% state layer) - elevation 4
- Focused (10% state layer)
- Pressed (10% state layer)

## Measurements

FAB size measurements
FAB padding measurements
Medium FAB size measurements
Medium FAB padding measurements
Large FAB size measurements
Large FAB padding measurements

## Baseline tokens & specs

Use the table's menu to select a token set. This only includes baseline tokens, including small and surface FABs. It doesn't include large or regular FABs, since those are still currently used.
