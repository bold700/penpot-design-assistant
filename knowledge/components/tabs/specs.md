<!-- Source: https://m3.material.io/components/tabs/specs -->
<!-- Scraped: 2026-04-20T08:16:29.507Z -->

link
Copy link
Link copied

## Tokens and specs

Select a component variant below to see its elements, attributes, tokens, and their values.
link
Copy link
Link copied
Token
Enabled
Hovered
Focused
Pressed (ripple)
link
Copy link
Link copied

## Primary tabs

link
Copy link
Link copied
- Container
- Badge (optional)
- Icon (optional)
- Label
- Divider
- Active indicator
link
Copy link
Link copied

### Primary tabs color

Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens
link
Copy link
Link copied
Primary tab color roles used for light and dark schemes:
- Surface
- Primary
- On surface variant
- Outline variant
link
Copy link
Link copied

### Primary tabs states

link
Copy link
Link copied
- Enabled (active destination)
- Hover (active destination)
- Focused (active destination)
- Pressed (active destination)
- Enabled (inactive destination)
- Hover (inactive destination)
- Focused (inactive destination)
- Pressed (inactive destination)
link
Copy link
Link copied

## Secondary tabs

link
Copy link
Link copied
link
Copy link
Link copied

### Secondary tabs color

link
Copy link
Link copied
Secondary tab color roles used for light and dark schemes:
- On surface
link
Copy link
Link copied

### Secondary tabs states

link
Copy link
Link copied
- Pressed  (active destination)
link
Copy link
Link copied

## Measurements

link
Copy link
Link copied
Tabs are divided into equal sections, with labels and icons positioned vertically centered. The divider is included in the height, placed inside the container.
link
Copy link
Link copied
Primary tab active indicators are inset 2dp on each side, have a fully rounded corner radius, and a minimum length of 24dp.
link
Copy link
Link copied
| Attribute | Value |
| Container height (label text only) | 48dp |
| Container height (icon and label text) | 64dp |
| Icon size | 24dp |
| Divider height | 1dp |
| Primary active indicator height | 3dp |
| Secondary active indicator height | 2dp |
| Active indicator shape | 3, 3, 0, 0 |
| Active indicator minimum length | 24dp |
| Padding between inline icon and text | 8dp |
| Padding between inline text and badge | 4dp |
| Overlap of badge on stacked icon | 6dp |
