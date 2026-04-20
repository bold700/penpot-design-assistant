<!-- Source: https://m3.material.io/components/carousel/specs -->
<!-- Scraped: 2026-04-20T18:06:59.646Z -->

- Container
- Large carousel item
- Medium carousel item
- Small carousel item

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.
Token
Enabled
Hover
Focus
Pressed (ripple)
Disabled

## Color

Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens
Carousel color roles used for light and dark schemes:
- Surface

## States

States
    
      States show the interaction status of a component or UI element.
    
      
            More on states
          
   are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states
- Enabled
- Hovered
- Focused
- Pressed
- Disabled

## Carousel item dynamic widths

All kinds of carousel items dynamically adapt to the width of the container.
Large items have a customizable maximum width that's used to optimally fit carousel items into the available space.
Small carousel items have a minimum width of 40dp and a maximum width of 56dp.
Items change size as they move through the carousel layout.
Small carousel items have a minimum and maximum width

## Multi-browse

The 
    
    multi-browse layout
    
      The multi-browse carousel layout shows at least one large, medium, and small carousel item at a time.
    
      
   shows at least one large, medium, and small carousel item.

### Measurements

Multi-browse carousels have padding on both sides of the container
| Attribute | Value |
| Alignment | Vertically centered |
| Leading/trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic, or user-set |
| Medium item width | Dynamic |
| Small item width | 40–56dp, dynamic |
| Item corner radius | 28dp |

## Uncontained

The 
    
    uncontained
    
      The uncontained carousel layout show items that scroll to the edge of the container.
    
      
   layout shows items that scroll to the edge of the container.
Uncontained carousel items bleed over the padding on each side when scrolling
| Attribute | Value |
| Alignment | Vertically centered |
| Leading padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Item corner radius | 28dp |

## Uncontained mutli-aspect ratio

The uncontained multi-aspect ratio layout shows carousel items of various widths.
- Carousel item (16:9)
- Carousel item (9:16)
- Carousel item (1:1)
- Carousel item (3:4)
Uncontained multi-aspect ratio carousels only have leading padding, with 8dp of padding between items.
| Attribute | Value |
| Alignment | Vertically centered |
| Leading padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Item corner radius | 28dp |

## Hero

The 
    
    hero layout
    
      The hero carousel layout shows at least one large and one small item at a time.
    
      
   shows at least one large item and one small item.
Hero carousels have padding on both sides of the container
| Attribute | Value |
| Alignment | Vertically centered |
| Leading/Trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic |
| Small item width | 40-56dp, dynamic |
| Item corner radius | 28dp |

## Center-aligned hero

The center-aligned hero layout shows at least one large item and two small items.
Center-aligned hero carousels have padding on both sides of the container
| Attribute | Value |
| Alignment | Vertically centered |
| Leading/Trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic |
| Small item width | 40-56dp, dynamic |
| Item corner radius | 28dp |

## Full-screen

The 
    
    full-screen layout
    
      The full-screen carousel layout shows one edge-to-edge large item at a time and scrolls vertically.
    
      
   shows one edge-to-edge large item.
Full-screen carousels fill the window edge-to-edge
| Attribute | Value |
| Alignment | Centered |
| Leading/Trailing padding | 0dp |
| Top/bottom padding | 0dp |
| Padding between elements | 16dp |
