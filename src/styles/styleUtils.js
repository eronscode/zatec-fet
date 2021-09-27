import { css } from "styled-components";

export const color = {
  white: "#ffffff",
  black: "#111111",
  darkGrey: "#555456",
  lightGrey: "#D3D3D3",
  blue: "#0085FF",
  lightBlue: "#B2DAFF",
  red: "#FF0000",
  yellow: "#FFD600",
  green: "#00CC2D",
};

export const font = {
  regular: 'font-family: "Roboto-Regular"; font-weight: 400;',
  bold: 'font-family: "Roboto-Medium"; font-weight: 500;',
  size: (size) => `font-size: ${size}px;`,
};

export const mixins = {
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  customScrollbar: ({ width = 8, background = color.primary.inc4 } = {}) => css`
    &::-webkit-scrollbar-track {
      background-color: #ebecf0;
    }

    &::-webkit-scrollbar {
      width: ${width}px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background-color: ${background};
    }
  `,
};
