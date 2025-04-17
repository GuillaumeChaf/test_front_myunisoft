export class Company {
  /**  */
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
    return `${this.numeroVoieEtablissement} ${this.typeVoieEtablissement} ${this.libelleVoieEtablissement}, ${this.libelleCommuneEtablissement}`.trim();
  }
  constructor(v: any) {
    const { categorieEntreprise, activitePrincipaleUniteLegale, denominationUniteLegale, categorieJuridiqueUniteLegale } = v.uniteLegale;

    const { libelleVoieEtablissement, numeroVoieEtablissement, typeVoieEtablissement, libelleCommuneEtablissement } = v.adresseEtablissement;
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
    this.dateCreationEtablissement = new Date(v.dateCreationEtablissement);
    this.siren = v.siren;
    this.siret = v.siret;
  }
}
