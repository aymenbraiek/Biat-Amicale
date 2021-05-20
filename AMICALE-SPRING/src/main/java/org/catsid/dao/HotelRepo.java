package org.catsid.dao;

import java.util.List;

import org.catsid.entities.hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepo extends JpaRepository<hotel, String>{

	@Query("select a from hotel a where a.activation like '1'")
	public hotel findAllHotel ();
	
	
	@Query("select DISTINCT a.NOM_HOTEL FROM hotel a where a.activation like '1' ")
	public List<String> getHotelName();
 	
	
	@Query(value=" select a from  hotel a where a.NOM_HOTEL=:x")
	public hotel getVille_Classement(@Param("x") String hotel);

}
