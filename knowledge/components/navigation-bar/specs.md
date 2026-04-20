<!-- Source: https://m3.material.io/components/navigation-bar/specs -->
<!-- Scraped: 2026-04-20T08:10:28.848Z -->

link
Copy link
Link copied

## Variants

link
Copy link
Link copied
- Flexible navigation bar
link
Copy link
Link copied

### Baseline variants

link
Copy link
Link copied
The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows. View baseline nav bar specs
link
Copy link
Link copied
- Navigation bar (not recommended)
link
Copy link
Link copied
| Variant | M3 | M3 Expressive |
| Flexible navigation bar | -- | Available |
| Navigation bar | Available | Not recommended.Use flexible navigation bar. |
link
Copy link
Link copied

## Configurations

link
Copy link
Link copied
In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.
link
Copy link
Link copied
- Vertical navigation items
- Horizontal navigation items
link
Copy link
Link copied
| Category | Configuration | M3 | M3 Expressive |
| Navigation item layout | Vertical (default) | Available | Available |
| Horizontal | -- | Available |
link
Copy link
Link copied

## Tokens & specs

link
Copy link
Link copied
Use the table's menu to switch between token sets for the navigation bar and the nav items. Learn about design tokens
link
Copy link
Link copied
Token
Value
Color
Nav item
Container
link
Copy link
Link copied

## Anatomy

link
Copy link
Link copied
- Container
- Icon
- Label text
- Active indicator
- Small badge (optional)
- Large badge (optional)
- Large badge label
link
Copy link
Link copied

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied
Navigation bar color roles used for light and dark schemes:
- Surface container
- On-secondary container
- Secondary
- Secondary container
- On-surface variant
link
Copy link
Link copied
For badge color roles, go to badge specs.
link
Copy link
Link copied

## States

States are visual representations used to communicate the status of a component or an interactive element.
link
Copy link
Link copied
- Enabled
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
The navigation bar stretches the full window width.
link
Copy link
Link copied
Navigation bar padding and size measurements
link
Copy link
Link copied
Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.
link
Copy link
Link copied
Navigation bar width and margins for compact and medium windows.
- Vertical navigation item
- Margin from window edge
- Horizontal navigation item
link
Copy link
Link copied
link
Copy link
Link copied

## Baseline navigation bar

link
Copy link
Link copied
- Small badge
- Large badge
link
Copy link
Link copied
link
Copy link
Link copied
These tokens are for the baseline navigation bar.
link
Copy link
Link copied
Token
link
Copy link
Link copied
Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied
- Surface
- On secondary container
- On surface
- On surface variant
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
Navigation bar states:
- Hovered
- Focused
- Pressed
link
Copy link
Link copied
link
Copy link
Link copied
link
Copy link
Link copied
Navigation bar target size and margins
link
Copy link
Link copied
link
Copy link
Link copied
- 3 destinations
- 4 destinations
- 5 destinations
