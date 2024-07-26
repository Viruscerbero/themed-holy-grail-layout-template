# Responsive Themed Holy Grail Layout with Fluid Areas using CSS Grid and vanilla-extract/css

This project demonstrates a responsive implementation of the Holy Grail layout pattern using CSS Grid and the power of themed styles with `vanilla-extract/css`. The layout features a header, a navigation on the left, a flexible main content area in the middle, a sidebar on the right, and a footer. It changes the layout to adapt to any screen size while maintaining clear separation between sections.

The application also includes a button that opens a menu of demo themes. Selecting a theme dynamically changes the entire layout without triggering a re-render. Notably, this is achieved solely through React's composition capabilities, without employing any memoization techniques like `memo`, `useCallback`, or `useMemo`.

This project serves as a solid foundation for building custom and more complex layouts and themes.

## How it works

- The grid container element uses CSS Grid to enable a grid layout.
- The main layout, defined by grid areas, consists of empty sections (`Header`, `Navigation`, `Main`, `Aside` and `Footer`) that require components from the `components` directory to be filled with actual content.
- Grid tracks are defined with fixed and flexible units. The layout allows the content area to occupy more space as the screen widens.
- Strategic breakpoints, determined by media queries, trigger layout adjustments for different screen sizes and orientations (landscape and portrait).
- `vanilla-extract/css` is used to define reusable CSS styles with variables for colors, fonts, spacings, etc. These variables can be customized to create different themes for the layout and are used throughout the CSS styles using the `style` function from `vanilla-extract/css`. This allows for easy customization of the layout's appearance by changing the values of the theme variables.
- A global theme is provided to the entire layout and its components using React's Context API. React's composition enables efficient theme management by preventing unnecessary re-renders when the theme changes.

## Features

- **Holy Grail Pattern:** Classic layout structure.
- **Responsive:** Fluid content sections that expand from 240px and adapt to any screen size.
- **CSS Grid:** Modern and efficient layout approach that provides a clear separation of content sections using named grid areas.
- **Themable Appearance:** Easily customize the layout with different color schemes, fonts, etc. `vanilla-extract/css` enables consistent and maintainable customization of the layout's appearance.
- **Starting Point:** Build upon this base for more complex layouts and themes.

## Screenshots

![theme-vanilla-desktop](https://github.com/user-attachments/assets/607d1552-3765-4597-bbbc-649fae51ea62)

![theme-blues-medium](https://github.com/user-attachments/assets/33a7c41a-8e9e-434e-8cc4-9355ebe6a028)

![theme-purple-medium](https://github.com/user-attachments/assets/c5d8061c-b22c-47a3-b3e4-65bbccb6a84f)

![theme-black-mobile](https://github.com/user-attachments/assets/12cd7cbd-89d2-4975-966a-f29efa88bc3c)
