<!-- Source: https://m3.material.io/components/side-sheets/accessibility -->
<!-- Scraped: 2026-04-20T08:14:07.690Z -->

link
Copy link
Link copied

## Use cases

link
Copy link
Link copied
People should be able to dismiss the side sheet using assistive technology.
link
Copy link
Link copied

## Interaction & style

link
Copy link
Link copied
Material requires that a close affordance, such as a close 
    
    icon button
    
      Icon buttons help people take minor actions with one tap.
    
      
            More on icon buttons
          
  , is always present within a side sheet.
check
A close icon button makes the side sheet easy to dismiss
close
Don’t
Without a close icon button, people can’t predict the opening and closing flow of side sheets, or know if the sheet is transient or permanent
link
Copy link
Link copied

## Initial focus

link
Copy link
Link copied
Actions within a side sheet can be 
    
    focused
    
      A focused state communicates when a user has highlighted an element, using an input method such as a keyboard or voice.
    
      
            More on focused state
          
   by tab order using a keyboard or switch control.
Visible focus shown on the available actions within a side sheet:
- Headline
- Close
- Cancel
- Save
link
Copy link
Link copied

## Keyboard navigation

link
Copy link
Link copied
| Keys | Actions |
| Tab | Focus lands on (non-disabled) icon button |
| Space or Enter | Activates the (non-disabled) icon button |
link
Copy link
Link copied

## Labeling

link
Copy link
Link copied
The accessibility role for a side sheet is Dialog.
The role for side sheets is Dialog
