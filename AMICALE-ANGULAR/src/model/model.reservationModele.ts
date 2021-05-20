export class ReservationModel {

  nature: string = "";
  matricule: string = "";
  nom: string = "";
  affectation: string = "";
  num_TEL_FIX: string = "";
  num_TEL_PORT: string = "";
  nom_HOTEL: string = "";
  ville: string = "";
  classement: string = "";
  date_DEBUT: string = "";
  date_FIN: string = "";
  nb_JOURS: string = "";
  type_RESERVATION: string = "";
  nb_CHAMBRES: string = "";
  nb_LITS: string = "";
  type_CHAMBRE: string = "";
  nb_PERSONNE: string = "";
  nb_ADULTES: string = "";
  nb_ENFANT: string = "";
  date_saisie: Date;
  periode: string;
  type_res: string;
  commentaires:string="";
  ageEnfant:string=""
}
