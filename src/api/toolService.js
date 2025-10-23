// src/api/toolService.js

export function fetchToolConfig(kind = "A") {
  return new Promise((resolve) => {
    setTimeout(() => {
      const base = {
        id: kind === "A" ? 1234 : 433,
        name: "Dynamic Tool Config",
      };

      if (kind === "A") {
        resolve({
          ...base,
          basicSettings: {
            resolution: {
              type: "slider",
              label: "Resolution",
              default: 5,
              min: 0,
              max: 10,
            },
            aspectRatio: {
              type: "select",
              label: "Aspect Ratio",
              default: "16x9",
              options: ["1x1", "4x3", "16x9"],
            },
          },
          advancedSettings: {
            add_metadata: {
              type: "checkbox",
              label: "Add Metadata?",
              default: true,
            },
            seed: { type: "number", label: "Random Seed", default: 0 },
          },
        });
      } else {
        resolve({
          ...base,
          basicSettings: {
            quality: {
              type: "slider",
              label: "Quality",
              default: 7,
              min: 1,
              max: 10,
            },
            format: {
              type: "select",
              label: "File Format",
              default: "png",
              options: ["jpg", "png", "bmp"],
            },
          },
        });
      }
    }, 400);
  });
}

export function sendToolConfig(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Mock API received:", data);
      resolve({ success: true, message: "Settings saved successfully!" });
    }, 700);
  });
}
