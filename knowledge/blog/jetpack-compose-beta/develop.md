<!-- Source: https://m3.material.io/blog/jetpack-compose-beta/develop -->
<!-- Scraped: 2026-04-20T07:37:35.991Z -->

Posted by
Nick Rout
, Material Developer Advocate
Today marks the first beta release of Jetpack Compose, Android’s modern, declarative toolkit designed to simplify and accelerate UI development. With Jetpack Compose, you can quickly bring your apps to life with less code, powerful tools, intuitive Kotlin APIs, and built-in support for Material Design, dark theme, animations, and more.
link
Copy link
Link copied

## Compose Material

Jetpack Compose offers an implementation of Material Design and provides all the components you need to create beautiful apps, following the guidance described at material.io.
// Add dependency in module build.gradle
implementation
“androidx
compose
material
material
$compose_version”
link
Copy link
Link copied

## Material Theming

Jetpack Compose implements Material Theming and supports dark theme by default. You can customize color, typography, and shape theming values to fit your product's brand, and get access to convenient functions for working with system dark theme (like isSystemInDarkTheme, lightColors, and darkColors).
// In Colors.kt
val
Navy500
Color
0xFF64869B
val
Navy700
Color
0xFF37596D
val
Navy900
Color
0xFF073042
val
Green300
Color
0xFF3DDC84
val
Green900
Color
0xFF00A956
val
LightColors
lightColors
primary
Navy700
primaryVariant
Navy900
secondary
Green300
secondaryVariant
Green900
// Using default values for onPrimary, surface, error, etc.
val
DarkColors
darkColors
primary
Navy500
primaryVariant
Navy900
secondary
Green300
// secondaryVariant == secondary in dark theme
xxxxxxxxxx
// In Type.kt
val
TextStyle
fontWeight
FontWeight
Medium
fontSize
20.
letterSpacing
0.15
val
Body2
TextStyle
fontWeight
FontWeight
Normal
fontSize
14.
letterSpacing
0.25
val
Button
TextStyle
fontWeight
FontWeight
Medium
fontSize
14.
letterSpacing
1.25
val
Typography
Typography
body2
Body2
button
Button
defaultFontFamily
FontFamily
Font
font
roboto_mono
// Using default values for subtitle1, caption, etc.
xxxxxxxxxx
// In Shape.kt
val
Shapes
Shapes
small
RoundedCornerShape
percent
medium
RoundedCornerShape
large
CutCornerShape
topStart
16.
topEnd
bottomStart
16.
bottomEnd
xxxxxxxxxx
// In Theme.kt
Composable
fun
MyTheme
darkTheme
Boolean
isSystemInDarkTheme
(),
content
Composable
Unit
) {
val
colors
darkTheme
) {
DarkColors
else
LightColors
MaterialTheme
colors
colors
typography
Typography
shapes
Shapes
content
content
When creating new screens in Compose, you should ensure that you apply your custom MaterialTheme before any UI-emitting Material composables. The Material components (Button, Checkbox, BottomNavigation, etc.) depend on a MaterialTheme being in place and their behavior is undefined without it.
xxxxxxxxxx
class
MyActivity
ComponentActivity
() {
override
fun
onCreate
savedInstanceState
Bundle
) {
super
onCreate
savedInstanceState
setContent
MyTheme
// Material components like Button, Checkbox, Card, etc.
Check out the Theming in Compose guide for more information, and try the Jetpack Compose Theming codelab.
link
Copy link
Link copied

## Material Components

Jetpack Compose offers implementations of Material Components. See the table below for composables available in the beta release, or check out the full list in the API reference.
| App bars: bottom | BottomAppBar |
| App bars: top | TopAppBar |
| Backdrop | Backdrop |
| Banners | Not available yet |
| Bottom navigation | BottomNavigation |
| Buttons | ButtonOutlinedButtonTextButton |
| Buttons: floating action button | FloatingActionButtonExtendedFloatingActionButton |
| Cards | Card |
| Checkboxes | CheckboxTriStateCheckbox |
| Chips | Not available yet |
| Data tables | Not available yet |
| Date pickers | Not available yet |
| Dialogs | AlertDialog |
| Dividers | Divider |
| Image lists | Not available yet |
| Lists | ListItem |
| Menus | DropdownMenuDropdownMenuItem |
| Navigation drawer | ModalDrawerLayoutBottomDrawerLayout |
| Navigation rail | Not available yet |
| Progress indicators | CircularProgressIndicatorLinearProgressIndicator |
| Radio buttons | RadioButton |
| Sheets: bottom | BottomSheetScaffoldModalBottomSheetLayout |
| Sheets: side | Not available yet |
| Sliders | Slider |
| Snackbars | SnackbarScaffold |
| Switches | Switch |
| Tabs | TabTabRowScrollableTabRow |
| Text fields | TextFieldOutlinedTextField |
| Time pickers | Not available yet |
| Tooltips | Not available yet |
These components can be combined—using layouts and composables like Scaffold—as the building blocks for beautiful UIs.
xxxxxxxxxx
val
scaffoldState
rememberScaffoldState
val
scope
rememberCoroutineScope
Scaffold
scaffoldState
scaffoldState
drawerContent
Text
"Drawer content"
) },
topBar
TopAppBar
title
Text
"Top app bar"
) },
navigationIcon
IconButton
onClick
scope
launch
scaffoldState
drawerState
open
() }
) {
Icon
Icons
Filled
Menu
contentDescription
stringResource
string
label_nav_menu
floatingActionButtonPosition
FabPosition
End
floatingActionButton
ExtendedFloatingActionButton
text
Text
"Extended FAB"
) },
onClick
/* Handle FAB click */
content
innerPadding
LazyColumn
contentPadding
innerPadding
) {
items
count
) {
Card
modifier
Modifier
fillMaxWidth
wrapContentHeight
padding
16.
) {
/* Card content */
Check out the Layouts in Compose guide for more information.
link
Copy link
Link copied

## Dark theme

Material composables that make use of a Surface (like Card, TopAppBar, etc.) automatically include dark theme properties like desaturated colors for accessibility, elevation overlays, and limited color accents. You can also incorporate these in custom scenarios.
xxxxxxxxxx
// Background color of components that are primary in light theme, and surface in dark theme
val
primarySurface
MaterialTheme
colors
primarySurface
// Utility for applying elevation overlays to colors
val
elevationOverlay
LocalElevationOverlay
current
val
color
MaterialTheme
colors
surface
val
elevation
val
overlaidColor
elevationOverlay
apply
color
elevation
link
Copy link
Link copied

## Material Icons

Jetpack Compose also provides a convenient means of using icons listed in the Material Icons tool, including all icon styles—filled, outlined, rounded, two-tone, and sharp. With this artifact, you can use icons directly, without the need to download SVGs and convert them to VectorDrawables in Android Studio.
xxxxxxxxxx
// Add dependency in module build.gradle
implementation
“androidx
compose
material
material
icons
extended
$compose_version”
xxxxxxxxxx
Icon
Icons
Default
Add
// Default == Filled
Icon
Icons
Outlined
Notifications
Icon
Icons
Rounded
ArrowForward
Icon
Icons
TwoTone
Menu
Icon
Icons
Sharp
Edit
tint
MaterialTheme
colors
primary
link
Copy link
Link copied

## Interoperability

Jetpack Compose is designed to work with Android Views. If you're building a new app, the best option might be to implement your entire UI with Compose. But if you're modifying an existing app, you might not want to migrate your app straight away. Instead, you can combine Compose with your existing UI design and adopt it at your own pace.
If you’re using Material Components for Android in your app—in particular Material Theming—the MDC-Android Compose Theme Adapter library allows you to easily re-use the color, typography and shape definitions from your existing XML themes, from within your composables, so you don’t need to declare them again and have a single source of truth.
xxxxxxxxxx
// Add dependency in module build.gradle
implementation
“com
google
android
material
compose
theme
adapter
$compose_version”
xxxxxxxxxx
class
MyActivity
AppCompatActivity
() {
override
fun
onCreate
savedInstanceState
Bundle
) {
super
onCreate
savedInstanceState
setContent
// We use the MdcTheme composeable instead of MaterialTheme
// This extracts Material Theming definitions from the current Context
MdcTheme
MyComposable
/*...*/
If you’re using AppCompat, you can access similar functionality by using the AppCompatTheme composable from the AppCompat Compose Theme Adapter library.
xxxxxxxxxx
// Add dependency in module build.gradle
implementation
"dev.chrisbanes.accompanist:accompanist-appcompat-theme:$accompanist_version"
Check out the Compose interoperability guide for more information.
link
Copy link
Link copied

## Resources

With Jetpack Compose reaching beta, it’s a great time to start learning all about it and get ready to adopt it in your apps. Check out the resources below to get started.
- Develop knowledge and skills at your own pace with the Jetpack Compose Pathway, through sequential learning experiences that include articles, codelabs, quizzes, and videos.
- Visit the Jetpack Compose Samples GitHub repository, where you’ll find a variety of up-to-date samples including Material Studies like Owl, Crane, and Rally.
- Get setup using the Android Studio with Jetpack Compose guide.
- View the Converting an existing app screen to Jetpack Compose video on the Material Design YouTube channel.
- Join the Compose community on StackOverflow and the Kotlin Slack group.
- Report an issue and track bugs on the bug tracker.
