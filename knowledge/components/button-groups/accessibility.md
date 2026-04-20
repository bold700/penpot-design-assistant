<!-- Source: https://m3.material.io/components/button-groups/accessibility -->
<!-- Scraped: 2026-04-20T08:03:06.833Z -->

link
Copy link
Link copied

## Use cases

link
Copy link
Link copied
People should be able to do the following with assistive technology:
- Navigate to and interact with each button in the group
- Identify when buttons are selected
link
Copy link
Link copied

## Interaction & style

Each button in a group should have a minimum 48x48dp target. Extra small and small button groups have larger inner padding to ensure accessible targets. Avoid reducing the padding in these sizes.
- Extra small button group
- Small button group
link
Copy link
Link copied

### Initial focus

The button group container is not a focusable element. Initial focus should land on the first button in the group and then move to each button.
Initial focus should land on the first button, not on the container
link
Copy link
Link copied
Use Tab to navigate through each item in the group, and Space or Enter to select buttons.
- Selected button
link
Copy link
Link copied

## Keyboard navigation

| Keys | Actions |
| Tab | Navigates to the next button |
| Space or Enter | Activates the focused button |
link
Copy link
Link copied

## Labeling elements

The button group container does not need to be labeled. Label each button according to the 
    
    button
    
      Buttons let people take action and make choices with one tap.
    
      
            More on buttons
          
   and 
    
    icon button
    
      Icon buttons help people take minor actions with one tap.
    
      
            More on icon buttons
          
   accessibility guidance.
Label each button within the button group
