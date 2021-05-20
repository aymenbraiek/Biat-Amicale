package org.catsid.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="AMICALE_RESIDENCE")
@Entity
public class Residence implements Serializable {

	@Id
	private String ID_RESIDENCE;
	private String VILLE;
	private String NOM_RESIDENCE;
	private String NOMBRE_LIT;
	private Long Nombre_PERSONNE;
	private Date DATE_FIN;
	private Date DATE_DEBUT;
	private String TYPE_PERIODE;
	

	public Residence() {
		super();
	}

	public String getVILLE() {
		return VILLE;
	}

	public void setVILLE(String vILLE) {
		VILLE = vILLE;
	}

	public String getNOM_RESIDENCE() {
		return NOM_RESIDENCE;
	}

	public void setNOM_RESIDENCE(String nOM_RESIDENCE) {
		NOM_RESIDENCE = nOM_RESIDENCE;
	}

	public String getNOMBRE_LIT() {
		return NOMBRE_LIT;
	}

	public void setNOMBRE_LIT(String nOMBRE_LIT) {
		NOMBRE_LIT = nOMBRE_LIT;
	}

	public Long getNombre_PERSONNE() {
		return Nombre_PERSONNE;
	}

	public void setNombre_PERSONNE(Long nombre_PERSONNE) {
		Nombre_PERSONNE = nombre_PERSONNE;
	}

	public String getID_RESIDENCE() {
		return ID_RESIDENCE;
	}

	public void setID_RESIDENCE(String iD_RESIDENCE) {
		ID_RESIDENCE = iD_RESIDENCE;
	}

	public Date getDATE_FIN() {
		return DATE_FIN;
	}

	public void setDATE_FIN(Date dATE_FIN) {
		DATE_FIN = dATE_FIN;
	}

	public Date getDATE_DEBUT() {
		return DATE_DEBUT;
	}

	public void setDATE_DEBUT(Date dATE_DEBUT) {
		DATE_DEBUT = dATE_DEBUT;
	}

	public String getType_periode() {
		return TYPE_PERIODE;
	}

	public void setType_periode(String type_periode) {
		this.TYPE_PERIODE = type_periode;
	}
	
	

}
