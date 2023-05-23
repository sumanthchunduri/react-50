export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone}px)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet}px)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop}px)`
};
