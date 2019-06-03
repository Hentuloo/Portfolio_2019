/* eslint-disable no-undef */
exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer];
  locations.push(window.location.pathname);
  window.previousPath = locations[locations.length - 1];
  if (locations.length > 20) {
    locations = locations.slice(Math.max(locations.length - 6, 1)); // last 6 elements
  }
};
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
