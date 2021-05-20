package org.catsid.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="AMICALE_TYPE_RESERVATION")
@Entity
public class AMICALE_TYPE_RESERVATION implements Serializable{
	
	@Id
	String ID_RESERVATION;
	String TYPE_RESERVATION;
	String NOM_HOTEL;
	String DATE_DEBUT;
	String DATE_FIN;
	String MIN_STAY;
	
	
	public AMICALE_TYPE_RESERVATION() {
		super();
	}


	public String getID_RESERVATION() {
		return ID_RESERVATION;
	}


	public void setID_RESERVATION(String iD_RESERVATION) {
		ID_RESERVATION = iD_RESERVATION;
	}


	public String getTYPE_RESERVATION() {
		return TYPE_RESERVATION;
	}


	public void setTYPE_RESERVATION(String tYPE_RESERVATION) {
		TYPE_RESERVATION = tYPE_RESERVATION;
	}


	public String getNOM_HOTEL() {
		return NOM_HOTEL;
	}


	public void setNOM_HOTEL(String nOM_HOTEL) {
		NOM_HOTEL = nOM_HOTEL;
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


	public String getMIN_STAY() {
		return MIN_STAY;
	}


	public void setMIN_STAY(String mIN_STAY) {
		MIN_STAY = mIN_STAY;
	}

	
	
	
	

}
