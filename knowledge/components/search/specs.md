<!-- Source: https://m3.material.io/components/search/specs -->
<!-- Scraped: 2026-04-20T18:15:48.073Z -->

## Variants

When a person executes a search, results appear in a list below the search bar
| Variant | M3 | M3 Expressive |
| Search | Available | Available |

## Configurations


### Style

Search comes in two styles:
- Contained: Has an 
    
    expressive
    
      M3 Expressive is a major update to Material 3, adding visually stunning features, components, and variants, plus updates to the shape, motion, and typography systems.
    
      
            More on M3 expressive
          
   look and feel. It uses a filled container to separate a search bar from a 
    
    list
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
          
   of suggestions or results
- Divided (
    
    baseline
    
      Baseline variants and styles are the original M3 component designs. They may not have the latest features introduced in M3 Expressive, like updated motion, shapes, type, and styles. 
    
      
  ): Doesn’t have the latest visual style, motion, or flexibility
The contained style has a persistent, filled container, expressive motion, and rounded shape
The divided (baseline) style uses a divider to separate the search bar from suggestions and results

### Layout

Search suggestions and results appear in customizable lists, with two layout options: full-screen and docked. More on search layouts
Full-screen layout in the contained style
Docked layout in the contained style
Full-screen layout in the divided style
Docked layout in the divided style
| Category | Configuration | M3 | M3 Expressive |
| Style | Contained | -- | Available |
|  | Divided | Available | Not recommended. Use contained. |
| Layout | Docked, full-screen | Available | Available |

## Tokens & specs

Use the table's menu to select a token set. The search bar set only contains tokens for the unfocused search bar. The search view set contains all other tokens when interacting with search, including all styles and layouts. Learn more about design tokens
Token
Search view container surface tint layer color
md.comp.search-view.container.surface-tint-layer.color
#6750A4
Color
Layout and Text

## Anatomy

Search includes a search bar and a container for suggestions and results. The container is empty by default. Use the 
    
    list
    
      Lists are continuous, vertical indexes of text and images.
    
      
            More on lists
          
   component to add content. In the divided (baseline) style, a divider separates the search bar and results.
- Search bar container
- Leading icon
- Supporting text
- Trailing icon and avatar (optional)
- Input text
- Container for search suggestions or results

### Examples

- With avatar
- With one trailing 
    
    icon button
    
      Icon buttons help people take minor actions with one tap.
    
      
            More on icon buttons
- With two trailing icon buttons
- With trailing icon button and avatar

## Color

Color values are implemented through 
    
    design tokens
    
      Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
    
      
            More on tokens
          
  . For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

### Full-screen layout

Full-screen search color roles used in light and dark themes:
- Surface container low
- On surface variant
- Surface container high
- On surface

### Docked layout

Docked search color roles used in light and dark themes:

## States

States are visual representations used to communicate the status of a component or an interactive element. In focused search, individual elements maintain their own interaction states. Learn more about interaction states

### Search bar

- Enabled
- Hovered
- Focused
- Pressed (ripple)

### Search suggestions & results

Search includes a container for suggestions and results. The container is empty by default. Use the list component to add content.

## Measurements

Unfocused search bar with leading and trailing icon measurements
Unfocused search bar with avatar measurements
In M3 Expressive, the search bar expands when focused. The margins change from 24dp to 12dp.
Unfocused search bar margin measurements
Focused search bar margin measurements
| Element | Attribute | Value |
| Container | Width | Min: 360dp, max: 720dp |
| Height | 56dp |
| Label alignment | Start-aligned |
| Leading padding | Unfocused: 24dp, focused: 12dp |
| Trailing padding | Unfocused: 24dp, focused: 12dp |
| Leading icon and label padding (from tap target) | 4dp |
| Label and trailing icon padding (from tap target) | 4dp |
| Avatar | Size | 30dp |

### Focused search


#### Contained style

Full-screen search padding and size measurements for contained style
Docked search padding and size measurements for contained style
| Element | Attribute | Value |
| Full-screen container | Width | Full width |
| Height | Full height |
| Docked container | Width | Min: 360dp, max: 720dp |
| Height | Min: 240dp, max: 2/3 of screen height |
| Search bar container | Height | 56dp |
| Label alignment | Start-aligned |
| Leading padding | 16dp |
| Trailing padding | 16dp |
| Leading icon and label padding (from tap target) | 4dp |
| Leading icon and label padding (from tap target) | 4dp |

#### Divided style

Full-screen search padding and size measurements for divided style
Docked search padding and size measurements for divided style
