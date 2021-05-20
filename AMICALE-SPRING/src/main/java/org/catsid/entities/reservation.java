package org.catsid.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AMICALE_RESERVATION")
public class reservation implements Serializable {

	@Id
	private Integer ID_RESERVATION;
	private String NATURE;
	private String MATRICULE;
	private String NOM;
	private String AFFECTATION;
	private String NUM_TEL_FIX;
	private String NUM_TEL_PORT;
	private String NOM_HOTEL;
	private String VILLE;
	private String CLASSEMENT;
	private String DATE_DEBUT;
	private String DATE_FIN;
	private String NB_JOURS;
	private String TYPE_RESERVATION;
	private String NB_CHAMBRES;
	private String NB_LITS;
	private String TYPE_CHAMBRE;
	private String NB_PERSON;
	private String NB_ADULTES;
	private String NB_ENFANT;
	private String AgeEnfant;
	private String PERIODE;
	private String TYPE_RES;
	private String COMMENTAIRES;

	public reservation() {
		super();
	}
	




	public String getAgeEnfant() {
		return AgeEnfant;
	}





	public void setAgeEnfant(String ageEnfant) {
		AgeEnfant = ageEnfant;
	}





	public Integer getID_RESERVATION() {
		return ID_RESERVATION;
	}

	public void setID_RESERVATION(Integer iD_RESERVATION) {
		ID_RESERVATION = iD_RESERVATION;
	}

	public String getNATURE() {
		return NATURE;
	}

	public void setNATURE(String nATURE) {
		NATURE = nATURE;
	}

	public String getMATRICULE() {
		return MATRICULE;
	}

	public void setMATRICULE(String mATRICULE) {
		MATRICULE = mATRICULE;
	}

	public String getNOM() {
		return NOM;
	}

	public void setNOM(String nOM) {
		NOM = nOM;
	}

	public String getAFFECTATION() {
		return AFFECTATION;
	}

	public void setAFFECTATION(String aFFECTATION) {
		AFFECTATION = aFFECTATION;
	}

	public String getNUM_TEL_FIX() {
		return NUM_TEL_FIX;
	}

	public void setNUM_TEL_FIX(String nUM_TEL_FIX) {
		NUM_TEL_FIX = nUM_TEL_FIX;
	}

	public String getNUM_TEL_PORT() {
		return NUM_TEL_PORT;
	}

	public void setNUM_TEL_PORT(String nUM_TEL_PORT) {
		NUM_TEL_PORT = nUM_TEL_PORT;
	}

	public String getNOM_HOTEL() {
		return NOM_HOTEL;
	}

	public void setNOM_HOTEL(String nOM_HOTEL) {
		NOM_HOTEL = nOM_HOTEL;
	}

	public String getVILLE() {
		return VILLE;
	}

	public void setVILLE(String vILLE) {
		VILLE = vILLE;
	}

	public String getCLASSEMENT() {
		return CLASSEMENT;
	}

	public void setCLASSEMENT(String cLASSEMENT) {
		CLASSEMENT = cLASSEMENT;
	}

	public String getDATE_DEBUT() {
		return DATE_DEBUT;
	}

	public void setDATE_DEBUT(String dATE_DEBUT) {
		DATE_DEBUT = dATE_DEBUT;
	}

	public String getDATE_FIN() {
		return DATE_FIN;
	}

	public void setDATE_FIN(String dATE_FIN) {
		DATE_FIN = dATE_FIN;
	}

	public String getNB_JOURS() {
		return NB_JOURS;
	}

	public void setNB_JOURS(String nB_JOURS) {
		NB_JOURS = nB_JOURS;
	}

	public String getTYPE_RESERVATION() {
		return TYPE_RESERVATION;
	}

	public void setTYPE_RESERVATION(String tYPE_RESERVATION) {
		TYPE_RESERVATION = tYPE_RESERVATION;
	}

	public String getNB_CHAMBRES() {
		return NB_CHAMBRES;
	}

	public void setNB_CHAMBRES(String nB_CHAMBRES) {
		NB_CHAMBRES = nB_CHAMBRES;
	}

	public String getNB_LITS() {
		return NB_LITS;
	}

	public void setNB_LITS(String nB_LITS) {
		NB_LITS = nB_LITS;
	}

	public String getTYPE_CHAMBRE() {
		return TYPE_CHAMBRE;
	}

	public void setTYPE_CHAMBRE(String tYPE_CHAMBRE) {
		TYPE_CHAMBRE = tYPE_CHAMBRE;
	}

	public String getNB_PERSON() {
		return NB_PERSON;
	}

	public void setNB_PERSON(String nB_PERSON) {
		NB_PERSON = nB_PERSON;
	}

	public String getNB_ADULTES() {
		return NB_ADULTES;
	}

	public void setNB_ADULTES(String nB_ADULTES) {
		NB_ADULTES = nB_ADULTES;
	}

	public String getNB_ENFANT() {
		return NB_ENFANT;
	}

	public void setNB_ENFANT(String nB_ENFANT) {
		NB_ENFANT = nB_ENFANT;
	}

	public String getPERIODE() {
		return PERIODE;
	}

	public void setPERIODE(String pERIODE) {
		PERIODE = pERIODE;
	}

	public String getTYPE_RES() {
		return TYPE_RES;
	}

	public void setTYPE_RES(String tYPE_RES) {
		TYPE_RES = tYPE_RES;
	}

	public String getCOMMENTAIRES() {
		return COMMENTAIRES;
	}

	public void setCOMMENTAIRES(String cOMMENTAIRES) {
		COMMENTAIRES = cOMMENTAIRES;
	}

	@Override
	public String toString() {
		return "reservation [ID_RESERVATION=" + ID_RESERVATION + ", NATURE=" + NATURE + ", MATRICULE=" + MATRICULE
				+ ", NOM=" + NOM + ", AFFECTATION=" + AFFECTATION + ", NUM_TEL_FIX=" + NUM_TEL_FIX + ", NUM_TEL_PORT="
				+ NUM_TEL_PORT + ", NOM_HOTEL=" + NOM_HOTEL + ", VILLE=" + VILLE + ", CLASSEMENT=" + CLASSEMENT
				+ ", DATE_DEBUT=" + DATE_DEBUT + ", DATE_FIN=" + DATE_FIN + ", NB_JOURS=" + NB_JOURS
				+ ", TYPE_RESERVATION=" + TYPE_RESERVATION + ", NB_CHAMBRES=" + NB_CHAMBRES + ", NB_LITS=" + NB_LITS
				+ ", TYPE_CHAMBRE=" + TYPE_CHAMBRE + ", NB_PERSON=" + NB_PERSON + ", NB_ADULTES=" + NB_ADULTES
				+ ", NB_ENFANT=" + NB_ENFANT + ", PERIODE=" + PERIODE + ", TYPE_RES=" + TYPE_RES + ", COMMENTAIRES="
				+ COMMENTAIRES + "]";
	}

	
}
