const uuidv4 = require("./helpers");

const companies = [
  {
    id: uuidv4(),
    title: "Firtal",
    started_at: "Nov 2017",
    ended_at: "Present",
    position: "Software Developer",
    logo: "https://firtal.com/images/logo/firtal-logo-black.svg"
  },
  {
    id: uuidv4(),
    title: "Nobrainer Web",
    started_at: "May 2017",
    ended_at: "Jul 2017",
    position: "Frontend Developer",
    logo:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/p960x960/57534064_2304305299628861_1478147148498337792_o.jpg?_nc_cat=101&_nc_oc=AQlB46p7y9pU0ATBy75zWhdMmEElJ4V5euezHUfa6SluaWzylMiYPIhsjvGf2XBI8yY&_nc_ht=scontent-amt2-1.xx&oh=45e3cbb24ce81f45e587c51b843087b9&oe=5E86F20D"
  },
  {
    id: uuidv4(),
    title: "Misena ApS",
    started_at: "Aug 2016",
    ended_at: "Nov 2016",
    position: "Web Developer",
    logo:
      "https://media.licdn.com/dms/image/C560BAQG88OXsGud6qw/company-logo_200_200/0?e=1584576000&v=beta&t=EyockdXV8GM8iP6XlZL19-Aw_HTa_F4Yv1u0jcIvYU0"
  },
  {
    id: uuidv4(),
    title: "Ideaweb ApS",
    started_at: "Jan 2015",
    ended_at: "Mar 2015",
    position: "Web Developer",
    logo:
      "https://media.licdn.com/dms/image/C4D0BAQG8m7YsVyDJWA/company-logo_200_200/0?e=1584576000&v=beta&t=qembHwIF2NkvvXbLPNnK2lRgk2ACHte1VAc-7nzRmQc"
  }
];

module.exports = companies;
