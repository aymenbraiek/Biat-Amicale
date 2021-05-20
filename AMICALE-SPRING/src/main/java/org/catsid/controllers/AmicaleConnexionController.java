package org.catsid.controllers;

import org.catsid.entities.AmicaleUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;;

@CrossOrigin("*")
@RestController
@RequestMapping("amicale")
public class AmicaleConnexionController {

	public static final Logger logger = LoggerFactory.getLogger(AmicaleConnexionController.class);
	
	
	@RequestMapping("/login")
	public AmicaleUser user(@RequestParam(name = "matricule", defaultValue = "") String matricule,
			@RequestParam(name = "mot_de_passe", defaultValue = "") String mot_de_passe) {
		AmicaleUser user = new AmicaleUser();
			try {
				connexionLDAP c = new connexionLDAP(matricule, mot_de_passe);
				System.out.println("Connexion LDAP Matricule = "+" "+c.getMatricule_()+" "+c.toString());
				System.out.println("Connexion LDAP NOM = "+" "+c.getNom()+" "+c.toString());
				user.setMatricule(c.getMatricule_());
				user.setNom(c.getNom());
				user.setAffectation(c.getAffectation());
				user.setTel(c.getTel());
				user.setMail(c.getMail());
				return user;
				
			} catch (Exception e) {
				// TODO: handle exception
			}		
			
				return user;
		
		
	}
	
	

}
