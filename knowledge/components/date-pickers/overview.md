<!-- Source: https://m3.material.io/components/date-pickers/overview -->
<!-- Scraped: 2026-04-20T08:05:42.726Z -->

link
Copy link
Link copied
- Date pickers can display past, present, or future dates
- Three variants: 
    
    docked
    
      Docked date pickers open from an onscreen input similar to a text field. They're often used within forms.
    
      
            More on docked date pickers
          
  , 
    
    modal
    
      Modal date pickers extend full-screen. They're often used for selecting a date range.
    
      
            More on modal date pickers
          
  , 
    
    modal input
    
      Modal date inputs allow the manual entry of dates using the numbers on a keyboard. They're often used in compact layouts.
    
      
            More on modal date inputs
- Clearly indicate important dates, such as current and selected days
- Follow common patterns, like a calendar view
link
Copy link
Link copied
- Docked date picker
- Modal date picker
- Modal date input
link
Copy link
Link copied

## Availability & resources

link
Copy link
Link copied
| Type | Resource | Status |
| Design |
| Design Kit (Figma) | Available |
| Implementation |
| Flutter | Available |
| Jetpack Compose | Available |
| MDC-Android | Available |
| Web | Unavailable |
link
Copy link
Link copied

## Differences from M2

link
Copy link
Link copied
- Typography and spacing: Titles and labels are larger and have increased spacing to accommodate 48dp target size
- Color: New color mappings and compatibility with 
    
    dynamic color
    
      Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
    
      
            More on dynamic color
- Variants: The three variants of date pickers have been renamed to not be device-dependent. The former desktop date picker is now known as the 
    
    docked date picker
    
      Docked date pickers open from an onscreen input similar to a text field. They're often used within forms.
    
      
            More on docked date picker
          
  . The former mobile date picker and date input are now known as 
    
    modal date picker
    
      Modal date pickers extend full-screen. They're often used for selecting a date range.
    
      
            More on modal date picker
          
   and 
    
    modal date input
    
      Modal date inputs allow the manual entry of dates using the numbers on a keyboard. They're often used in compact layouts.
    
      
            More on modal date input
          
   to reinforce that the user must take an action.
link
Copy link
Link copied
M2: Date pickers had a drop shadow and different color mappings
M3: Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color
