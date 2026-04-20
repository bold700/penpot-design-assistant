<!-- Source: https://m3.material.io/components/checkbox/accessibility -->
<!-- Scraped: 2026-04-20T08:05:02.926Z -->

link
Copy link
Link copied

## Use cases

link
Copy link
Link copied
People should be able to use assistive technology to:
- Navigate to a checkbox
- Toggle the checkbox on and off
- Get appropriate feedback based on input type documented under Interaction & style
link
Copy link
Link copied
link
Copy link
Link copied

## Interaction & style

link
Copy link
Link copied
Users should be able to select either the text label or the checkbox to select an option.
A checkbox selected via the text label
link
Copy link
Link copied
The parent checkbox has three states: selected, unselected, and indeterminate.
Checkboxes can be selected or unselected regardless of the state of the other checkboxes in a group.
If some, but not all, child checkboxes are checked, the parent checkbox becomes indeterminate. Selecting an indeterminate parent checkbox will check all of its child checkboxes.
An indeterminate selection indicating that at least one checkbox is selected within a group
link
Copy link
Link copied

## Avoid applying density by default

link
Copy link
Link copied
Don't apply density to checkboxes by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.
To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.
link
Copy link
Link copied

## Keyboard navigation

link
Copy link
Link copied
| Keys | Actions |
| Tab | Moves focus to 
    
    enabled
    
      An enabled state communicates an interactive component or element.
    
      
            More on enabled state
          
   chip or chip group |
| Space or Enter | Activates, selects, or deselects the focused chip |
| Backspace or Delete | Removes currently 
    
    focused
    
      A focused state communicates when a user has highlighted an element, using an input method such as a keyboard or voice.
    
      
            More on focused state
          
   input chip |
| Arrows | Moves focus between chips |
link
Copy link
Link copied

## Labeling elements

link
Copy link
Link copied
If the UI text is correctly linked to the checkbox, assistive tech (such as a screen reader) will read the UI text followed by the component’s role.
The 
    
    accessibility
    
      Accessible design makes products usable for people with all kinds of abilities.
    
      
            More on accessibility
          
   label for an individual checkbox is typically the same as its adjacent text label.
The accessibility label clearly states the text label of the checkbox
