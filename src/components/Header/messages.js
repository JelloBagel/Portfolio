/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from "react-intl";

export const scope = "boilerplate.components.Header";

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: "HOME"
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: "ABOUT"
  },
  projects: {
    id: `${scope}.projects`,
    defaultMessage: "PROJECTS"
  },
  resume: {
    id: `${scope}.resume`,
    defaultMessage: "RESUME"
  }
});
