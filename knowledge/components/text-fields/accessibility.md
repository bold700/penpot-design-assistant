<!-- Source: https://m3.material.io/components/text-fields/accessibility -->
<!-- Scraped: 2026-04-20T18:19:50.556Z -->

## Use cases

User should be able to:
- Navigate to and activate a text field with assistive technology
- Input information into the text field
- Receive and understand supporting text and error messages
- Navigate to and select interactive icons

## Interaction & style

The containers for both 
    
    filled
    
      Filled text fields have more visual emphasis than outlined text fields. They're often used in dialogs and short forms where their style draws more attention.
    
      
   and 
    
    outlined text fields
    
      Outlined text fields have less visual emphasis than filled text fields. They're often used in long forms where their reduced emphasis helps simplify the layout.
    
      
   provide the same functionality. Changes to color and thickness of stroke help provide clear visual cues for interaction.
Filled text fields
Outlined text fields
Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content. In some contexts, outlined text fields can improve the perception of the fields with a 3:1 or greater contrast ratio between the container outline and the background.
check
Make sure the container outline has a minimum contrast of 3:1 to the background
close
Don’t
Don't choose colors that won't pass Material's minimum contrast of 3:1

## Keyboard navigation

| Keys | Actions |
| Tab | Focus lands on (non-disabled) text field |

## Labeling elements

If the UI text is correctly linked, assistive tech (such as a screenreader) will read the UI text followed by the component’s role.The 
    
    accessibility
    
      Accessible design makes products usable for people with all kinds of abilities.
    
      
            More on accessibility
          
   label for a text field is the same as the text field label.
A text field’s label should include its UI text
For text fields with interactive trailing icons, the accessibility label clarifies its function.
For example, when a password is hidden, the label for the view icon is "Show password," and when the password is visible, the label is "Hide password."When an icon has no actionable role, like an error icon, the label is "Error."
When a trailing icon in the field acts as a button, the label should clarify function, while the role explains the component type
The prefix and suffix of a text field provides symbols and abbreviations to help users enter the correct values.  The 
    
    accessibility
    
      Accessible design makes products usable for people with all kinds of abilities.
    
      
            More on accessibility
          
   label for prefix and suffix needs to have a unique id attribute, for example, the currency name for a currency symbol prefix.
A form containing fields with both a prefix for currency, and a suffix for email address
When there is an error, "alert" is applied to the role and the error message to the text label.
If a text field displays both supporting text and error text, the label should include the supporting text first, followed by the error text.
Text field error messages should be given an “alert” role in accessibility labels
The accessibility label for the character counter clarifies the number of characters that can be entered into the text field.
The remaining character counter should be called “character count” within the label
The text displayed in the supporting text is also used for its accessibility label.
Text field supporting text should have its own accessibility label
If a text field requires input, indicate so with an asterisk at the end of the text field label. The accessibility label must include the asterisk.
A required text field’s accessibility label should include any supporting text
