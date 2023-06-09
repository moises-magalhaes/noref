/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        syria: "url('/assets/images/colombia.jpg')",
        latinamerica: "url('/assets/images/colombia.jpg')",
        gender: "url('/assets/images/gender-and-inclusivity.jpg')",
        military: "url('/assets/images/military-dialogue.jpg')",
        philippines: "url('/assets/images/the-philippines.jpg')",
      },
    },
    colors: {
      fiord: {
        50: "#f6f7f9",
        100: "#ebeef3",
        200: "#d3d9e4",
        300: "#adb9cc",
        400: "#8093b0",
        500: "#607697",
        600: "#4c5e7d",
        700: "#455571",
        800: "#364256",
        900: "#313949",
        950: "#202531",
      },
      "wine-berry": {
        50: "#fdf6fd",
        100: "#faedf9",
        200: "#f4daf1",
        300: "#eabde3",
        400: "#dc96cf",
        500: "#c96cb8",
        600: "#ac4d98",
        700: "#8e3d7c",
        800: "#753365",
        900: "#612e54",
        950: "#4b193e",
      },
      "dodger-blue": {
        50: "#eff9ff",
        100: "#dff1ff",
        200: "#b8e6ff",
        300: "#78d2ff",
        400: "#1fb6ff",
        500: "#06a4f1",
        600: "#0082ce",
        700: "#0068a7",
        800: "#02578a",
        900: "#084972",
        950: "#062e4b",
      },
      "razzle-dazzle-rose": {
        50: "#fff3fc",
        100: "#ffe6fb",
        200: "#ffccf5",
        300: "#ffa3eb",
        400: "#ff6ddd",
        500: "#ff49db",
        600: "#e316b6",
        700: "#bd0e94",
        800: "#9a0e77",
        900: "#7e1160",
        950: "#55003e",
      },

      coral: {
        50: "#fff4ed",
        100: "#ffe5d4",
        200: "#ffc6a8",
        300: "#ff9f71",
        400: "#ff7849",
        500: "#fe4411",
        600: "#ef2a07",
        700: "#c61b08",
        800: "#9d180f",
        900: "#7e1710",
        950: "#440706",
      },

      malachite: {
        50: "#effef5",
        100: "#d9ffe9",
        200: "#b6fcd3",
        300: "#7df8b2",
        400: "#3deb89",
        500: "#13ce66",
        600: "#09b054",
        700: "#0b8a45",
        800: "#0f6c39",
        900: "#0e5932",
        950: "#013219",
      },

      "ebony-clay": {
        50: "#f5f7fa",
        100: "#eaeef4",
        200: "#d0dbe7",
        300: "#a7bcd2",
        400: "#7898b8",
        500: "#577da0",
        600: "#436386",
        700: "#37506d",
        800: "#31445b",
        900: "#273444",
        950: "#1e2733",
      },

      "regent-gray": {
        50: "#f4f6f7",
        100: "#e2e6eb",
        200: "#c8cfd9",
        300: "#a2adbe",
        400: "#8492a6",
        500: "#5a6a80",
        600: "#4d586d",
        700: "#434b5b",
        800: "#3c424e",
        900: "#353944",
        950: "#20232c",
      },

      geyser: {
        50: "#f5f7fa",
        100: "#ebeff3",
        200: "#d3dce6",
        300: "#aabccf",
        400: "#7c99b4",
        500: "#5c7c9b",
        600: "#486481",
        700: "#3b5169",
        800: "#344558",
        900: "#2f3c4b",
        950: "#1f2732",
      },

      white: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },

      black: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#4a4a4a",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#313131",
        950: "#00000000",
      },

      "dark-burgundy": {
        50: "#fff2f0",
        100: "#ffe0dc",
        200: "#ffc6bf",
        300: "#ff9e93",
        400: "#ff6755",
        500: "#ff3820",
        600: "#ff1b00",
        700: "#da1700",
        800: "#b31401",
        900: "#781307",
        950: "#510900",
      },

      "old-copper": {
        50: "#f8f6ee",
        100: "#eeead3",
        200: "#dfd5a9",
        300: "#ccb978",
        400: "#bca153",
        500: "#ad8e45",
        600: "#94713a",
        700: "#73532f",
        800: "#65482e",
        900: "#573d2c",
        950: "#322016",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },

      "fern-frond": {
        50: "#f4faeb",
        100: "#e8f3d4",
        200: "#d2e7af",
        300: "#b3d77f",
        400: "#97c457",
        500: "#78a939",
        600: "#588028",
        700: "#476724",
        800: "#3b5321",
        900: "#334720",
        950: "#19260d",
      },
    },
  },
  plugins: [],
};
