package org.catsid.entities;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AMICALE_HOTEL")
public class hotel implements Serializable {

	@Id
	private String ID_HOTEL;
	private String NOM_HOTEL;
	private String VILLE;
	private String ADRESSE;
	private String CLASSEMENT;
private String activation;

	public hotel() {
		super();
	}
	
	


	public String getActivation() {
		return activation;
	}




	public void setActivation(String activation) {
		this.activation = activation;
	}




	public String getID_HOTEL() {
		return ID_HOTEL;
	}

	public void setID_HOTEL(String iD_HOTEL) {
		ID_HOTEL = iD_HOTEL;
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

	public String getADRESSE() {
		return ADRESSE;
	}

	public void setADRESSE(String aDRESSE) {
		ADRESSE = aDRESSE;
	}

	public String getCLASSEMENT() {
		return CLASSEMENT;
	}

	public void setCLASSEMENT(String cLASSEMENT) {
		CLASSEMENT = cLASSEMENT;
	}


	
}
