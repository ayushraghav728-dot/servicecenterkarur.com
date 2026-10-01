/**
 * Centralized Site Configuration for servicecenterdindigul.com
 * Single source of truth for contact details, domain, and service information.
 */
const SITE_CONFIG = {
  brandName: "Service Center Dindigul",
  tagline: "Local Home Appliance Repair & Service in Dindigul",
  domain: "servicecenterdindigul.com",
  siteUrl: "https://servicecenterdindigul.com",
  
  // Primary Contact Details (Consistent across all pages, calls, schemas, and floating buttons)
  phoneDisplay: "+91 92115 12088",
  phoneRaw: "+919211512088",
  phoneDigitsOnly: "9211512088",
  whatsappNumber: "919211512088",
  whatsappPrefillMessage: "Hello, I need home appliance repair service in Dindigul. Please share the service details.",
  email: "support@servicecenterdindigul.com",
  
  // Working Hours & Location Details
  workingHours: "Monday to Sunday: 8:00 AM - 8:30 PM",
  serviceLocation: {
    city: "Dindigul",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "624001",
    streetAddress: "Main Road, Near Nagal Nagar & RM Colony",
    latitude: 10.3673,
    longitude: 77.9803
  },
  
  // 60 Verified Service Localities in and around Dindigul (Single Source of Truth)
  localities: [
    { name: "Dindigul Town", landmark: "Town center, Bus Stand, Round Road" },
    { name: "Nagal Nagar", landmark: "Railway feeder road & market area" },
    { name: "RM Colony", landmark: "1st to 12th cross streets & Collectorate road" },
    { name: "Begampur", landmark: "Big Mosque surroundings & town entry" },
    { name: "Seelapadi", landmark: "Seelapadi bypass & residential layouts" },
    { name: "Balakrishnapuram", landmark: "Bypass junction & railway gate colony" },
    { name: "Adiyanuthu", landmark: "Sirumalai road connection & layouts" },
    { name: "Siluvathur Road", landmark: "Housing board & connecting streets" },
    { name: "Palani Road", landmark: "Chettinaickenpatti & bypass corridor" },
    { name: "Batlagundu", landmark: "Batlagundu town limits & bus stand surroundings" },
    { name: "Natham", landmark: "Natham main road & town coverage" },
    { name: "Oddanchatram", landmark: "Oddanchatram market circle & town limits" },
    { name: "Vedasandur", landmark: "Vedasandur town & Karur highway road" },
    { name: "Nilakottai", landmark: "Nilakottai market area & bus stand" },
    { name: "Round Road", landmark: "Round Road circle & nearby streets" },
    { name: "Chettinaickenpatti", landmark: "Panchayat area & bypass link" },
    { name: "Mendonsa Colony", landmark: "Residential cross streets" },
    { name: "Spencer Compound", landmark: "Central commercial & housing blocks" },
    { name: "Nehruji Nagar", landmark: "Residential avenues" },
    { name: "GTN Nagar", landmark: "GTN College road & surrounding layouts" },
    { name: "Meenachinayakkanpatti", landmark: "Panchayat limits & housing area" },
    { name: "Pillayarnatham", landmark: "Connecting road residential area" },
    { name: "Vadamadurai", landmark: "Town circle & railway feeder junction" },
    { name: "Kottaipatti", landmark: "Local residential surroundings" },
    { name: "Chinnalapatti", landmark: "Weavers town, bus stop & bypass area" },
    { name: "Thadicombu", landmark: "Temple town area & road connecting layouts" },
    { name: "Sirumalai Road", landmark: "Foothill layouts & farm residences" },
    { name: "Aarthi Theatre Road", landmark: "City commercial hub" },
    { name: "Bus Stand Road", landmark: "Central transport hub & shops" },
    { name: "Trichy Road", landmark: "Trichy highway residential layouts" },
    { name: "Madurai Road", landmark: "Madurai highway connecting areas" },
    { name: "Karur Road", landmark: "Industrial and residential corridor" },
    { name: "Collectorate Area", landmark: "Administrative circle & staff quarters" },
    { name: "MSP Nagar", landmark: "School road & residential layout" },
    { name: "Bharathi Nagar", landmark: "Housing colony streets" },
    { name: "Kumaran Nagar", landmark: "Developing residential sector" },
    { name: "Ashok Nagar", landmark: "Peaceful residential neighborhood" },
    { name: "Anna Nagar", landmark: "Central housing colony" },
    { name: "Kamaraj Nagar", landmark: "Town residential streets" },
    { name: "Gandhigram", landmark: "Rural institute zone & university area" },
    { name: "Ambathurai", landmark: "Ambathurai railway station vicinity" },
    { name: "Sithayankottai", landmark: "Town limits & connecting hamlets" },
    { name: "Kannivadi", landmark: "Town panchayat & foothill settlements" },
    { name: "Reddiarchatram", landmark: "Block junction & agricultural hub" },
    { name: "Eriodu", landmark: "Karur link town coverage" },
    { name: "Ayyalur", landmark: "Market village & highway border" },
    { name: "Gujiliamparai", landmark: "North Dindigul border junction" },
    { name: "Shanmugapuram", landmark: "Housing area near town" },
    { name: "Sivagiripatti", landmark: "Palani taluk fringe residential" },
    { name: "Alagarsamypuram", landmark: "Central residential lanes" },
    { name: "Pandian Nagar", landmark: "Old town residential colony" },
    { name: "Murugabhavanam", landmark: "Palani road approach area" },
    { name: "Senkulam", landmark: "Pond road residential sector" },
    { name: "Gopalpatti", landmark: "Natham road rural hub" },
    { name: "Sanarpatti", landmark: "East Dindigul block center" },
    { name: "Rajakkapatti", landmark: "Highway connecting village layout" },
    { name: "Agaram", landmark: "Thadicombu road village circle" },
    { name: "Athoor", landmark: "Kamarajar reservoir vicinity" },
    { name: "Sriram Nagar", landmark: "Quiet residential layout" },
    { name: "Kurumbapatti", landmark: "Sirumalai slopes village" }
  ],

  // 5 Main Appliance Categories
  services: [
    {
      id: "ac",
      title: "AC Repair & Service",
      tamilPrompt: "AC cooling kammiya irukka? Water leak aagudha?",
      url: "ac-repair-service-in-dindigul.html",
      shortDesc: "Split & window AC cooling issues, water leakage, gas inspection, startup faults & servicing."
    },
    {
      id: "fridge",
      title: "Refrigerator / Fridge Repair",
      tamilPrompt: "Fridge cooling proper-ah illa? Ice overflow aagudha?",
      url: "refrigerator-repair-service-in-dindigul.html",
      shortDesc: "Single door, double door & frost-free fridge cooling problems, thermostat check & compressor startup."
    },
    {
      id: "washing-machine",
      title: "Washing Machine Repair",
      tamilPrompt: "Washing machine-la water drain aagala? Drum rotate aagala?",
      url: "washing-machine/washing-machine/washing-machine-repair-service-in-dindigul.html",
      shortDesc: "Front load, top load & semi-automatic machine spin issues, drainage failure, noise & error codes."
    },
    {
      id: "tv",
      title: "TV Repair & Service",
      tamilPrompt: "TV display problem irukka? Sound varudhu picture varala?",
      url: "tv-repair-service-in-dindigul.html",
      shortDesc: "LED, LCD & Smart TV sound but no picture, blank screen, backlight issue, power failure & HDMI faults."
    },
    {
      id: "microwave",
      title: "Microwave Oven Repair",
      tamilPrompt: "Microwave on aagudhu aana heat aagala?",
      url: "microwave-repair-service-in-dindigul.html",
      shortDesc: "Solo, grill & convection microwave heating issues, turntable not rotating, sparking & touch pad problem."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
