export const generateRandomBrightColor = (() => {
    const letters = '0123456789ABCDEF';
    const usedColors = new Set();

    return () => {
      let color = '#';

      // Generating a random bright color
      do {
        for (let i = 0; i < 6; i++) {
          const index = Math.floor(Math.random() * 16);
          color += letters[index];
        }
      } while (usedColors.has(color));

      // Add the generated color to the set to avoid repeats
      usedColors.add(color);

      // Reset the set when all possible colors are used (unlikely, but possible)
      if (usedColors.size === 16777216) {
        usedColors.clear();
      }

      return color;
    };
  })();