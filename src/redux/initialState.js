// This structure is based on the assignment's requirements
export const initialTheme = {
  name: "My New Theme",
  components: {
    title: {
      colors: { text: "#FE6B35" },
      textStyle: { fontFamily: "Helvetica", alignment: "left", size: 20 },
    },
    subtitle: {
      colors: { text: "#333333" },
      textStyle: { fontFamily: "Helvetica", alignment: "left", size: 16 },
    },
    primaryCTA: {
      container: {
        fullWidth: false,
        height: 48,
        borderWidth: 1,
        alignment: "left",
      },
      colors: { border: "#FF6B35", text: "#FFFFFF", background: "#FF6B35" },
      textStyle: { fontFamily: "Helvetica", alignment: "center", size: 16 },
      cornerRadius: { topLeft: 8, topRight: 8, bottomLeft: 8, bottomRight: 8 },
      margin: { top: 12, right: 12, bottom: 12, left: 12 },
    },
    // Add placeholders for other components as per the assignment
    secondaryCTA: {
      /* ... default styles ... */
    },
    ratingStars: {
      /* ... default styles ... */
    },
    optionsList: {
      listStyle: "radio", // or 'checkbox', 'dropdown'
      selectedState: {
        colors: { border: "#FD5F03", text: "#FFFFFF", background: "#FD5F03" },
        textStyle: { fontFamily: "Helvetica", alignment: "center", size: 14 },
      },
      nonSelectedState: {
        colors: { border: "#D1D5DB", text: "#374151", background: "#FFFFFF" },
        textStyle: { fontFamily: "Helvetica", alignment: "center", size: 14 },
      },
      others: {
        colors: { border: "#D1D5DB", text: "#374151", background: "#F3F4F6" },
        textStyle: { fontFamily: "Helvetica", alignment: "center", size: 14 },
      },
    },
     // etc.
  },
};
