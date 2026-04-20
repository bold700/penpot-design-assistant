<!-- Source: https://m3.material.io/components/extended-fab/specs -->
<!-- Scraped: 2026-04-20T18:09:54.289Z -->

## Variants

- Small extended FAB
- Medium extended FAB
- Large extended FAB

### Baseline variants

The baseline extended FAB is no longer recommended in the M3 expressive update. Use a small extended FAB; the type style was updated from label large to title medium, and the inner padding was reduced. View baseline extended FAB specs
- Extended FAB
| Variant | M3 | M3 Expressive |
| Small extended FAB | -- | Available |
| Medium extended FAB | -- | Available |
| Large extended FAB | -- | Available |
| Extended FAB (baseline) | Available | Not recommended.Use small extended FAB. |

## Tokens & specs

Use the table's menu to select a token set. Extended FAB tokens are organized by size and color.
Token
Value
Extended FAB small container height
md.comp.extended-fab.small.container.height
56dp
Extended FAB small label text
md.comp.extended-fab.small.label-text
Aa
Extended FAB small icon size
md.comp.extended-fab.small.icon.size
24dp
Extended FAB small container shape
md.comp.extended-fab.small.container.shape
Extended FAB small leading space
md.comp.extended-fab.small.leading-space
16dp
Extended FAB small icon label space
md.comp.extended-fab.small.icon-label-space
8dp
Extended FAB small trailing space
md.comp.extended-fab.small.trailing-space
16dp

## Anatomy

- Container
- Label text
- Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens

### Color styles

Extended FABs can use several combinations of color and on color styles, such as primary and on primary. The following color mappings provide the same level of contrast and functionality, so choose a color mapping based on visual preference.
Extended FAB color roles used for light and dark schemes:
- Primary container & on primary container (default)
- Secondary container & on secondary container
- Tertiary container & on tertiary container
- Primary & on primary
- Secondary & on secondary
- Tertiary & on tertiary

### Baseline color styles

Extended FABs should no longer use surface color styles. They’re still available, but not recommended.
- Surface container FAB

## States

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states
When using a non-default color mapping for extended FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for primary mapping should be md.sys.color.primary.
- Enabled
- Hovered - elevation 4
- Focused
- Pressed

## Measurements

Size and padding measurements of the small, medium, and large extended FABs
Extended FABs should have margins of 16dp

## Baseline extended FAB


### Baseline configurations

With icon
Without icon

### Baseline tokens

Use the table's menu to select a token set. The baseline extended FAB token sets are organized by common tokens, then by surface and branded color styles. Other color styles like primary, secondary, and tertiary are still used by the latest extended FABs.
Token

### Baseline colors

- Primary container + shadow
- On primary container

#### Additional color mappings

Extended FABs can use other combinations of container and icon colors. The color mappings below provide the same legibility and functionality as the default, so the color mapping you use depends on style alone.
Extended FABs can use different combinations of container and icon colors

### Baseline states

- Hovered

### Baseline measurements

Extended FABs have a padding of 16dp
Extended FAB height, width, and icon size
| Attribute | Value |
| Container height | 56dp |
| Container width | Dynamic, 80dp min |
| Container shape | 16dp corner radius |
| Icon size | 24dp |
| Padding | 16dp |
