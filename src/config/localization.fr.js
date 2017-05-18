/**
 * Translated March 29, 2017.
 */
const fr = {
  general: {
    continue: 'Continuer',
  },
  login: {
    email: 'E-mail',
    password: 'Mot de passe',
    forgotPassword: 'Mot de passe oublié',
    marketingTitle1a: 'Capteur CARFIT PULS',
    marketingTitle1b: 'Le capteur de vibrations',
    marketingText1a: 'CARFIT surveille les vibrations au niveau du volant de votre véhicule, comme un médecin surveille votre pouls.',
    marketingTitle2a: 'Fonctionne avec toutes les voitures.',
    marketingText2a: 'Le capteur CARFIT PULS s\'installe très facilement sur n\'importe quel volant de voiture.',
    marketingText2b: 'Le capteur se réveille automatiquement dès que vous entrez dans votre véhicule et se met en veille après chaque trajet pour économiser de l\'énergie. La batterie interne a deux ans d\'autonomie.',
    marketingTitle3a: 'L\'entretien de votre véhicule rendu plus simple',
    marketingText3a: 'L\'entretien de votre véhicule est à portée de main.',
    marketingText3b: 'Le capteur CARFIT PULS vous prévient lorsqu\'une opération est à réaliser.',
    connect: 'CONNECT',
    welcome1: 'Promis, vous ne serez plus jamais seul en auto',
    welcome2: '24h/24 et 7j/7',
    welcome3: 'L\'utilisation que vous en ferez sera notre offre de demain !',
    attention: 'ATTENTION: Prototype d\'application pour test. Munissez-vous de votre numéro d\'immatriculation pour finaliser l\'inscription',
    connection_error: 'Connecter le capteur',
    reset: 'Le capteur Puls doit être réinitialisé. Maintenez la touche du capteur appuyé pendant 10 secondes pour continuer.',
    noneFound: 'Aucun périphérique trouvé. Allumez un périphérique en cliquant dessus.',
    bluetooth: 'Bluetooth est éteint. Activez pour continuer.',
    login: 'S\'identifier',
    success: 'Vous êtes maintenant connecté.',
    failure: 'Échec de la connexion. Réessayer.'
  },
  verification: { // is this still required with Auth0?
    verification: 'Vérification',
    welcome: 'Bienvenue chez CARFIT !',
    instructions: 'Un code de validation vient de vous être envoyé.',
    pleaseEnterCode: 'Veuillez entrer le code ci-dessous.',
    code: 'Code',
    resend: 'Renvoyer le code.',
  },
  resetPassword: { // is this still required with Auth0?
    instructions: 'Un code de vérification pour la réinitialisation de votre mot de passe a été envoyé.',
    instructions2: 'Veuillez entrer le code ci-dessous.',
    instructions3: 'Veuillez entrer votre nouveau mot de passe ci-dessous.',
    newPassword: 'Nouveau mot de passe',
    retypePassword: 'Confirmez votre mot de passe',
    incorrect: 'Mot de passe incorrect',
  },
  welcome: {
    welcome: 'Bienvenue',
    connect: 'Se connecter',
    welcomeToCarfit: 'Bienvenue chez CARFIT!',
    helloMiles: 'Bonjour, je suis Miles.',
    welcomeParagraph1: 'Je suis la voix de votre voiture, vous pouvez discuter avec moi.',
    welcomeParagraph2: 'CARFIT surveille les vibrations au niveau du volant de votre véhicule, comme un médecin surveille votre pouls.',
    welcomeParagraph3: 'Je vais vous présenter l\'application CARFIT et vous guider vers les prochaines étapes.',
//    welcomeParagraph4: 'Guide rapide:',
    step1: 'Se connecter ',
    step2: 'Installer ',
    step3: 'Vue d\'ensemble',
    stepDescription1: ' à votre capteur CARFIT PULS',
    stepDescription2: ' de l\'application'
  },
  instructions: {
    enableBattery: 'Activez la batterie.',
    pullTab: 'Retirez la languette en plastique située en-dessous du capteur.',
    activateBluetooth: 'Activer le Bluetooth.',
    turnOnBLE: 'Activez le Bluetooth de votre téléphone.',
    resetConnection: 'Réinitialiser la connexion.',
    pressAndHold: 'Maintenez pressé le bouton situé sur le dessus du capteur pendant 10 secondes pour le réinitialiser.',
    blePairing: 'Appuyez sur le bouton pour l\'allumer.',
    ensurePairing: 'S\'assurer que le capteur est en mode appairage, avec la LED centrale clignotante.',
    selectBLE: 'Sélectionner le capteur CARFIT PULS dans la liste.',
  },
  device: {
    connect: '',
    firmware: '',
    updateComplete: '',
    percent: ''
  },
  carInstallation: {
    installation: 'Installation',
    // Page One
    inCarInstallation: 'Installation dans la voiture',
    header1: 'Allez dans votre voiture',
    message1: 'Installation du capteur CARFIT PULS dans votre voiture',
    header2: 'Préparez l\'adhésif',
    message2: 'Retirez la protection de l\'adhésif',
    header3: 'Positionnez le capteur',
    message3: 'Collez le capteur sur le volant',
    header4: 'Enregistrez votre véhicule',
    message4: 'Entrez votre plaque d\'immatriculation ou votre VIN',
    header5: 'Configurez votre véhicule',
    message5: 'Vérifiez et ajoutez des précisions',
    // Page two
    detail2a: 'Retirez la protection de l\'adhésif situé sous le capteur',
    // Page three
    detail3a: 'Collez le capteur sur le dessus du moyeu du volant, avec les LED face au conducteur.',
    detail3b: 'Assurez-vous que le capteur est bien horizontal lorsque le volant est droit.',
    // Page four
    registerCar: 'Enregistrez votre véhicule',
    enterLicensePlate: 'Entrez votre numéro d\'immatriculation',
    enterRegion: 'Sélectionnez la région ici',
    enterByVin: 'S\'enregistrer par le VIN',
    enterVin: 'Entrez votre VIN',
    enterByLicensePlate: 'S\'enregistrer par le numéro d\'immatriculation',
    success: 'Voiture identifiée!',
    failure: 'Pas ma voiture',
    notFound: 'La voiture n\'a pas pu être identifiée',
    retry: 'Réessayez',
    support: 'Contactez le support CARFIT',
    connect: 'RELIER',
    connectError: 'Le périphérique n\'a pas pu se connecter.'
  },
  vinLocations: {
    vinLocations: 'Trouvez votre VIN',
    message1: 'Pour enregistrer correctement votre véhicule, CARFIT a besoin de son immatriculation ou de son VIN.',
    possibleLocations: 'Emplacements possibles du VIN:',
    driverDoor: 'Autour de la porte conducteur',
    driverWindow: 'En bas du pare-brise, à l\'extérieur',
    carTitle: 'Sur la carte grise, champ E, ou sur la vignette du contrôle technique',
  },
  overview: {
    overview: 'Overview',
    header1: 'Capteur CARFIT PULS',
    message1: 'Surveille l\'état de santé de votre véhicule',
    header2: 'concierge CARFIT',
    message2: 'appelez-moi',
    header3: 'askMiles',
    message3: 'Miles le Bot et assistance',
    header4: 'Conduite',
    message4: 'Vos derniers trajets',
    header5: 'Entretien',
    message5: 'Historique, alertes, entretiens à venir',
    header6: 'Votre véhicule',
    message6: 'Voir et modifier votre véhicule',
    header7: 'Paramètres',
    message7: 'Véhicules, capteurs, compte, mode démo…',
  },
  home: {
    alert: 'Alertes',
    usage: 'Conduite',
    value: 'Valeur',
    serviceNeeded: 'Opération nécessaire',
    lastTrip: 'Dernier trajet',
    trending: 'Tendance',
    comingSoon: 'A venir',
    mileage: 'Entrez le kilométrage de votre véhicule ici.',
    button: 'Plus Jamais Seul!',
    click: 'J\'appuie sur le bouton ou ici:',
    updateMi: 'Actualiser le kilométrage de la voiture',
    updateKm: 'Actualiser le kilométrage de voiture',
    noTrips: 'Vous n\'avez pas encore effectué de trajet.',
    support: 'SOUTIEN',
    call: 'Vous allez être rappelé très vite.',
    supportError: 'Demande échoué. Réessayer.',
    save: 'Sauvegarder les modifications',
    cancel: 'Annuler',
    error: 'Non disponible'
  },
  settings: {
    settings: 'Paramètres',
    myCars: 'Mes voitures',
    sensors: 'Capteurs',
    myAccount: 'Mon compte',
    drive: 'Conduite',
    useWiFi: 'Utiliser le wifi seulement',
    terms: 'Conditions générales d\'utilisation',
    privacy: 'Politique de confidentialité',
    copyright: '© CARFIT 2017',
  },
  myCars: {
    myCars: 'Mes véhicules',
    active: 'Véhicule active',
    changeMyCar: 'Changer de véhicule',
    notAvailable: 'Non disponible',
    connected:  'Connecté',
    disconnected: 'Débranché',
  },
  details: {
    details: 'Détails',
    displayInfo: 'Information du véhicule',
    name: 'Nom',
    mileage: 'Kilométrage',
    image: 'Photo',

    connectedSensors: 'Capteurs connectés',
    carfit: 'CARFIT',
    phone: 'Téléphone',

    info: 'Informations',
    year: 'Année',
    make: 'Constructeur',
    model: 'Modèle',
    mpgCity: 'Consommation urbaine (L/100km)',
    mpgHighway: 'Consommation autoroute (L/100km)',
    license: 'Immatriculation',
    vin: 'VIN',
    drivenWheels: 'Roues motrices',
    trimLevel: 'Niveau de finition',
    doors: 'Nombre de portes',
  },
  account: {
    accountType: 'Type de compte',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Adresse e-mail',
    identifier: 'Identifiant',
    password: 'Mot de passe',
    changePassword: 'Changer le mot de passe',
    myAccount: 'Mon compte'
  },
  legal: {
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales d\'utilisation'
  },
  register: {
    signin: 'Se connecter',
    first: 'Prénom',
    last: 'Nom',
    email: 'name@example.com',
    phoneInput: '+XX XX XX XX XX X',
    phone: 'Téléphone'
  },
  countries: {
    al: "l'Albanie",
    ad: "l'Andorre",
    at: "l'Austriche",
    by: "la Biélorussie",
    be: "la Belgique",
    ba: "la Bosnie-Herzégovine",
    bg: "la Bulgarie",
    hr: "la Croatie",
    cy: "Chypre",
    cz: "la République tchèque",
    dk: "le Danemark",
    ee: "l'Estonie",
    fo: "Îles Féroé",
    fi: "la Finlande",
    fr: "la France",
    de: "l'Allemagne",
    gi: "Gibraltar",
    gr: "la Grèce",
    hu: "la Hongrie",
    is: "l'Islande",
    ie: "l'Irlande",
    im: "Île d'homme",
    it: "l'Italie",
    rs: "Kosovo",
    lv: "la Lettonie",
    li: "le Liechtenstein",
    lt: "la Lituanie",
    lu: "le Luxembourg",
    mk: "la Macédoine",
    mt: "Malte",
    md: "la Moldavie",
    mc: "Monaco",
    me: "le Monténégro",
    nl: "les Pays-Bas",
    no: "la Norvège",
    pl: "la Pologne ",
    pt: "le Portugal",
    ro: "la Roumanie",
    sm: "Saint-Marin",
    rs: "la Serbie",
    sk: "la Slovaquie",
    si: "la Slovénie",
    es: "l'Espagne",
    se: "la Suède ",
    ch: "la Suisse ",
    ua: "l'Ukraine",
    gb: "le Royaume-Uni",
    va: "le Vatican",
    rs: "la Yougoslavie"
  },
  terms: {
    header: "",
    terms: "",
    termsBody: "",
    license: "",
    licenseBody: "",
    disclaimer: "",
    disclaimerBody: "",
    limitations: "",
    limitationsBody: "",
    accuracy: "",
    accuracyBody: "",
    links: "",
    linksBody: "",
    modifications: "",
    modificationsBody: "",
    law: "",
    lawBody: "",
    privacy: "",
    privacyBody: "",
    copyright: ""
  },
  privacy: {
    privacy: "",
    privacyBody: "",
    collection: "",
    collectionBody: "",
    cookies: "",
    cookiesBody: "",
    information: "",
    informatioanaBody: "",
    data: "",
    dataBody: "",
    disclosure: "",
    disclosureBody: "",
    links: "",
    linksBody: "",
    access: "",
    accessBody: "",
    contact: "",
    contactBody: "",
    copyright: ""
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
export default fr;
