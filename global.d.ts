declare namespace MXMZ {
  /* WIZARD FORM */
  type PlanillaType = "natural" | "juridica";

  interface WizardState {
    currentStep: number;
    totalSteps: number;
    maxStepReached: number;
    isComplete: boolean;
    type: PlanillaType | null;
    formData: Partial<MXMZ.WizardPlanillaResult>;
  }

  interface InstitutionData {
    place: string;
    productionDate: string;
    inverstorNumber: string;
    brokerageHouseName: string;
    taxInformationRegistration: string;
    address: string;
  }

  interface PersonalData {
    firstName: string;
    lastName: string;
    birthPlace: string;
    birthDate: string;
    nationality: string;
    otherNationality: string;
    gender: string;
    maritalStatus: string;
    profession: string;
    spouseName: string;
    spouseIdentification: string;
    address: string;
    phones: string;
    email: string;
    identification: string;
    hasLegalRepresentative: "SI" | "NO";
    legalRepresentativeFullname: string;
    legalRepresentativeIdentification: string;
    legalRepresentativeBirthPlace: string;
    legalRepresentativeBirthDate: string;
  }

  interface PepProfile {
    pepStatus: string;
    isPep: "SI" | "NO";
    hasPepRelationship: "SI" | "NO";
    isPepAssociate: "SI" | "NO";
    entityName: string;
    position: string;
    country: string;
    relatedIdentification: string;
  }

  interface FinancialInformation {
    economicActivity: string;
    specificActivity: string;
    incomeSource: string[];

    companyRif?: string;
    companyRemuneration: string;
    companyName: string;
    companyAddress: string;
    companyPhone: string;
    companyRifType?: string;
    companyRifNumber?: string;
    companyRol: string;
    companyBranch: string;

    businessRif?: string;
    businessRifType?: string;
    businessRifNumber?: string;
    businessName: string;
    businessAddress: string;
    businessIncome: string;

    otherIncomeSource: string;
    otherIncomeAmount: string;
    monthlyIncome: string;
    monthlySales: string;
    monthlyExpenses: string;
    islrYear: string;
    islrAmount: string;
    bankReferences: Array<BankReferences>;
    stockholders: Array<Stockholders>;
    legalRepresentatives: Array<LegalRepresentatives>;
    providers: Array<Providers>;
    clients: Array<Clients>;
    relatedCompanies: Array<RelatedCompanies>;
  }

  type BankReferences = {
    institution: string;
    accountNumber: string;
    productType: string;
    averageAmount: string;
  };

  type Stockholders = {
    name: string;
    dniType: string;
    dniNumber: string;
    percentage: string;
    cargo: string;
    dni: string;

    esPep: string;
    relatedWithPep: string;
    nationality: string;
    address: string;

    entityName: string;
    position: string;
    country: string;
    relatedIdentification: string;
  };

  type LegalRepresentatives = {
    name: string;
    dniType: string;
    dniNumber: string;
    cargo: string;
    nationality: string;
    address: string;
    condition: string;
    esPep: string;
    relatedWithPep: string;
    dni: string;
  };

  type Providers = { name: string; location: string };
  type Clients = { name: string; location: string };
  type RelatedCompanies = {
    name: string;
    activity: string;
    rifType: string;
    rifNumber: string;
    rif: string;
  };

  interface InvestorProfile {
    knowledge: string;
    experience: string;
    inversionLevel: string;
    annualInversion: string;
    totalLiquidAssets: string;
    totalAssets: string;
  }

  interface ProductInformation {
    productName: string;
    productAmount: string;
    currency: string;
    monthlyAmount: string;
    sendOrReceiveFundsFromAbroad: string;

    originCountry: string;
    destinationCountry: string;
    virtualCurrencyUse: string;

    perTransferPurchase: string;
    perTransferSale: string;

    motives: string;
    fundsSource: string;
    fundsDestination: string;
  }

  //? JURIDICA INTERFACES
  interface EnterpriseIdentification {
    taxType: string;
    taxInformationRegistration: string;
    socialReason: string;
    tradename: string;
    economicActivity: string;
    specificActivity: string;

    officesNumber: string;
    employeesNumber: string;
    countryLargestPresence: string;

    registerData: {
      recordName: string;
      number: string;
      took: string;
      fol: string;
      date: string;
      socialCapital: string;
    };

    lastModification: {
      recordName: string;
      number: string;
      took: string;
      fol: string;
      date: string;
      socialCapital: string;
    };

    officialGazetteNumber: string;
    publicEntitiesDate: string;
    authority: string;
    ontCode: string;

    publicPhones: string;
    website: string;
    publicEntityEmail: string;
    publicEntityAddress: string;

    publicPhones2?: string;
    website2?: string;
    publicEntityEmail2?: string;
  }

  interface WizardPlanillaResult {
    accepted: boolean;
    institutionData: institutionData;

    //? NATURAL
    personalData?: PersonalData;
    pepProfile?: PepProfile;

    //? JURIDICA
    enterpriseIdentification?: EnterpriseIdentification;

    financialInformation: FinancialInformation;
    investorProfile: InvestorProfile;
    productInformation: ProductInformation;
  }
}
