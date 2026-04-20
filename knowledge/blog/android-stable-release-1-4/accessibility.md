<!-- Source: https://m3.material.io/blog/android-stable-release-1-4/accessibility -->
<!-- Scraped: 2026-04-20T07:19:27.253Z -->

Posted by
Nick Rout
, Material Developer Advocate
We’re excited to announce the release of Material Design Components (MDC) 1.4.0! A host of exciting new features have been added along with many bug fixes and accessibility improvements. Get the rundown below.
Make sure to check out the release notes, and if you’re using MDC for the first time, take a look at our getting started guide.
link
Copy link
Link copied

## What’s new in 1.4.0?

A fair bit has changed since 1.3.0 launched in February – we added the navigation rail component, added support for motion theming, and more. The things you loved from the alpha, beta, and RC releases of 1.4.0 are now officially stable. If you haven’t yet started using 1.4.0 of MDC, there’s never been a better time to update.

#### NavigationRailView

Navigation rails provide ergonomic movement between primary destinations in apps. The rail is a side navigation component that displays three to seven app destinations and, optionally, a Floating Action Button. Each destination is represented by an icon and a text label.
MDC 1.4.0 allows you to use navigation rails in your Android app with the NavigationRailView widget. It has a similar API to NavigationView but has additional features to support Material Design Guidance for Large Screens.
<!-- In layout -->
com
google
android
material
navigationrail
NavigationRailView
android
"@+id/navigation_rail"
android
layout_width
"wrap_content"
android
layout_height
"match_parent"
app
menu
"@menu/navigation_rail_menu"
<!-- In navigation_rail_menu.xml -->
menu
xmlns
android
"http://schemas.android.com/apk/res/android"
item
android
"@+id/item1"
android
enabled
"true"
android
icon
"@drawable/icon1"
android
title
"@string/title1"
item
android
"@+id/item2"
android
enabled
"true"
android
icon
"@drawable/icon2"
android
title
"@string/title2"
...
/menu>
// In code
navigationRail
setOnNavigationItemSelectedListener
NavigationBarView
OnNavigationItemSelectedListener
item
when
item
itemId
) {
item1
// Respond to navigation item 1 click
true
item2
// Respond to navigation item 2 click
true
else
false
Learn more about how to implement navigation rails in our documentation.

#### Motion theming

Material motion provides a set of transition patterns that help users understand and navigate an app.
We introduced material motion in MDC 1.2.1 and have added many improvements since then. MDC 1.4.0 allows you to specify duration, easing, and path values for the Material motion classes — MaterialContainerTransform, MaterialSharedAxis, MaterialFadeThrough, and MaterialFade — with new theme attributes, similar to color, typography, and shape attributes.
xxxxxxxxxx
style
name
"Theme.App"
parent
"Theme.MaterialComponents.*"
<!-- Duration attributes, for increasing area/traversal of animation -->
item
name
"motionDurationShort1"
/item>
item
name
"motionDurationShort2"
150
/item>
item
name
"motionDurationMedium1"
200
/item>
item
name
"motionDurationMedium2"
250
/item>
item
name
"motionDurationLong1"
300
/item>
item
name
"motionDurationLong2"
350
/item>
<!-- Easing attributes, to define a set of curves to be inflated and used as Interpolators -->
item
name
"motionEasingStandard"
cubic
bezier
0.4
0.0
0.2
/item>
item
name
"motionEasingEmphasized"
path
0.05
0.133333
0.06
0.166666
0.4
0.208333
0.82
0.25
/item>
item
name
"motionEasingDecelerated"
cubic
bezier
0.0
0.0
0.2
/item>
item
name
"motionEasingAccelerated"
cubic
bezier
0.4
0.0
/item>
item
name
"motionEasingLinear"
cubic
bezier
/item>
<!-- Path attributes, which control the behavior of animating elements -->
item
name
"motionPath"
linear
/item>
/style>
Learn more about how to implement motion and how the new theme attributes map to the relevant classes in our documentation.

#### … and more

A variety of smaller features and bug fixes made it into this release. Check out the releases page as well as the diff between 1.3.0 and 1.4.0 for a full list.
Here are some of the highlights:
- Updated the way BottomSheet handles insets
- Updated "indicatorSize" in CircularProgressIndicatorSpec to be never less than twice of "trackThickness"
- Updated CollapsingToolbarLayout to support framework android.widget.Toolbar (<Toolbar)
- Adjusted background of collapsed hint to not overlap with edit text's background
- Localized numbers in MaterialDatePicker month
- Added support for centering MaterialToolbar title and subtitle
- Added support for CollapsingToolbarLayout fade out/in title collapse mode
- Fix badge offset bug when attached and detached from a menu item on a toolbar
- Fixed issues with MaterialButtonToggleGroup uncheck and check methods
- Updated Material Button style to set the preferred maximum width to 320dp

#### What’s next for MDC?

The next feature release of MDC — 1.5.0 — is expected to land in alpha soon! Exciting new updates include MaterialDivider and MaterialDividerItemDecoration, and various improvements to existing components. As always, we encourage you to file bug reports and feature requests on GitHub. Also be sure to check out our Android example apps and Build a Material Theme.
We highly encourage trying out MDC 1.4.0. If you’re using its features in your Android app, leave a comment below or reach out to us on Twitter @materialdesign. We’d love to see it.
