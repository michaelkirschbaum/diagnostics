/**
 * Created by brian on 1/3/17.
 */
const en = {
  general: {
    continue: ' Continue ',
  },
  login: {
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    marketingTitle1a: 'CARFIT PULS',
    marketingTitle1b: 'The vibration sensor',
    marketingText1a: 'CARFIT monitors your car\'s vibrations at the steering wheel, like a doctor monitors your pulse.',
    marketingTitle2a: 'Works with any car',
    marketingText2a: 'The CARFIT PULS is easily installed on any steering wheel.',
    marketingText2b: 'The CARFIT PULS wakes automatically whenever you get into your car and goes to sleep after each drive to save power. The battery lasts for up to 2 years.',
    marketingTitle3a: 'Service made simple',
    marketingText3a: 'Scheduling service is just a button press away.',
    marketingText3b: 'The CARFIT PULS notifies you when it is time to service car.',
    connect: 'CONNECT',
    welcome1: 'Guaranteed! You will never be alone in your car.',
    welcome2: '24 hours a day, 7 days a week',
    welcome3: 'The use you make of it will be our offer of tomorrow',
    attention: 'CAUTION: Application prototype for test. Get your registration number to complete the registration',
    connection_error: 'Connect Device',
    reset: 'Puls device needs to be reset. Hold the device button for 10 seconds to continue.',
    noneFound: 'No devices found. Turn on a device by clicking it.',
    bluetooth: 'Bluetooth is off. Turn on to continue.',
    login: 'Login',
    success: 'You are now logged in.',
    failure: 'Log in failed. Try again.'
  },
  verification: { // is this still required with Auth0?
    verification: 'Verification',
    welcome: 'Welcome to CARFIT!',
    instructions: 'A verification code to activate your account has been sent to:',
    pleaseEnterCode: 'Please enter the code below.',
    code: 'Code',
    resend: 'Resend Code',
  },
  resetPassword: { // is this still required with Auth0?
    instructions: 'A password reset verification code has been sent to:',
    instructions2: 'Please enter the code below:',
    instructions3: 'Please enter your new password below:',
    newPassword: 'New Password',
    retypePassword: 'Retype Password',
    incorrect: 'Password is incorrect',
  },
  welcome: {
    welcome: 'Welcome',
    connect: 'Connect',
    welcomeToCarfit: 'Welcome to CARFIT!',
    helloMiles: 'Hello, I am Miles.',
    welcomeParagraph1: 'From now on I will be the voice of your car. Feel free to chat with me later!',
    welcomeParagraph2: 'CARFIT monitors your car\'s vibrations at the steering wheel, like a doctor monitors your pulse.',
    welcomeParagraph3: 'I will now introduce you to the CARFIT app and walk you through the following steps:',
//    welcomeParagraph4: 'We will go through a quick guide for the following steps:',
    step1: 'CONNECT ',
    step2: 'INSTALL ',
    step3: 'APP ',
    stepDescription1: ' your CARFIT PULS sensor',
    stepDescription2: ' overview',
  },
  instructions: {
    enableBattery: 'Enable battery power',
    pullTab: 'Pull the plastic tab out of the CARFIT PULS sensor.',
    activateBluetooth: 'Activate Bluetooth',
    turnOnBLE: 'Turn your phone\'s Bluetooth on.',
    resetConnection: 'Reset connection',
    pressAndHold: 'Press & hold the center of the CARFIT PULS sensor for 10s to reset the sensor.',
    blePairing: 'Tap button to turn it on.',
    ensurePairing: 'Ensure the CARFIT PULS sensor in pairing mode with the center LED flashing.',
    selectBLE: 'Select your CARFIT PULS sensor from the list to connect.',
  },
  device: {
    connect: 'CONNECT',
    update: 'Puls sensor update:'
  },
  carInstallation: {
    installation: 'Installation',
    // Page One
    inCarInstallation: 'In-car installation',
    header1: 'Go to your car',
    message1: 'CARFIT PULS in-car installation',
    header2: 'Activate adhesive',
    message2: 'remove protective tape',
    header3: 'Position CARFIT PULS sensor',
    message3: 'stick it on the steering wheel',
    header4: 'Register car',
    message4: 'enter LICENSE PLATE or VIN',
    header5: 'Configure your car',
    message5: 'verify & add your car\'s details',
    // Page two
    detail2a: 'Remove the protective tape from the bottom of the CARFIT PULS sensor',
    // Page three
    detail3a: 'Place the CARFIT PULS sensor on the top of the steering wheel hub with the lights facing the driver',
    detail3b: 'Ensure that the sensor is flat when the steering wheel is horizontal.',
    // Page four
    registerCar: 'registerCar',
    enterLicensePlate: 'Enter by license plate',
    enterRegion: 'Select region here', // Need to turn this into a picker.
    enterByVin: 'Enter by VIN',
    enterVin: 'Enter VIN here',
    enterByLicensePlate: 'Enter by license plate',
    success: 'Car identified!',
    failure: 'Not my car',
    notFound: 'Car could not be identified',
    retry: 'Try again',
    support: 'Contact CARFIT Support',
    connect: 'CONNECT',
    connectError: 'Device failed to connect.'
  },
  vinLocations: {
    vinLocations: 'VIN locations',
    message1: 'To properly register your car CARFIT PULS needs your car’s VIN or license plate.',
    possibleLocations: 'Possible locations for the VIN:',
    driverDoor: 'Driver\'s side door jam or post',
    driverWindow: 'Driver\'s side front windshield',
    carTitle: 'Car title or documentation',
  },
  overview: {
    overview: 'Overview',
    header1: 'CARFIT PULS sensor',
    message1: 'tracks your cars health',
    header2: 'CARFIT concierge',
    message2: 'request a service call',
    header3: 'askMiles',
    message3: 'Miles the BOT and customer \nsupport',
    header4: 'Usage',
    message4: 'your recent drives',
    header5: 'Service',
    message5: 'alerts, schedule and history',
    header6: 'Car details',
    message6: 'view and edit your car’s details',
    header7: 'Settings',
    message7: 'your cars (car details), sensors, \naccount, demo mode & more',
  },
  home: {
    alert: 'ALERTS',
    usage: 'USAGE',
    value: 'VALUE',
    serviceNeeded: 'Service needed:',
    lastTrip: 'Last trip:',
    trending: 'Trending:',
    comingSoon: 'COMING SOON:',
    mileage: 'Enter current mileage here',
    kilometrage: 'Enter current kilometrage here',
    button: 'NEVER ALONE!',
    click: 'Push on the button or here:',
    updateMi: 'UPDATE CAR MILEAGE',
    updateKm: 'UPDATE CAR KILOMETRAGE',
    noTrips: 'You haven\'t taken any trips yet.',
    support: 'SUPPORT',
    call: 'A representative will call you shortly.',
    supportError: 'Request failed. Try again.',
    save: 'Save changes',
    cancel: 'Cancel',
    error: 'Not available'
  },
  settings: {
    settings: 'Settings',
    myCars: 'MY CARS',
    sensors: 'SENSORS',
    myAccount: 'MY ACCOUNT',
    drive: 'DRIVE',
    useWiFi: 'USE WIFI',
    terms: 'Terms of use',
    privacy: 'Privacy',
    copyright: '© CARFIT 2017',
  },
  myCars: {
    myCars: 'My cars',
    active: 'Active',
    changeMyCar: 'Change my car',
    notAvailable: 'Not available',
  },
  details: {
    details: 'Details',
    displayInfo: 'DISPLAY INFO',
    name: 'Name',
    mileage: 'Mileage',
    image: 'Image',
    connectedSensors: 'CONNECTED SENSORS',
    carfit: 'CARFIT',
    phone: 'Phone',
    info: 'INFO',
    year: 'Year',
    make: 'Make',
    model: 'Model',
    mpgCity: 'MPG city',
    mpgHighway: 'MPG highway',
    license: 'License plate',
    vin: 'VIN',
    drivenWheels: 'Driven wheels',
    trimLevel: 'Trim level',
    doors: 'Number of doors',
  },
  account: {
    accountType: 'Account Type',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email address',
    identifier: 'User ID',
    password: 'Password',
    changePassword: 'Change Password',
    myAccount: 'My account'
  },
  legal: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Use'
  },
  register: {
    signin: 'Sign in',
    first: 'First name',
    last: 'Last name',
    email: 'name@example.com',
    phone: '+XX XX XX XX XX X'
  },
  countries: {
    al: "Albania",
    ad: "Andorra",
    at: "Austria",
    by: "Belarus",
    be: "Belgium",
    ba: "Bosnia",
    bg: "Bulgaria",
    hr: "Croatia",
    cy: "Cyprus",
    cz: "Czech Republic",
    dk: "Denmark",
    ee: "Estonia",
    fo: "Faroe Islands",
    fi: "Finland",
    fr: "France",
    de: "Germany",
    gi: "Gibraltar",
    gr: "Greece",
    hu: "Hungary",
    is: "Iceland",
    ie: "Ireland",
    im: "Isle of Man",
    it: "Italy",
    rs: "Kosovo",
    lv: "Latvia",
    li: "Liechtenstein",
    lt: "Lithuania",
    lu: "Luxembourg",
    mk: "Macedonia",
    mt: "Malta",
    md: "Moldova",
    mc: "Monaco",
    me: "Montenegro",
    nl: "Netherlands",
    no: "Norway",
    pl: "Poland",
    pt: "Portugal",
    ro: "Romania",
    sm: "San Marino",
    rs: "Serbia",
    sk: "Slovakia",
    si: "Slovenia",
    es: "Spain",
    si: "Sweden",
    ch: "Switzerland",
    ua: "Ukraine",
    gb: "United Kingdom",
    va: "Vatican City"
  },
  terms: {
    header: "CARFIT CORP. Terms of Service",
    terms: "1. Terms",
    termsBody: "By accessing the CARFIT app or any CARFIT websites including but not limited to the website at http://www.car.fit, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
    license: "2. Use License",
    licenseBody: "Permission is granted to temporarily download one copy of the materials (information or software) on CARFIT CORP.s websites or from any of the approved download locations for said materials including the App Store and Play Store for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\
    i.   modify or copy the materials;\n\
    ii.  use the materials for any commercial purpose,\n\
         or for any public display (commercial or non-\n\
         commercial);\n\
    iii. attempt to decompile or reverse engineer any \n\
         software contained on CARFIT CORP.'s\n\
         website;\n\
    iv.  remove any copyright or other proprietary\n\
         notations from the materials; or\n\
    v.   transfer the materials to another person or\n\
         \"mirror\" the materials on any other server.\n\n\
This license shall automatically terminate if you violate any of these restrictions and may be terminated by CARFIT CORP. at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.",
    disclaimer: "3. Disclaimer",
    disclaimerBody: "The materials on CARFIT CORP.s website are provided on an 'as is' basis. CARFIT CORP. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. \n\n\
Further, CARFIT CORP. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
    limitations: "4. Limitations",
    limitationsBody: "In no event shall CARFIT CORP. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CARFIT CORP.s website, even if CARFIT CORP. or a CARFIT CORP. authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or   limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
    accuracy: "5. Accuracy of materials",
    accuracyBody: "The materials appearing on CARFIT CORP.s website could include technical, typographical, or photographic errors. CARFIT CORP. does not warrant that any of the materials on its website are accurate, complete or current. CARFIT CORP. may make changes to the materials contained on its website at any time without notice. However CARFIT CORP. does not make any commitment to update the materials.",
    links: "6. Links",
    linksBody: "CARFIT CORP. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CARFIT CORP. of the site. Use of any such linked website is at the users own risk.",
    modifications: "7. Modifications",
    modificationsBody: "CARFIT CORP. may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.",
    law: "8. Governing Law",
    lawBody: "These terms and conditions are governed by and construed in accordance with the laws of Washington and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
    privacy: "Privacy Policy",
    privacyBody: "Your privacy is important to us.\n\
It is CARFIT CORP.s policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. The privacy policy may be found at \/\/app.carfitservices.com/#/privacy-policy.\n\n\
We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. CARFIT CORP. may change this privacy policy from time to time at CARFIT CORP.s sole discretion.",
    copyright: "Copyright; 2016 CARFIT CORP. All Rights Reserved"
  },
  privacy: {
    privacy: "Privacy Policy",
    privacyBody: "This website is the property of CARFIT CORP. We take the privacy of all visitors to this website very seriously and therefore set out in this privacy policy our position regarding certain privacy matters.\n\n\
This privacy policy covers all data that is shared by a visitor with us whether via our website, including but not limited to carfit.com, askmiles.com and carfit.freshdesk.com directly, via the CARFIT app or any  other CARFIT CORP app, or via email, or via the Ask Miles bot.\n\n\
This website privacy policy has been is occasionally updated by us so please do re-review it from time to time.\n\n\
Our Privacy Policy provides an explanation as to what happens to any personal data that you share with us, or that we collect from you either directly via this website, via email, or via the Ask Miles bot.",
    collection: "Information We Collect",
    collectionBody: "In operating our website we may collect and process the following data about you:\n\n\
Details of your visits to our website and the resources that you access, including, but not limited to, traffic data, location data, weblog statistics, interactions with the CARFIT App or other CARFIT CORP Apps and other communication data.\n\n\
Information that you provide by filling in forms on our website, via in the CARFIT App or other CARFIT CORP Apps, such as when you register to receive information, a newsletter etc., or make a purchase.\n\n\
Information provided to us when you communicate with us for any reason, including registering the CARFIT sensor, registering the CARFIT app, adding a car, or interacting with any other CARFIT Apps or services, or filling-out warranty registration information, posting on Facebook, Kickstarter, or Twitter, or communicating with us via any other channel.\n\n\
Information provided to us about your car, your car's maintenance records, your car's maintenance history, your cars usage and wear data, and any other information pertaining to the VIN or your car.",
    cookies: "Use of Cookies",
    cookiesBody: "On occasion, we may gather information about your computer for our services and to provide statistical information regarding the use of our website to our advertisers.\n\n\
Such information will not identify you personally it is statistical data about our visitors and their use of our site. This statistical data does not identify any personal details whatsoever. It is used by use to analyse how visitors to connectedevice.com, connectedwatch.com, cogitowatch.com, cookoowatch.com and connectedevice.freshdesk.com  interact with the website so that we can continue to develop this website and make it a better experience for our visitors.\n\n\
We may gather information about your general internet use by using a cookie file that is downloaded to your computer. Where used, these cookies are downloaded to your computer automatically. This cookie file is stored on the hard drive of your computer as cookies contain information that is transferred to your computers hard drive. They help us to improve our website and the service that we provide to you.\n\n\
All computers have the ability to decline cookies. This can be done by activating the setting on your browser which enables you to decline the cookies. Please note that should you choose to decline cookies, you may be unable to access particular parts of our website.\n\n\
Our advertisers may also use cookies, over which we have no control. Such cookies (if used) would be downloaded once you click on advertisements on our website.",
    information: "Use of Your Information",
    informationBody: "The information that we collect and store relating to you is primarily used to enable us to provide our services to you, and to improve your customer experience through enhancements to our website, services, apps, bot, and devices. In addition, we may use the information for the following purposes:\n\n\
To provide you with information requested from us, relating to our products or services. To provide information on other products which we feel may be of interest to you, where you have consented to receive such information.\n\n\
To meet our contractual commitments to you.\n\n\
To notify you about issues pertianing to your car, your usage, your car's upcoming service requirements, your car's current and project resale value, or any other information pertaining to your car that may be relevant to you.\n\n\
To notify you about any changes to our apps or websites, such as improvements or service/product changes, that may affect our service.\n\n\
If you are an existing customer, we may contact you with information about goods and services similar to those which were the subject of a previous sale to you.\n\n\
Further, we may use your data, or permit selected third parties to use your data, so that you can be provided with information about unrelated goods and services which we consider may be of interest to you. We or they may contact you about these goods and services by any of the methods that you consented at the time your information was collected.\n\n\
If you are a new customer, we will only contact you or allow third parties to contact you only when you have provided consent and only by those means you provided consent for.\n\n\
If you do not want us to use your data for our or third parties you will have the opportunity to withhold your consent to this when you provide your details to us on the form on which we collect your data.\n\n\
Please be advised that we do not reveal information about identifiable individuals to our advertisers unless previously consented to by you.  With your consent, however, we will connect you with a service provider who could help resolve issues pertaining to your vehicle.\n\n\
On occasion, we may provide advertisers or service providers with aggregate statistical information about our visitors or users, however, in such cases, the information will be anonymized and any personally identifiable information will be removed.",
    data: "Storing Your Personal Data",
    dataBody: "We may transfer data that we collect from you to locations outside of the United States of America or of the European Economic Area for processing and storing. Also, it may be  processed by staff�s operating outside the United States of America or the European Economic Area who work for us or for one of our suppliers. For example, such staff maybe engaged in the processing and concluding of your order, the processing of your payment details and the provision of support services.  By submitting your personal data, you agree to this transfer, storing or processing. We will take all reasonable steps to make sure that your data is treated securely and in agreement with this Privacy Policy.\n\n\
Data that is provided to us is stored on our secure servers. Details relating to any transactions entered into on our site will be encrypted to ensure its safety.\n\n\
Vehicle data and personally identifyable data is stored separately on secure servers.\n\n\
The transmission of information via the internet is not completely secure and therefore we cannot guarantee the security of data sent to us electronically and transmission of such datais therefore entirely at your own risk. Where we have given you (or where you have chosen) a password so that you can access certain parts of our site, you are responsible for keeping this password confidential.",
    disclosure: "Disclosing Your Information",
    disclosureBody: "Where applicable, we may disclose your personal information to any member of our group. This includes, where applicable, our subsidiaries, our holding company and its other subsidiaries (if any).\
We may also disclose your personal information to third parties:\n\n\
Where we sell any or all of our business and/or our assets to a third party.\n\n\
Where we are legally required to disclose your information.\n\n\
To assist fraud protection and minimise credit risk.",
    links: "Third Party Links",
    linksBody: "You mind find links to third party websites on our website. These websites should have their own privacy policies which you should check. We do not accept any responsibility or liability for their policies whatsoever as we have no control over them.",
    access: "Access To Information",
    accessBody: "The Data Protection Act 1998 gives you the right to access the information that we hold about you. Please note that any demand for access may be subject to payment of a fee of $25 USD which covers our costs in providing you with the information requested. Should you wish to receive details that we hold about you please contact us using the contact details below.",
    contact: "Contacting Us",
    contactBody: "We welcome any questions, comments or requests you may have regarding this Privacy Policy. Please do not hesitate to contact us at support@car.fit\n\n\
If you prefer to write to us then our contact address is:\n\
ATTN: Privacy Policy\n\
CARFIT CORP.\n\
16904 Juanita Drive NE #128,\n\
Kenmore, WA 98028",
    copyright: "Copyright; 2016 CARFIT CORP. All Rights Reserved"
  }
};
export default en;
