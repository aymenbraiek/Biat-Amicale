package org.catsid.controllers;

import java.util.Date;
import java.util.List;

import org.catsid.dao.Amicale_type_reservation_repo;
import org.catsid.entities.AMICALE_TYPE_RESERVATION;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("amicale")
public class Amicale_type_reservation_controller {

	@Autowired
	private Amicale_type_reservation_repo amicale_type_reservation_repo;

	@GetMapping("getMinStay")
	public String getMinStay(@RequestParam(name = "Nom_hotel") String Nom_hotel,
			@RequestParam(name = "TYPE_RESERVATION") String TYPE_RESERVATION,
			@RequestParam(name = "DATE_FIN") String DATE_FIN) {

		System.out.println("DATE FIN " + DATE_FIN);
		return amicale_type_reservation_repo.getMinstay(Nom_hotel, TYPE_RESERVATION, DATE_FIN);
	}

	@GetMapping("typeReservation")
	public List<String> typeReservation(@RequestParam(name = "Nom_hotel") String Nom_hotel) {
		System.out.println(" NAME OF THE HOTEL " + Nom_hotel);
		return amicale_type_reservation_repo.typeReservation(Nom_hotel);
	}

	@GetMapping("testPeriode")
	public AMICALE_TYPE_RESERVATION testPeriode(@RequestParam(name = "Nom_hotel") String Nom_hotel) {

		return amicale_type_reservation_repo.testPeriode(Nom_hotel);

	}
}
