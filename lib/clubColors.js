export const CLUB_COLORS = {
  arsenal:            { bg1: "#EF0107", bg2: null,      text: "#ffffff" },
  barcelona:          { bg1: "#004D98", bg2: "#A50044",  text: "#ffffff" },
  liverpool:          { bg1: "#C8102E", bg2: null,      text: "#ffffff" },
  "man-city":         { bg1: "#6CABDD", bg2: null,      text: "#ffffff" },
  "man-united":       { bg1: "#DA291C", bg2: null,      text: "#ffffff" },
  "real-madrid":      { bg1: "#e8e8e8", bg2: null,      text: "#000000" },
  juventus:           { bg1: "#1a1a1a", bg2: "#ffffff",  text: "#1a1a1a", stroke: "rgba(255,255,255,0.9)" },
  "bayern-munich":    { bg1: "#DC052D", bg2: null,      text: "#ffffff" },
  chelsea:            { bg1: "#034694", bg2: null,       text: "#ffffff" },
  "atletico-madrid":  { bg1: "#CB3524", bg2: "#1a3a6b",  text: "#ffffff" },
  spurs:              { bg1: "#132257", bg2: "#ffffff",   text: "#1a1a1a", stroke: "rgba(255,255,255,0.9)" },
  newcastle:          { bg1: "#1a1a1a", bg2: "#ffffff",   text: "#1a1a1a", stroke: "rgba(255,255,255,0.9)" },
  bvb:                { bg1: "#FDE100", bg2: "#1a1a1a",   text: "#1a1a1a", stroke: "rgba(255,255,255,0.9)" },
  psg:                { bg1: "#00539F", bg2: "#E30613",   text: "#ffffff" },
  inter:              { bg1: "#1a1a1a", bg2: "#0057A8",   text: "#ffffff" },
  "ac-milan":         { bg1: "#FB090B", bg2: "#1a1a1a",   text: "#ffffff" },
  napoli:             { bg1: "#087DB4", bg2: null,         text: "#ffffff" },
  "aston-villa":      { bg1: "#670E36", bg2: "#95BFE5",   text: "#ffffff", stroke: "rgba(0,0,0,0.65)" },
};

export function getClubColors(slug) {
  return CLUB_COLORS[slug] ?? { bg1: "var(--surface-2)", bg2: null, text: "var(--text)" };
}

export function clubBadgeStyle(colors) {
  const bg = colors.bg2
    ? `linear-gradient(135deg, ${colors.bg1} 50%, ${colors.bg2} 50%)`
    : colors.bg1;

  const style = { background: bg, color: colors.text };

  if (colors.stroke) {
    const s = colors.stroke;
    style.textShadow = `-1px -1px 0 ${s}, 1px -1px 0 ${s}, -1px 1px 0 ${s}, 1px 1px 0 ${s}`;
  }

  return style;
}
