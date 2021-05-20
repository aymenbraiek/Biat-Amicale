package org.catsid.controllers;

import java.util.List;

import org.catsid.dao.HotelRepo;
import org.catsid.entities.hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat.Value;

@RequestMapping("amicale")
@RestController
public class hotelController {

	@Autowired
	HotelRepo hotel_rep;

	@RequestMapping(value = "getAllHotel", method = RequestMethod.GET)
	public hotel getAllHotel() {
		return hotel_rep.findAllHotel();
	}

	@RequestMapping(value = "getHotelName", method = RequestMethod.GET)
	public List<String> getHotelName() {
		return hotel_rep.getHotelName();
	}

	@RequestMapping("villeHotel")
	public hotel  getVille(@RequestParam(name = "selected_hotel", defaultValue = "") String selected_hotel) {
		return hotel_rep.getVille_Classement(selected_hotel);
	}
	
	
	
	

}
