package org.catsid.entities;

public class AmicaleUser {

	private String matricule;
	private String nom;
	private String affectation;
	private String mail;
	private String tel;

	public AmicaleUser() {
		super();
	}

	public AmicaleUser(String matricule, String nom, String affectation, String mail, String tel) {
		super();
		this.matricule = matricule;
		this.nom = nom;
		this.affectation = affectation;
		this.mail = mail;
		this.tel = tel;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getAffectation() {
		return affectation;
	}

	public void setAffectation(String affectation) {
		this.affectation = affectation;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

}
