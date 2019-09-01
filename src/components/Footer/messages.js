/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from "react-intl";

export const scope = "boilerplate.components.Footer";

export default defineMessages({
  copyrightMessage: {
    id: `${scope}.copyright.message`,
    defaultMessage: `©2018 {author}, San Francisco Bay Area.`
  },
  socialMessage: {
    id: `${scope}.social.message`,
    defaultMessage: `STAY CONNECTED`
  }
});
