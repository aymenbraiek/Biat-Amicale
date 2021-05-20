package org.catsid.controllers;

import java.util.List;

import org.catsid.dao.ReservationRepo;
import org.catsid.entities.reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("amicale")
@RestController
public class ReservationController {

	@Autowired
	ReservationRepo reservation_repo;

	@PostMapping(value = "addReservation")
	public reservation saveReservation(@RequestBody reservation reservation) {

		Integer max_id = reservation_repo.getMaxIdReservation();

		if (max_id == null) {
			max_id = 1;
			reservation.setID_RESERVATION(max_id);
		} else {
			reservation.setID_RESERVATION(max_id + 1);
		}
		System.out.println("--------------" + reservation);
		return reservation_repo.save(reservation);
	}

	@GetMapping(value = "ExistReservation")
	public Boolean Exist(@RequestParam(name = "matricule") String matricule) {

		String existReser = reservation_repo.existReservation(matricule);
		if (existReser != null)
			return true;
		else
			return false;

	}

	public List<reservation> findAllReservation() {
		return reservation_repo.findAll();
	}
	
	@GetMapping(value = "findAllReservation")
	public List<reservation> findallReservation(){
		return reservation_repo.findallReservation();
	}

}
