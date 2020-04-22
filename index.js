const sites = [
  {
      "address": "https://apple.com",
      "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
  },
  {
      "address": "https://google.com",
      "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
  },
  {
      "address": "https://microsoft.com",
      "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
  },

];

const container = document.querySelector('.container');

console.log(Object.values(sites))

sites.forEach(function (site) {
  // console.log(site["logo"])
  const linkDiv = document.createElement('div');
  const link = document.createElement('a');
  const linkImage = document.createElement('img');
  link.setAttribute('href', site["address"])
  linkImage.setAttribute('src', site["logo"])
  console.log(linkImage)
  link.appendChild(linkImage);
  linkDiv.appendChild(link);
  container.appendChild(linkDiv);
})
