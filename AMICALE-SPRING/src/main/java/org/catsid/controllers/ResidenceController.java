package org.catsid.controllers;

import java.util.List;

import org.catsid.dao.ResidenceRepo;
import org.catsid.dao.Type_Res_REPO;
import org.catsid.entities.Residence;
import org.catsid.entities.hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import oracle.jdbc.proxy.annotation.Post;

@RequestMapping("amicale")
@RestController
public class ResidenceController {

	@Autowired
	ResidenceRepo residenceRepo;

	@Autowired
	Type_Res_REPO type_Res_REPO;

	@GetMapping(value = "listResidenceName")
	public List<String> listResidenceName() {
		return residenceRepo.listResidenceName();
	}

	@GetMapping("ville")
	public String getVille(@RequestParam(name = "NOM_RESIDENCE", defaultValue = "") String NOM_RESIDENCE) {
		return residenceRepo.findVille(NOM_RESIDENCE);
	}

	@PostMapping("saveResidence")
	public Residence save(@RequestParam(name = "residence", defaultValue = "") Residence residence) {
		residence.setID_RESIDENCE("5");
		return residenceRepo.save(residence);
	}

	@GetMapping("periode")
	public List<String> periode(@RequestParam(name = "typeResidence", defaultValue = "") String typeResidence) {
		return type_Res_REPO.periode(typeResidence);
	}

	@GetMapping("nombreLit")
	public String nombreLit(@RequestParam(value = "nomResidence") String nomResidence) {
		return residenceRepo.nbreLit(nomResidence);
	}

	@GetMapping("typePeriode")
	public String typePeriode(@RequestParam(value = "nomResidence") String nomResidence) {
		return residenceRepo.typePeriode(nomResidence);
	}
}
