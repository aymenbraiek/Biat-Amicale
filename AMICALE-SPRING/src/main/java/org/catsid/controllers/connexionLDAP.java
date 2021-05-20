package org.catsid.controllers;

import java.util.Hashtable;
import java.util.Hashtable;
import javax.naming.AuthenticationException;
import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.Attribute;
import javax.naming.directory.Attributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;

public class connexionLDAP {

	private String usernameDN = "authreader";
	private String passwordDN = "re@d123$";
	private String base = "cn=Users,DC=biat,DC=int";
	private String path = "";
	private String bs = "ou=Utilisateurs BIAT,DC=biat,DC=int";
	private String dn = "cn=" + usernameDN + ", " + base;
	private String ldapURL = "ldap://172.28.14.2:389";
	private String matricule_ = "";
	private String nom = "";
	private String affectation = "";
	private String tel = "";
	private String mail = "";

	public connexionLDAP(String matricule, String mot_de_passe) {
		try {
			nom = amicaleConnexionLDAP(matricule, mot_de_passe);
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Erreur de connexion LDAP :" + e);
		}

	}

	public String getMatricule_() {
		return matricule_;
	}

	public void setMatricule_(String matricule) {
		this.matricule_ = matricule;
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

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String amicaleConnexionLDAP(String matricule, String mot_de_passe) {

		Hashtable<String, String> environment = new Hashtable<String, String>();
		environment.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
		environment.put(Context.PROVIDER_URL, ldapURL);
		environment.put(Context.SECURITY_AUTHENTICATION, "simple");
		environment.put(Context.SECURITY_PRINCIPAL, dn);
		environment.put(Context.SECURITY_CREDENTIALS, passwordDN);
		try {
			DirContext authContext = new InitialDirContext(environment);
			SearchControls ContrainteRecherche = new SearchControls();
			ContrainteRecherche.setSearchScope(SearchControls.SUBTREE_SCOPE);
			String critere = "(sAMAccountname=" + matricule + ")";
			NamingEnumeration answer = authContext.search(bs, critere, ContrainteRecherche);
			while (answer.hasMore()) {
				SearchResult currentElement = (SearchResult) answer.next();
				path = currentElement.getName();

				Attributes attrs = currentElement.getAttributes();
				Attribute attr0 = attrs.get("sAMAccountname");
							
				System.out.println("--test nom:" + nom);

			}
			authContext.close();
		} catch (AuthenticationException ex) {
			ex.printStackTrace();
		} catch (NamingException ex) {
			ex.printStackTrace();
		}

		String base1 = path + "," + bs;
		// String dn1 = "cn=" + login + ", " + base1;
		Hashtable<String, String> env = new Hashtable<String, String>();
		env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
		env.put(Context.PROVIDER_URL, ldapURL);
		env.put(Context.SECURITY_AUTHENTICATION, "simple");
		env.put(Context.SECURITY_PRINCIPAL, base1);
		env.put(Context.SECURITY_CREDENTIALS, mot_de_passe);
		System.out.println("** --------- ** mot_de_passe= " + mot_de_passe);
		System.out.println("** --------- ** HERE");

		try {
			DirContext authContext1 = new InitialDirContext(env);
			System.out.println("** --------- ** " + nom);
			
			SearchControls ContrainteRecherche = new SearchControls();
			ContrainteRecherche.setSearchScope(SearchControls.SUBTREE_SCOPE);
			String critere = "(sAMAccountname=" + matricule + ")";
			NamingEnumeration answer = authContext1.search(bs, critere, ContrainteRecherche);
			while (answer.hasMore()) {
				SearchResult currentElement = (SearchResult) answer.next();
				path = currentElement.getName();

				Attributes attrs = currentElement.getAttributes();
				Attribute attr0 = attrs.get("sAMAccountname");
				System.out.println("attr0/matricule : " + " " + attr0.get());
				matricule_ = (String) attr0.get();
				System.out.println("++++++++++++++++++++++++++++++++ matricule_"+matricule_);

				Attribute attr = attrs.get("cn");
				System.out.println("attr/nom : " + " " + attr.get());
				nom = (String) attr.get();

				Attribute attr3 = attrs.get("department");
				affectation = (String) attr3.get();
				System.out.println("attr3/affectation : " + " " + attr3.get());

				Attribute attr4 = attrs.get("mail");
				mail = (String) attr4.get();
				System.out.println("attr4/mail : " + " " + attr4.get());

				try {
					Attribute attr5 = attrs.get("telephoneNumber");
					tel = "3131" + (String) attr5.get();
					System.out.println("attr5/tel : " + " " + tel);
				} catch (Exception e) {
					tel = "";
				}


			
			}
			
			
			
			return nom;

		} catch (AuthenticationException ex1) {
			ex1.printStackTrace();

			return null;
		} catch (NamingException ex1) {
			ex1.printStackTrace();

			return null;
		}

	}
}
