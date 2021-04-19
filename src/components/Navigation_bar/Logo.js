/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
export const Logo = (img_src) => {
  const image = document.createElement('img')
  image.src = img_src

  return image
}
