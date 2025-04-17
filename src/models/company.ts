export class Company {
  dateCreationEtablissement: Date;
  siren?: string;
  siret: string;
  categorieEntreprise?: string;
  activitePrincipaleUniteLegale?: string;
  denominationUniteLegale?: string;
  categorieJuridiqueUniteLegale?: string;
  libelleVoieEtablissement?: string;
  numeroVoieEtablissement?: string;
  typeVoieEtablissement?: string;
  libelleCommuneEtablissement?: string;

  get adresseEtablissement() {
    return `${this.numeroVoieEtablissement ?? ''} ${this.typeVoieEtablissement ?? ''} ${this.libelleVoieEtablissement ?? ''}, ${
      this.libelleCommuneEtablissement ?? ''
    }`;
  }
  constructor({ uniteLegale, adresseEtablissement, siren, siret, dateCreationEtablissement }: any) {
    const { categorieEntreprise, activitePrincipaleUniteLegale, denominationUniteLegale, categorieJuridiqueUniteLegale } = uniteLegale;
    const { libelleVoieEtablissement, numeroVoieEtablissement, typeVoieEtablissement, libelleCommuneEtablissement } = adresseEtablissement;
    Object.assign(this, {
      categorieEntreprise,
      activitePrincipaleUniteLegale,
      denominationUniteLegale,
      categorieJuridiqueUniteLegale,
      libelleVoieEtablissement,
      numeroVoieEtablissement,
      typeVoieEtablissement,
      libelleCommuneEtablissement,
    });
    this.dateCreationEtablissement = new Date(dateCreationEtablissement);
    this.siren = siren;
    this.siret = siret;
  }
}
