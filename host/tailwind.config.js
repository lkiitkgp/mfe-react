/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // New naming convention
        "primary-bg": "var(--primary-bg)",
        "secondary-bg": "var(--secondary-bg)",
        "primary-border": "var(--primary-border)",
        "text-default": "var(--text-default)",
        "text-hover": "var(--text-hover)",

        "header-avatar-border": "var(--header-avatar-border)",
        "header-logo-primary": "var(--header-logo-primary)",
        "header-logo-secondary": "var(--header-logo-secondary)",

        /* Sidebar */
        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-tab-border-default": "var(--sidebar-tab-border-default)",
        "sidebar-toggle-border": "var(--sidebar-toggle-border)",
        "sidebar-toggle-bg-default": "var(--sidebar-toggle-bg-default)",
        "sidebar-toggle-bg-hover": "var(--sidebar-toggle-bg-hover)",
        "sidebar-toggle-button-bg-default":
          "var(--sidebar-toggle-button-bg-default)",
        /* Sidebar light toggle button */
        "sidebar-toggle-light-text-default":
          "var(--sidebar-toggle-light-text-default)",
        "sidebar-toggle-light-text-hover":
          "var(--sidebar-toggle-light-text-hover)",
        /* Sidebar dark toggle button */
        "sidebar-toggle-dark-text-default":
          "var(--sidebar-toggle-dark-text-default)",
        "sidebar-toggle-dark-text-hover":
          "var(--sidebar-toggle-dark-text-hover)",

        "apiportal-panel-header-bg": "var(--apiportal-panel-header-bg)",
        "apiportal-panel-icon-border": "var(--apiportal-panel-icon-border)",
        "apiportal-panel-response-bg": "var(--apiportal-panel-response-bg)",
        "apiportal-panel-response-border":
          "var(--apiportal-panel-response-border)",
        "apiportal-panel-header-text-default":
          "var(--apiportal-panel-header-text-default)",
        "apiportal-panel-header-subtext-default":
          "var(--apiportal-panel-header-subtext-default)",
        transparent: "var(--transparent)",

        /* Checkbox */
        "checkbox-bg-unchecked": "var(--checkbox-bg-unchecked)",
        "checkbox-text-unchecked": "var(--checkbox-text-unchecked)",
        "checkbox-border-unchecked": "var(--checkbox-border-unchecked)",
        "checkbox-bg-checked": "var(--checkbox-bg-checked)",
        "checkbox-text-checked": "var(--checkbox-text-checked)",
        "checkbox-border-checked": "var(--checkbox-border-checked)",
        "checkbox-border-focus": "var(--checkbox-border-focus)",

        /* Input */
        "input-bg-default": "var(--input-bg-default)",
        "input-bg-hover": "var(--input-bg-hover)",
        "input-bg-focus": "var(--input-bg-focus)",
        "input-border-default": "var(--input-border-default)",
        "input-border-hover": "var(--input-border-hover)",
        "input-border-focus": "var(--input-border-focus)",
        "input-text-default": "var(--input-text-default)",
        "input-text-placeholder": "var(--input-text-placeholder)",

        /* Input slider */
        "input-slider-thumb-bg-default": "var(--input-slider-thumb-bg-default)",
        "input-slider-thumb-ring-default":
          "var(--input-slider-thumb-ring-default)",

        /* Dropdown */
        "dropdown-bg-default": "var(--dropdown-bg-default)",
        "option-bg-default": "var(--option-bg-default)",
        "option-text-default": "var(--option-text-default)",
        "dropdown-bg-hover": "var(--dropdown-bg-hover)",
        "option-bg-hover": "var(--option-bg-hover)",
        "option-text-hover": "var(--option-text-hover)",
        "dropdown-bg-focus": "var(--dropdown-bg-focus)",
        "dropdown-bg-selected": "var(--dropdown-bg-selected)",
        "option-bg-selected": "var(--option-bg-selected)",
        "option-text-selected": "var(--option-text-selected)",
        "dropdown-border-default": "var(--dropdown-border-default)",
        "dropdown-border-hover": "var(--dropdown-border-hover)",
        "dropdown-border-focus": "var(--dropdown-border-focus)",
        "dropdown-text-default": "var(--dropdown-text-default)",

        /* Language Dropdown */
        "languagedropdown-bg-default": "var(--languagedropdown-bg-default)",
        "languageoption-bg-hover": "var(--languageoption-bg-hover)",
        "languageoption-bg-selected": "var(--languageoption-bg-selected)",

        /* Link */
        "link-text-default": "var(--link-text-default)",
        "link-text-hover": "var(--link-text-hover)",
        "link-text-press": "var(--link-text-press)",
        "link-text-focus": "var(--link-text-focus)",
        "link-text-disabled": "var(--link-text-disabled)",
        "link-border-default": "var(--link-border-default)",
        "link-border-focus": "var(--link-border-focus)",

        /* Alert */
        "alert-bg-error": "var(--alert-bg-error)",
        "alert-border-error": "var(--alert-border-error)",
        "alert-bg-success": "var(--alert-bg-success)",
        "alert-border-success": "var(--alert-border-success)",

        /* Static Alert */
        "alert-bg-information": "var(--alert-bg-information)",
        "alert-bg-warning": "var(--alert-bg-warning)",

        /* Chip */
        "chip-bg-success": "var(--chip-bg-success)",
        "chip-bg-secondary": "var(--chip-bg-secondary)",
        "chip-bg-error": "var(--chip-bg-error)",

        /* Snackbar */
        "snackbar-text-default": "var(--snackbar-text-default)",

        /* Toggle */
        "toggle-bg-default": "var(--toggle-bg-default)",

        /* Popover */
        "popover-border-default": "var(--popover-border-default)",

        /* Button */

        /* Primary color */
        "button-bg-primary-default": "var(--button-bg-primary-default)",
        "button-text-primary-default": "var(--button-text-primary-default)",
        "button-border-primary-default": "var(--button-border-primary-default)",
        "button-bg-primary-hover": "var(--button-bg-primary-hover)",
        "button-text-primary-hover": "var(--button-text-primary-hover)",
        "button-bg-primary-press": "var(--button-bg-primary-press)",
        "button-text-primary-press": "var(--button-text-primary-press)",
        "button-bg-primary-focus": "var(--button-bg-primary-focus)",
        "button-text-primary-focus": "var(--button-text-primary-focus)",
        "button-border-primary-focus": "var(--button-border-primary-focus)",
        "button-bg-primary-disabled": "var(--button-bg-primary-disabled)",
        "button-text-primary-disabled": "var(--button-text-primary-disabled)",
        /* Secondary color */
        "button-bg-secondary-default": "var(--button-bg-secondary-default)",
        "button-text-secondary-default": "var(--button-text-secondary-default)",
        "button-border-secondary-default":
          "var(--button-border-secondary-default)",
        "button-bg-secondary-hover": "var(--button-bg-secondary-hover)",
        "button-text-secondary-hover": "var(--button-text-secondary-hover)",
        "button-bg-secondary-press": "var(--button-bg-secondary-press)",
        "button-text-secondary-press": "var(--button-text-secondary-press)",
        "button-bg-secondary-focus": "var(--button-bg-secondary-focus)",
        "button-text-secondary-focus": "var(--button-text-secondary-focus)",
        "button-border-secondary-focus": "var(--button-border-secondary-focus)",
        "button-bg-secondary-disabled": "var(--button-bg-secondary-disabled)",
        "button-text-secondary-disabled":
          "var(--button-text-secondary-disabled)",
        /* Tertiary color */
        "button-bg-tertiary-default": "var(--button-bg-tertiary-default)",
        "button-text-tertiary-default": "var(--button-text-tertiary-default)",
        "button-border-tertiary-default":
          "var(--button-border-tertiary-default)",
        "button-bg-tertiary-hover": "var(--button-bg-tertiary-hover)",
        "button-text-tertiary-hover": "var(--button-text-tertiary-hover)",
        "button-bg-tertiary-press": "var(--button-bg-tertiary-press)",
        "button-text-tertiary-press": "var(--button-text-tertiary-press)",
        "button-bg-tertiary-focus": "var(--button-bg-tertiary-focus)",
        "button-text-tertiary-focus": "var(--button-text-tertiary-focus)",
        "button-border-tertiary-focus": "var(--button-border-tertiary-focus)",
        "button-bg-tertiary-disabled": "var(--button-bg-tertiary-disabled)",
        "button-text-tertiary-disabled": "var(--button-text-tertiary-disabled)",

        /* Inverse Colors */

        "primary-bg-inverse": "var(--primary-bg-inverse)",
        "secondary-bg-inverse": "var(--secondary-bg-inverse)",
        "text-default-inverse": "var(--text-default-inverse)",
      },
      fontSize: {
        subtext: "13px",
        xxs: "10px",
      },
      boxShadow: {
        "modal-footer": "0px 0px 20px 0px #00000040",
      },
    },
    fontFamily: {
      futuraNextBook: ["Futura Next Book", "sans-serif"],
      volte: ["Volte", "sans-serif"],
    },
    letterSpacing: {
      heading: "0.005em",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
