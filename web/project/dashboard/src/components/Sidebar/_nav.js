export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'My Patients',
      url: '/home',
      icon: 'icon-star',
    },
    {
      name: 'Add Patients',
      url: '/addPatients',
      icon: 'icon-calculator',
    },
    {
      name: 'Add Doctors',
      url: '/addDoctors',
      icon: 'icon-calculator',
    },
    {
      name: 'Add Hospitals',
      url: '/addHospitals',
      icon: 'icon-calculator',
    },
    {
      divider: true
    }
  ]
};
