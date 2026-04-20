<!-- Source: https://m3.material.io/components/button-groups/specs -->
<!-- Scraped: 2026-04-20T18:05:28.901Z -->

## Variants

- Standard button group
- Connected button group
| Variant | M3 | M3 Expressive |
| Standard button group | -- | Available |
| Connected button group | Available as 
    
    segmented button
    
      Segmented buttons help people select options, switch views, or sort elements. Note: They're deprecated in the expressive update. Use a nav rail instead.
    
      
            More on segmented buttons | Available |

## Configurations

Configurations for both variants of button groups:
- Extra small
- Small
- Medium
- Large
- Extra large
- Single-select and multi-select
- Round and square
| Category | Configuration | M3 | M3 Expressive |
| Size | XS, S, M, L, XL | -- | Available |
| Default shape | Round, square | -- | Available |
| Selection | Single-select, multi-select, selection-required | Available as 
    
    segmented button
    
      Segmented buttons help people select options, switch views, or sort elements. Note: They're deprecated in the expressive update. Use a nav rail instead.
    
      
            More on segmented buttons | Available |

## Tokens & specs

Standard and connected button group tokens are organized by size. Select the variant and size from the token set menu. Go to the button and icon button pages to view their tokens. Learn about design tokens
Token
Value
Button group xsmall container height
md.comp.button-group.standard.xsmall.container.height
32dp
Button group xsmall between space
md.comp.button-group.standard.xsmall.between-space
18dp
Pressed

## Anatomy

Button groups are invisible containers that add padding between buttons and modify button shape. They don’t contain any buttons by default.
- Container

### Common layouts

Mix and match buttons and icon buttons for different scenarios.
- Label buttons
- Label buttons and icon buttons
- Extra small icon buttons
- Large icon buttons

### Color

Button groups have no color properties. They can use the default button or toggle button color styles, like filled, tonal, and outlined. Avoid using standard icon buttons or text buttons, as they have no container treatment.
- Filled
- Tonal
- Outlined
- Elevated

## Selection & activation

Standard button groups add interaction between adjacent buttons when a button is selected or activated.This interaction changes the width, shape, and padding of the selected or activated button, which adjusts the width of buttons directly next to it.
A selected button changes shape, and briefly changes the width of itself and adjacent buttons
Connected button groups don’t add any interaction between buttons when selected or activated.
They only affect the shape of the button being selected or activated.
A selected button changes shape without affecting adjacent buttons

## States

When a button is pressed, standard button groups modify the width and shape of that button and adjacent buttons.
- Enabled
- Disabled
- Hovered
- Focused
- Pressed
When a toggle button is selected in a standard button group, its shape should change between square and round. The color should change according to the button specs.
Connected button groups have different shape changes than standard button groups. Selecting a button does not affect adjacent buttons.
Connected button group unselected states:
Connected button group selected states:

## Measurements

Standard groups apply padding between all buttons. The amount of padding changes based on button size to ensure a minimum accessible target size of 48dp. More details on padding: Button specs, icon button specs
Standard button group inner padding:
- XS: 18dp
- S: 12dp
- M: 8dp
- L: 8dp
- XL: 8dp
For all connected button groups, use 2dp padding. This provides visual consistency at scale.
Round connected button group inner padding is 2dp at every size. The outer shape is fully round, and the inner shape remains square with the following corner sizes:
- XS: 4dp
- S: 8dp
- L: 16dp
- XL: 20dp
Square connected button group inner padding is 2dp at every size. The outer shape has the following corner sizes:

### Minimum widths

Extra small and small connected button groups have 48dp target areas and a minimum width of 48dp.

## Density

Button groups adapt to density of the buttons inside. More on density
Button groups adapt to the height of the buttons inside, including when density is applied
