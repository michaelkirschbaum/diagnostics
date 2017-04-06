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
    marketingTitle1b: 'THE VIBRATION SENSOR',
    marketingText1a: 'CARFIT monitors your car\'s vibrations at the steering wheel, like a doctor monitors your pulse.',
    marketingTitle2a: 'Works with any car',
    marketingText2a: 'The CARFIT PULS is easily installed on any steering wheel.',
    marketingText2b: 'The CARFIT PULS wakes automatically whenever you get into your car and goes to sleep after each drive to save power. The battery lasts for up to 2 years.',
    marketingTitle3a: 'Service made simple',
    marketingText3a: 'Scheduling service is just a button press away.',
    marketingText3b: 'The CARFIT PULS notifies you when it is time to service car.'
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
    pressAndHold: 'Press & hold the center of the CARFIT PULS sensor for 10s to reset the sensor. \nTap to turn it on.',
    blePairing: 'Enable battery power',
    ensurePairing: 'Ensure the CARFIT PULS sensor in pairing mode with the center LED flashing.',
    selectBLE: 'Select your CARFIT PULS sensor from the list to connect.',
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
    enterRegion: 'Enter region here', // Need to turn this into a picker.
    enterByVin: 'Enter by VIN',
    enterVin: 'Enter VIN here',
    enterByLicensePlate: 'Enter by license plate',
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
    message3: 'Miles the BOT and customer support',
    header4: 'Usage',
    message4: 'your recent drives',
    header5: 'Service',
    message5: 'alerts, schedule and history',
    header6: 'Car details',
    message6: 'view and edit your car’s details',
    header7: 'Settings',
    message7: 'your cars (car details), sensors, account, demo mode & more',
  },
  home: {
    alert: 'ALERTS',
    usage: 'USAGE',
    value: 'VALUE',
    serviceNeeded: 'Service needed:',
    lastTrip: 'Last trip:',
    trending: 'Trending:',
    comingSoon: 'COMING SOON:',
    mileage: 'Enter your vehicle\'s current mileage here.',
    kilometrage: 'Enter your vehicle\'s current kilometrage here.'
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
  },
  details: {
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
  },
  legal: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Use'
  },
  register: {
    signin: 'Sign in'
  }
};
export default en;
