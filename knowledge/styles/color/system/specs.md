<!-- Source: https://m3.material.io/styles/color/system/specs -->
<!-- Scraped: 2026-04-20T18:34:09.331Z -->

The Material color system includes:
- Built-in set of 
    
    accessible color relationships
    
      For example, a dark surface color is algorithmically paired with a light text label color so the UI automatically meets contrast requirements.
    
      
            More on color relationships
- 26+ color roles
    
      Color roles are assigned to UI elements based on emphasis, container type, and relationship with other elements. This ensures proper contrast and usage in any color scheme.
    
      
            More on color roles
          
   mapped to Material Components
- Built-in 
    
    dark theme
    
      A dark theme is a low-light version of a UI that displays mostly dark surfaces.
    
      
   colors
- Static 
    
    baseline color scheme
    
      Baseline is the default static color scheme for Material products. It includes colors for both light and dark themes.
    
      
            More on the baseline color scheme
          
   with default colors assigned to each color role
- Dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
          
   features including 
    
    user-generated
    
      User-generated color dynamically creates a color scheme from a user's wallpaper.
    
      
            More on user-generated color
          
   and 
    
    content-based color
    
      Content-based color dynamically creates a color scheme from in-app content like a music album or book cover.
    
      
            More on content-based color
Learn how the system works
For products migrating from M2 to M3, start by mapping the 
    
    baseline color scheme
    
      Baseline is the default static color scheme for Material products. It includes colors for both light and dark themes.
    
      
            More on the baseline color scheme
          
   to your existing product. It can easily switch to dynamic color when ready.
Learn about the value and function of Material 3’s dynamic color system and how it differs from past color systems
The baseline color scheme doesn't dynamically change
A dynamic color scheme changes the UI's colors based on different inputs, like a wallpaper
Specific colors, such as semantic colors, can be set to not dynamically change
Products with 
    
    dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
          
   can automatically generate and assign colors to each element in the UI.
This provides:
- Personalized UI
- Accessible contrast
- User-controlled contrast
- Automatic dark theme
The UI colors change dynamically

## Resources

| Type | Link | Status |
| Design | Design Kit (Figma) | Available |
| Implementation | MDC-Android | Available |
| Jetpack Compose | Available |
| Flutter | Available |
| Tools | Material Theme Builder | Available |

## What's new

May 2025

### Three levels of contrast

Color roles support three levels of contrast so people can select the one that best suits their vision needs. Contrasts also are tokenized.
Standard contrast
Medium contrast
High contrast
August 2024

### More colorful text and icons

The following color roles are updated in light theme to be more colorful while still having accessible color contrast:
- On primary container
- On secondary container
- On tertiary container
- On error container
Affected components:
- Badges
- Bottom app bar
- ButtonsButtonsExtended FABFABIcon buttonsSegmented buttons
- Chips
- Lists
- Menus
- Navigation bar
- Navigation drawer
- Navigation rail
- Switches
Colors used for text and icons now appear more colorful
Oct 2023

### Reorganized guidelines

Same color system, explained in a new way. Updated sections include:
- How the system works
- Advanced customizations
- Color resources
The guidelines have been reorganized and updated
Feb 2023

### Tone-based surface colors

Tone-based surface color roles have replaced the previous approach of surfaces at +1 to +5 elevation.  The new color roles are not tied to 
    
    elevation
    
      Elevation is the distance between two surfaces on the z-axis.
    
      
            More on elevation
          
   and offer more flexibility and support for color features, such as 
    
    user-controlled contrast
    
      User-controlled contrast is a dynamic color feature enabling users to choose from one of three levels of color contrast: standard, medium, and high.
    
      
            More on user-controlled contrast
          
  .
New tone-based surface colors offer more flexibility and support
Technical changes were made to align the color system with Android SysUI:
- Updated the default light theme surface from tone 99 to tone 98
- Updated the chroma for the neutral palette, increasing it from 4 to 6
- Slightly darkened surface roles in dark theme
Changes in tone and chroma in the default light theme surface

### Additional accent colors

Additional accent colors in the scheme provide more flexibility and choice for color application. In particular, a new set of 
    
    fixed colors
    
      Fixed colors keep the same color value in light and dark themes, as opposed to regular container colors, which change tone between themes, or static colors, which don't change at all.
    
      
            More on fixed colors
          
   for the primary, secondary, and tertiary accent groups provide colors which stay the same across light and dark themes.
Additional accent colors provide more choice for color application
