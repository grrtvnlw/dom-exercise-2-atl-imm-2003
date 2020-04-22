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
container.style.display = "flex";

sites.forEach(function (site) {
  const linkDiv = document.createElement('div');
  const link = document.createElement('a');
  const linkImage = document.createElement('img');
  linkDiv.style.display = "flex";
  linkDiv.style.width = "100%"
  linkDiv.style.justifyContent = "center";
  linkDiv.style.alignItems = "center";
  link.setAttribute('href', site["address"])
  linkImage.setAttribute('src', site["logo"])
  linkImage.style.width = "100%";
  link.style.width = "50%";
  link.appendChild(linkImage);
  linkDiv.appendChild(link);
  container.appendChild(linkDiv);
})
