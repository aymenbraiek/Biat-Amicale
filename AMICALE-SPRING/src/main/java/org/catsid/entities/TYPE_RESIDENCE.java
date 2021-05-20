package org.catsid.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "TYPE_RESIDENCE")
@Entity
public class TYPE_RESIDENCE implements Serializable {

	@Id
	private String ID;
	private String TYPE_RES;
	private String NB_JOUR;
	private String PERIODE;

	public TYPE_RESIDENCE() {
		super();
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getTYPE_RES() {
		return TYPE_RES;
	}

	public void setTYPE_RES(String tYPE_RES) {
		TYPE_RES = tYPE_RES;
	}

	public String getNB_JOUR() {
		return NB_JOUR;
	}

	public void setNB_JOUR(String nB_JOUR) {
		NB_JOUR = nB_JOUR;
	}

	public String getPERIODE() {
		return PERIODE;
	}

	public void setPERIODE(String pERIODE) {
		PERIODE = pERIODE;
	}

}
