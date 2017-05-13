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
  }
};
export default fr;
